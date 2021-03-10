import React, { ReactElement } from 'react';
import { Alert, Image } from '@transferwise/components';
import button1 from '../../static/assets/blog/button-release-mar-2021_1.png';
import button2 from '../../static/assets/blog/button-release-mar-2021_2.png';

export const meta = {
  name: 'Button Upgrade Guide',
  date: '2021-03-09',
  authors: [
    {
      name: 'Helen Durrant',
      githubUsername: 'helendurranttw',
    },
  ],
};

/* eslint-disable react/jsx-curly-brace-presence */
export default function PageContent(): ReactElement {
  return (
    <div>
      <Alert message="These changes will be released in components **v35**. See the Button designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@31.4.2-beta.48" />
      <p>
        We have made some changes to our buttons to address inconsistencies across platforms, and to
        update our types to reflect our new standard of using semantic colours. This guide will
        provide the necessary steps to upgrade to the latest version.
      </p>
      <p>
        <b>Note:</b> For most people your buttons will continue to work without any changes -
        however you will see deprecation warnings asking you to update prop usage.
      </p>
      <p>
        <a href="#steps-to-upgrade">Skip to the upgrade steps.</a>
      </p>
      <h2>Changes</h2>
      <h3>Type has been split into Type + Priority</h3>
      Our old types (PRIMARY, SECONDARY, PAY, DANGER and LINK) were a mix of colours and weights. We
      have deprecated these and introduced two props: TYPE and PRIORITY. These are the possible
      options:
      <ul>
        <li>
          <b>TYPE:</b> ACCENT, POSITIVE and NEGATIVE
        </li>
        <li>
          <b>PRIORITY:</b> PRIMARY, SECONDARY and TERTIARY
        </li>
      </ul>
      TYPE maps to different colours and semantic use cases. PRIORITY varies the weight or impact of
      the component. PRIMARY buttons are filled to draw the user’s attention, SECONDARY are
      outlined, and TERTIARY are text only (currently only supported with type ACCENT).
      <br />
      <Image src={button1} loading="lazy" stretch={false} />
      <h3>Negative (a.k.a danger) buttons are now always red</h3>
      <Alert type="warning" message="**VISUAL CHANGE**" />
      <p>
        We have updated the secondary negative button (previously the danger button) to have a red
        outline, not grey. This rectifies a longstanding inconsistency across platforms, and gives
        users a clearer indication that this button will produce a destructive action. See the
        before and after:
      </p>
      <Image src={button2} loading="lazy" stretch={false} />
      <h3>Moved social media button classes out of the Neptune CSS bundle</h3>
      <Alert type="negative" message="**BREAKING CHANGE**" />
      <p>
        Neptune CSS contains the Google and Facebook logos. These are used very rarely, and add
        unnecessary weight to most people’s bundles. We have separated these into a new, optional
        file: <code>neptune-social-media.css</code>.
      </p>
      <h3>Removed the .btn-download class from Neptune CSS</h3>
      <Alert type="negative" message="**BREAKING CHANGE**" />
      We have removed styling for an unused button type - the download button (
      <code>.btn-download</code>). <b>We don’t believe anyone is usingthis</b>.
      <h2 id="steps-to-upgrade">Steps to upgrade</h2>
      <h3>1: Import social-media css if required</h3>
      <Alert message="Most people will not need to follow this step." />
      If you have social media buttons that use either of the <code>.btn-google</code> or{' '}
      <code>.btn-facebook</code> classes, you will now need to import{' '}
      <code>neptune-social-media.css</code> after <code>neptune.css</code>:
      <pre>
        {`import '@transferwise/neptune-css/dist/css/neptune.css';`}
        <br />
        {`import '@transferwise/neptune-css/dist/css/neptune-social-media.css';`}
      </pre>
      <h3>2: Update prop usage for Buttons</h3>
      <p>
        <b>Note:</b> Buttons will continue to work without this step, but you will see deprecation
        warnings being logged if you are still using old types. If you are using any of the old
        types listed below, you will need to update the type and add the new priority. Buttons
        without a type can be left alone (the defaults will still work).
      </p>
      <Alert
        type="positive"
        message="**We have created a tool that will perform these mappings for you.** Simply update to the latest version of components and run yarn run neptune-upgrade-util. Choose the upgrade script 2021-02-v34-35.js and follow the instructions to run the script on your source folder."
      />
      <p>If you prefer to do these manually, you can update as per the table below:</p>
      <table className="docs-table table">
        <thead>
          <tr>
            <th>Type (old)</th>
            <th>Type (new)</th>
            <th>Priority (new)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PRIMARY</td>
            <td>ACCENT</td>
            <td>PRIMARY (can be left off, as PRIMARY is the default)</td>
          </tr>
          <tr>
            <td>PAY</td>
            <td>POSITIVE</td>
            <td>PRIMARY (can be left off, as PRIMARY is the default)</td>
          </tr>
          <tr>
            <td>SECONDARY</td>
            <td>ACCENT</td>
            <td>SECONDARY</td>
          </tr>
          <tr>
            <td>DANGER</td>
            <td>NEGATIVE</td>
            <td>SECONDARY</td>
          </tr>
          <tr>
            <td>LINK</td>
            <td>ACCENT</td>
            <td>TERTIARY</td>
          </tr>
        </tbody>
      </table>
      <p>For example:</p>
      <pre>
        {`<Button type={Button.Type.SECONDARY}>Secondary</Button>`}
        <br />
        {`<Button type={Button.Type.PAY}>Pay</Button>`}
      </pre>
      Becomes:
      <pre>
        {`<Button type={Button.Type.ACCENT} priority={Button.Priority.SECONDARY}>Secondary</Button>`}
        <br />
        {`<Button type={Button.Type.POSITIVE}>Pay</Button>`}
      </pre>
      <h2>Dependency requirements</h2>
      <pre>
        {'@transferwise/components >= 35.x.x'}
        <br />
        {'@transferwise/neptune-css >= 9.x.x'}
      </pre>
    </div>
  );
}
