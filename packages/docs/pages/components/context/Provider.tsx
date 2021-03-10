import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Provider as ProviderComponent, Money, Select } from '@transferwise/components';
import supportedLanguages from '@transferwise/components/build/i18n';
import { getLangFromLocale } from '@transferwise/components/build/es/polyfill/common/locale';
import messages from '@transferwise/components/build/es/no-polyfill/common/closeButton/CloseButton.messages';
import { DocLink } from '../../../utils/pageUtils';
import { LiveEditorBlock, GeneratePropsTable } from '../../../utils';
import { Meta } from '../../../utils/sections';

// @ts-ignore
import code from '../../../liveEditorCode/provider.code';

const defaultLocale: string = 'en-GB';
const localeOptions: { value: string; label: string }[] = [
  defaultLocale,
  'en-US',
  'ja-JP',
  'zh-HK',
  'es',
  'fr',
  'ru',
  'de',
  'tr',
].map((locale) => ({
  value: locale,
  label: locale,
}));

export default function PageContent(): ReactElement {
  return (
    <>
      Provides contextual data such as translations to components. See the{' '}
      <DocLink href="/about/Setup#translations-and-the-provider">Provider usage guide</DocLink> for
      more.
      <LiveEditorBlock
        code={code}
        scope={{
          getLangFromLocale,
          Provider: ProviderComponent,
          Select,
          Money,
          FormattedMessage,
          messages,
          supportedLanguages,
          localeOptions,
          defaultLocale,
        }}
      />
      <GeneratePropsTable componentName="Provider" />
    </>
  );
}

export const meta: Meta = {
  name: 'Provider',
};
