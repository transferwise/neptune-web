const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const resolvedPath = path.resolve(dirPath);
  const files = fs.readdirSync(resolvedPath);
  let returnArray = arrayOfFiles;
  files.forEach((file) => {
    if (fs.statSync(`${resolvedPath}/${file}`).isDirectory()) {
      returnArray = getAllFiles(`${resolvedPath}/${file}`, returnArray);
    } else {
      returnArray.push(path.join(resolvedPath, file));
    }
  });

  return returnArray;
};

async function getGzip(filePath) {
  const { stdout } = await exec(`gzip -c ${filePath} | wc -c`);

  return stdout / 1000;
}

const getTotalSize = async (directoryPath) => {
  const arrayOfFiles = getAllFiles(directoryPath);
  let totalSize = 0;

  arrayOfFiles.forEach((filePath) => {
    totalSize += fs.statSync(filePath).size;
  });

  return totalSize / 1000;
};

const getBundleSize = async () => {
  const bundleSize = {
    umd: {
      polyfill: [
        await getTotalSize('../components/build/umd/polyfill/'),
        await getGzip('../components/build/umd/polyfill/main.js'),
      ],
      'no-polyfill': [
        await getTotalSize('../components/build/umd/no-polyfill/'),
        await getGzip('../components/build/umd/no-polyfill/main.js'),
      ],
    },
    es: {
      polyfill: await getTotalSize('../components/build/es/polyfill/'),
      'no-polyfill': await getTotalSize('../components/build/es/no-polyfill/'),
    },
  };

  fs.writeFileSync(
    path.resolve(process.cwd(), 'temp-bundle-sizes.js'),
    `export default ${JSON.stringify(bundleSize, null, 2)}`,
  );
};
getBundleSize();
