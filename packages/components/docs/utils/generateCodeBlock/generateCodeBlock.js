import React from 'react';

const generateCodeBlock = (componentName, knobs, componentThis, extraPropsDocs = ['']) => {
  const docs = Object.values(knobs).map(knob =>
    knob
      .reduce((acc, curr) => {
        const value =
          componentThis.state[curr.state] && componentThis.state[curr.state].value
            ? componentThis.state[curr.state].value
            : componentThis.state[curr.state];
        acc.push(`${curr.state} = {"${value || ''}"}`);
        return acc;
      }, [])
      .join('\n\r  '),
  );

  docs.push(`\n\r  ${extraPropsDocs.join('\n\r  ')}`);

  return (
    <pre className="tw-docs-code ">
      {`<${componentName}
  ${docs.join()}
/>`}
    </pre>
  );
};

export default generateCodeBlock;
