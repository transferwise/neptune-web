<Upload
  animationDelay={700}
  csButtonText="Select other file?"
  csFailureText="Upload failed.Please, try again"
  csSuccessText="Upload complete!"
  csTooLargeMessage="Please provide a file smaller than 5MB"
  csWrongTypeMessage="Please provide a supported format"
  maxSize={5000000}
  psButtonText="Cancel"
  psFailureText="Upload failed.Please, try again"
  psProcessingText="Uploading..."
  psSuccessText="Upload complete!"
  size="md"
  usAccept="image/*"
  usButtonText="Or Select File"
  usDisabled={false}
  usDropMessage="Drop file to start upload"
  usLabel=""
  usPlaceholder="Drag and drop file less than 5MB"
  usAccept="image/*"
  usHelpImage={IMAGES[0].value}
  httpOptions={{
    url: 'https://httpbin.org/post',
  }}
  onStart={file => console.log('onStart', file)}
  onSuccess={httpResponse => console.log('onSuccess', httpResponse)}
  onFailure={httpResponse => console.log('onFailure', httpResponse)}
  onCancel={() => console.log('onCancel')}
  size="md"
/>;
