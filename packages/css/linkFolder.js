const path = require('path');
const { spawn } = require('child_process');

spawn('ln', ['-s', `${path.resolve('../docs')}/pages/styles`, `${__dirname}/pages`]);
