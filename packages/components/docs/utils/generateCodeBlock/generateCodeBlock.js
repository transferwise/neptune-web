import React from 'react';

const generateCodeBlock = (componentName, knobs, componentThis, extraPropsDocs = []) => {
  const docs = Object.values(knobs).map(knob =>
    generateDocsWithUpdatedStateValue(knob, componentThis).join('\n\r  '),
  );
  if (extraPropsDocs.length) {
    docs.push(`\n\r  ${extraPropsDocs.join('\n\r  ')}`);
  }

  return (
    <pre className="tw-docs-code ">
      {`<${componentName}
  ${docs.join()}
/>`}
    </pre>
  );
};

const generateDocsWithUpdatedStateValue = (knob, componentThis) =>
  knob.reduce((acc, curr) => {
    let value = '';
    if (componentThis.state[curr.state] || componentThis.state[curr.state] === false) {
      if (componentThis.state[curr.state].value) {
        ({ value } = componentThis.state[curr.state]);
      } else {
        value = componentThis.state[curr.state].toString();
      }
    }

    acc.push(`${curr.state} = {"${value || ''}"}`);
    return acc;
  }, []);

export default generateCodeBlock;
