import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Types from 'prop-types';

import theme from '../prismTheme';

const LiveEditorBlock = ({ code, scope, display }) => (
  <div className="row live-provider">
    <LiveProvider code={code} scope={scope}>
      {display === 'vertical' ? (
        <>
          <div className="col-xs-12 live-preview m-b-5 p-x-0">
            <LivePreview />
          </div>
          <div className="col-xs-12 live-editor m-b-5">
            <LiveEditor theme={theme} />
          </div>
        </>
      ) : (
        <>
          <div className="col-xl-6 live-editor">
            <LiveEditor theme={theme} />
          </div>
          <div className="col-xl-6 live-preview">
            <LivePreview />
          </div>
        </>
      )}
      <div className="col-xs-12">
        <LiveError />
      </div>
    </LiveProvider>
  </div>
);

LiveEditorBlock.propTypes = {
  code: Types.node.isRequired,
  scope: Types.shape({}).isRequired,
  display: Types.string,
};

LiveEditorBlock.defaultProps = {
  display: 'horizontal',
};

export default LiveEditorBlock;
