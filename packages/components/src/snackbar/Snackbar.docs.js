import React, { Component } from 'react';
import Button from '../button';
import SnackbarProvider, { SnackbarConsumer } from '../snackbar/SnackbarProvider';
import { generateInput, generateState } from '../../docs/utils';
import '@transferwise/neptune-css/dist/css/snackbar.css';

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Label',
      state: 'text',
      defaultState: 'Hello, I am a snack',
    },
    {
      type: 'checkbox',
      label: 'With action',
      state: 'withAction',
      defaultState: true,
    },
  ],
};

class SnackbarDocs extends Component {
  state = { ...generateState(KNOBS) };
  render() {
    const { text, withAction } = this.state;
    return (
      <SnackbarProvider>
        <div className="container" id="snaxx">
          <div className="section">
            <div className="row">
              <div className="col-md-6">
                <h2>Snackbar</h2>
                <p>You lookin{`'`} like a snacc</p>
                <pre className="tw-docs-code ">
                  {`import { SnackbarProvider, SnackbarConsumer } from '@transferwise/components';
import '@transferwise/neptune-css/dist/css/snackbar.css';

<SnackbarProvider>
    <SnackbarConsumer>
        {({ createSnackbar }) => <button onClick={() => createSnackbar('Did someone say snacks?')}></button>}
    </SnackbarConsumer>
</SnackbarProvider>
`}
                </pre>
                <p>Or the hook:</p>
                <pre className="tw-docs-code ">
                  {`const App = () => {
  const createSnackbar = useSnackbar();
  return <button onClick={() => createSnackbar('Did someone say snacks?')}></button>
};
`}
                </pre>
              </div>
              <div className="col-md-6">
                <div className="row m-t-5">
                  {KNOBS.knobs.map(knob => generateInput(knob, this))}
                  <div className="col-md-12 m-t-2">
                    <SnackbarConsumer>
                      {({ createSnackbar }) => (
                        <Button
                          block
                          onClick={() =>
                            createSnackbar({
                              text,
                              action: withAction
                                ? {
                                    label: 'Bite me',
                                    // eslint-disable-next-line no-alert
                                    onClick: () => alert(`I can't believe you've done this.`),
                                  }
                                : null,
                            })
                          }
                          label="Show"
                        />
                      )}
                    </SnackbarConsumer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SnackbarProvider>
    );
  }
}

export default SnackbarDocs;
