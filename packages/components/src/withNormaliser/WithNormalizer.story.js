import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import WithNormalizer from './WithNormalizer';
import Select from '../select';
import Upload from '../upload';

export default {
  component: WithNormalizer,
  title: 'WithNormalizer',
};

export const basic = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [uploadValue, setUploadValue] = useState('');
  // eslint-disable-next-line
  console.log('uploadValue', uploadValue);
  return (
    <>
      <h1>Normalizer test please DO NOT USE.</h1>
      <div className="m-t-3">
        <label htmlFor="inputTest">Input field with normalizer</label>
        <WithNormalizer>
          <input
            type="text"
            id="inputTest"
            className="form-control"
            onChange={(e) => setInputValue(e)}
          />
        </WithNormalizer>
        <div className="m-t-2">
          Returned Value: <b>{inputValue}</b>
        </div>
      </div>
      <div className="m-t-3">
        <label htmlFor="selectTest">Select field with normalizer</label>
        <WithNormalizer>
          <Select
            id="selectTest"
            size="md"
            placeholder="placeholder"
            inverse={false}
            block
            onChange={(v) => setSelectValue(v)}
            required
            searchPlaceholder="Search placeholder"
            options={[
              { header: 'Basic' },
              { value: 0, label: 'A thing', note: 'with a note' },
              { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
            ]}
          />
        </WithNormalizer>
        <div className="m-t-2">
          Returned Value: <b>{selectValue}</b>
        </div>
      </div>
      <div className="m-t-3">
        <label htmlFor="uploadTest">Upload field with normalizer</label>
        <WithNormalizer>
          <Upload
            id="uploadTest"
            animationDelay={700}
            csUploadText="Select other file?"
            csFailureText="Upload failed.Please, try again"
            csSuccessText="Upload complete!"
            csTooLargeMessage="Please provide a file smaller than 5MB"
            csWrongTypeMessage="Please provide a supported format"
            maxSize={500000}
            psUploadText="Cancel"
            psFailureText="Upload failed.Please, try again"
            psProcessingText="Uploading..."
            psSuccessText="Upload complete!"
            size="sm"
            usAccept="image/*"
            usUploadText="Or Select File"
            usDisabled={false}
            usDropMessage="Drop file to start upload"
            usLabel=""
            usPlaceholder="Drag and drop file less than 5MB"
            usHelpImage="https://github.com/transferwise.png"
            httpOptions={{
              url: 'https://httpbin.org/post',
              method: 'POST',
            }}
            onStart={(file) => action('onStart', file)}
            onSuccess={(httpResponse) => setUploadValue(httpResponse)}
            onFailure={(httpResponse) => setUploadValue(httpResponse)}
            onCancel={() => action('onCancel')}
          />
        </WithNormalizer>
        <div className="m-t-2">
          Returned Value: <b>Please check console for results</b>
        </div>
      </div>
    </>
  );
};
