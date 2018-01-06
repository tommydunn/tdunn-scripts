<div align="center">
<h1>tdunn-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects</p>
</div>

## The problem

I do a bunch of open source and want to make it easier to maintain so many
projects.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Inspiration](#inspiration)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev tdunn-scripts
```

## Usage

This is a CLI and exposes a bin called `tdunn-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some
of the things you can do with `tdunn-scripts`.

### Overriding Config

Unlike `react-scripts`, `tdunn-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `tdunn-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`tdunn-scripts` will use that instead of it's own internal config. In addition,
`tdunn-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/tdunn-scripts/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["tdunn-scripts/babel"]}
```

Or, for `jest`:

```javascript
const {jest: jestConfig} = require('tdunn-scripts/config')
module.exports = Object.assign(jestConfig, {
  // your overrides here
})
```

> Note: `tdunn-scripts` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

## Inspiration

This is inspired by `react-scripts`.

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here! Again, this is a very specific-to-me solution.

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://tommydunn.com)<br />[💻](https://github.com/tommydunn/tdunn-scripts/commits?author=tommydunn "Code") [📖](https://github.com/tommydunn/tdunn-scripts/commits?author=tommydunn "Documentation") [🚇](#infra-tommydunn "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/tommydunn/tdunn-scripts/commits?author=tommydunn "Tests") | [<img src="https://avatars2.githubusercontent.com/u/22251956?v=4" width="100px;"/><br /><sub>Suhas Karanth</sub>](https://github.com/sudo-suhas)<br />[💻](https://github.com/tommydunn/tdunn-scripts/commits?author=sudo-suhas "Code") [🐛](https://github.com/tommydunn/tdunn-scripts/issues?q=author%3Asudo-suhas "Bug reports") [⚠️](https://github.com/tommydunn/tdunn-scripts/commits?author=sudo-suhas "Tests") | [<img src="https://avatars0.githubusercontent.com/u/1402095?v=4" width="100px;"/><br /><sub>Matt Parrish</sub>](https://github.com/pbomb)<br />[💻](https://github.com/tommydunn/tdunn-scripts/commits?author=pbomb "Code") [⚠️](https://github.com/tommydunn/tdunn-scripts/commits?author=pbomb "Tests") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/tommydunn/tdunn-scripts.svg?style=flat-square
[build]: https://travis-ci.org/tommydunn/tdunn-scripts
[coverage-badge]: https://img.shields.io/codecov/c/github/tommydunn/tdunn-scripts.svg?style=flat-square
[coverage]: https://codecov.io/github/tommydunn/tdunn-scripts
[version-badge]: https://img.shields.io/npm/v/tdunn-scripts.svg?style=flat-square
[package]: https://www.npmjs.com/package/tdunn-scripts
[downloads-badge]: https://img.shields.io/npm/dm/tdunn-scripts.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/tdunn-scripts
[license-badge]: https://img.shields.io/npm/l/tdunn-scripts.svg?style=flat-square
[license]: https://github.com/tommydunn/tdunn-scripts/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/tommydunn/tdunn-scripts/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/tommydunn/tdunn-scripts.svg?style=social
[github-watch]: https://github.com/tommydunn/tdunn-scripts/watchers
[github-star-badge]: https://img.shields.io/github/stars/tommydunn/tdunn-scripts.svg?style=social
[github-star]: https://github.com/tommydunn/tdunn-scripts/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20kcd-scripts!%20https://github.com/tommydunn/tdunn-scripts%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/tommydunn/tdunn-scripts.svg?style=social
[emojis]: https://github.com/tommydunn/all-contributors#emoji-key
[all-contributors]: https://github.com/tommydunn/all-contributors
