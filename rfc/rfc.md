## RFC for Neptune Design System

### What?

Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub PR, Slack discussions, etc. workflows.

Some changes though are substantial, and we ask that these be put through a bit of a design process and produce a consensus among the [Design System team](https://github.com/orgs/transferwise/teams/design-system), and/or Web Frontend & Mobile Guilds, designers, etc.

The RFC (request for comments) - is a process which intended to provide a consistent and controlled path for new changes/ideas to enter Neptune Design System, so that all stakeholders can be confident about the direction it's evolving in.


### Why

RFC approach should help us make well evaluated, documented, scalable, consistent and generally better decisions (e.g with more clear adoption or migration path; consider and/or fulfill most or even all use cases; decision for longer terms e.g when we have 100+ designers and/or 500 web & mobile engineers etc.). 

This will help us stay tuned and synchronized.

Also, we believe this will help and encourage people propose their ideas which will boost evolvement of Neptune Design System.


### When?

Not every proposed change/idea should go through RFC process. But if e.g:

- this is some common pattern/convention which affects all/most/many of our components (Web/Mobile)
- introduction of new framework/library (of course this applies not to everything), but if this affects many things and requires some code rewrites or a bit of long migration path it's a good candidate (e.g "let's introduce css-in-js for our styles (Neptune CSS)").
- big changes for our documentation (e.g [Wise brand guidelines](https://brand.wise.com/) should be part of Neptune documentation).
- etc.

When in doubt please contact us, either DM or raise a question in #design-system.

### Who?

Web & Mobile engineers, Designers, Project Managers and basically anyone can submit RFC. DS team will make sure that people follow this process (when necessary).

DS team will also start use (dogfood) this approach for documenting and announcing changes/ideas for gathering feedback from others (mobile devs, #frontend-guild, designers etc.).

### Lifecycle

- Make sure RFC is necessary.
- Write down you proposal choosing any tool, but we recommend either submit a PR with [.md](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) file in our [neptune repo](https://github.com/transferwise/neptune) or create Google Docs/Confluence page as this will help all of easily communicate in comments.
- Share it publicly #design-system (or ask us will do it).
- Then DS team will make sure that enough people have reviewed it and provided feedback in order to make a final decision (approve/reject). Also, while gathering feedback and discussing proposal we might incorporate feedback/additional ideas in initial proposal. Please note: in some cases this process might take a few hours or a few days but in another even a few weeks.
- In any case eventually proposed RFC will be listed in our Neptune Docs for history so that we can easily share it with others and refer to e.g while code review or while our cross team discussions in Slack.
- If proposal was approved, anyone can start working on it, otherwise DS team will address this issue.

### Last Note

This idea is not new in the industry, folks from [Yarn](https://github.com/yarnpkg/rfcs#yarn-rfcs), [React](https://github.com/reactjs/rfcs#react-rfcs), [Rust](https://github.com/rust-lang/rfcs#when-you-need-to-follow-this-process), etc. follow it.

A few examples of big and small RFCs in reality: [Remove `yarn check`](https://github.com/yarnpkg/rfcs/pull/106), [React Hooks](https://github.com/reactjs/rfcs/pull/68).
