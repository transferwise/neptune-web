import refractor from 'refractor'
import rehype from 'rehype'

const Code = ({ children, lang }, { darkBg } = {}) => (
  <pre className={(darkBg ? 'dark' : '') + (lang ? ` ${lang}` : '')}>
    {lang ? (
      <code
        className={`language-${lang}`}
        dangerouslySetInnerHTML={{
          __html: rehype()
            .stringify({
              type: 'root',
              children: refractor.highlight(children, lang)
            })
            .toString()
        }}
      />
    ) : (
      <code>{children}</code>
    )}
  </pre>
)

export default Code
