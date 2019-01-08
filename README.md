<p align="center"><a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://raw.githubusercontent.com/arcticicestudio/arctic-ocean-fractal/develop/assets/repository-hero.svg?sanitize=true"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/arctic-ocean-fractal/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/arctic-ocean-fractal.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CHANGELOG.md"><img src="https://img.shields.io/github/release/arcticicestudio/arctic-ocean-fractal.svg?style=flat-square&label=Changelog&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://img.shields.io/npm/v/arctic-ocean-fractal.svg?style=flat-square&logo=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://img.shields.io/npm/dt/arctic-ocean-fractal.svg?style=flat-square&logo=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://circleci.com/gh/arcticicestudio/arctic-ocean-fractal"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/arctic-ocean-fractal/develop.svg?style=flat-square&label=Build&logo=circleci&logoColor=eceff4&colorA=4c566a"/></a></p>

<p align="center"><a href="https://popmotion.io/pose"><img src="https://img.shields.io/badge/react--pose-v4+-5E81AC.svg?style=flat-square&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://www.styled-components.com"><img src="https://img.shields.io/badge/styled--components-v4+-5E81AC.svg?style=flat-square&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://reactjs.org"><img src="https://img.shields.io/badge/react-16.7+-5E81AC.svg?style=flat-square&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=JavaScript%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=javascript"/></a> <a href="https://github.com/arcticicestudio/styleguide-markdown/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Markdown%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOSIgaGVpZ2h0PSIzOSIgdmlld0JveD0iMCAwIDM5IDM5Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNEOERFRTkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMS41IDEuNWgzNnYzNmgtMzZ6Ii8%2BPHBhdGggZmlsbD0iI0Q4REVFOSIgZD0iTTIwLjY4MyAyNS42NTVsNS44NzItMTMuNDhoLjU2Nmw1Ljg3MyAxMy40OGgtMS45OTZsLTQuMTU5LTEwLjA1Ni00LjE2MSAxMC4wNTZoLTEuOTk1em0tMi42OTYgMGwtMTMuNDgtNS44NzJ2LS41NjZsMTMuNDgtNS44NzJ2MS45OTVMNy45MzEgMTkuNWwxMC4wNTYgNC4xNnoiLz48L3N2Zz4%3D"/></a> <a href="https://github.com/arcticicestudio/styleguide-git/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-git.svg?style=flat-square&label=Git%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=git"/></a></p>

<p align="center">An animated fractal of the arctic ocean</p>

Arctic Ocean Fractal is an animated [React][] [SVG][mdn-svg] component with a flat, simple and elegant appearance.

It consists of an canvas showing a arctic ocean fractal the ocean with its lively biodiversity, multiple beautiful floating [jellyfishes][wiki-jf] and a a scary-looking [anglerfish][wiki-af].
The overall animation should represent the strengths of a community that can achieve anything if it holds together.

Next to the main [animation poses](#animation-pose) the component can be customized in aspects like the [total animation duration](#animation-duration).
A callback function can be passed to be called when the [show/hide animation has been completed](#animation-completion-callback).

The component is build and dependent on the awesome [styled-components][stc] and [React Pose][rp] projects.
It was mainly developed for the usage and integration with [Nord][], therefore all default colors are based on [Nord's color palettes][nord-docs-c].

## Quick Start

```sh
npm install --save react react-dom arctic-ocean-fractal styled-components react-pose
```

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/arctic-ocean-fractal/develop/assets/preview.gif"/></p>

## Getting Started

### Installation

Add the package as dependency to your project:

```sh
npm install --save arctic-ocean-fractal
```

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies. Note that **this will not install the required [styled-components][npm-stc] and [react-pose][npm-rp]** packages that are defined as [peer dependencies][nodejs-blog-peerdeps] and must be installed separately like described in the [peer dependencies](#peer-dependencies) section below.

#### Peer Dependencies

This package uses [Styled Components][stc-doc-api] and [React Pose][rp-doc-api] API functions that return [React][] components.

Therefore, next to [React][npm-r] and [React DOM][npm-rd], this package depends on the [styled-components][npm-stc] and [react-pose][npm-rp] packages defined as [peer dependencies][nodejs-blog-peerdeps].

Linux & macOS users can easily install all peer dependencies by using [npx][npm-npx], [introduced in `npm@5.2.0`][npm-blog-npx], which comes [pre-bundled with **Node.js 8.2.0** or higher][npm-get]:

```sh
npx install-peerdeps arctic-ocean-fractal
```

When using **npm < 5.2.0**, _npx_ is not pre-bundled, but users can either simply install it globally and then run the above command or install the [install-peerdeps][npm-ipd] package locally/globally to let it handle the installation of all peer dependencies.

```sh
# Via local installation…
npm install install-peerdeps
./node_modules/.bin/install-peerdeps arctic-ocean-fractal

# …or globally.
npm install -g install-peerdeps
install-peerdeps arctic-ocean-fractal
```

#### Manually

All peer dependencies can also be installed manually (e.g. for users running a Microsoft Windows based system) by installing the correct version of each package:

```sh
# Show a list of all required peer dependencies
npm info "arctic-ocean-fractal@latest" peerDependencies

# Install all required peer dependencies
npm install --save arctic-ocean-fractal react react-dom react-pose styled-components
```

## Usage

Arctic Ocean Fractal can be used by importing the [default exported][mdn-export] React component `ArcticOceanFractal`.

```js
import ArcticOceanFractal from "arctic-ocean-fractal";
```

The component can now be placed somewhere in the render tree:

```jsx
// Within a simple function component…
const CustomFunctionComponent = props => (
  <div>
    <ArcticOceanFractal pose="hide" {...props} />
  </div>
);

// …or a class component.
class CustomFunctionComponent extends Component {
  /* ... */
  render() {
    return (
      <div>
        <ArcticOceanFractal pose="hide" />
      </div>
    );
  }
}
```

The available animation pose names are also available as constants through [named exports][mdn-export]:

- `POSE_HIDE` — The name of the `hide` animation pose
- `POSE_SHOW` — The name of the `show` animation pose

```js
import { POSE_HIDE, POSE_SHOW } from "arctic-ocean-fractal";
```

**NOTE**: The component itself **doesn't define any sizing attributes** and inherits from the parent element like the `<div>` in the example above. Therefore it must be wrapped in a container to control the width and height of the component.

To trigger the animation change the passed `hide` animation pose to the `show` animation, e.g. by using a [class-based component][r-docs-comp] and store the name of the current pose in the state that can be toggled through a function:

```jsx
import React, { Component } from "react";
import ArcticOceanFractal, { POSE_HIDE, POSE_SHOW } from "arctic-ocean-fractal";

class CustomFunctionComponent extends Component {
  state = {
    pose: POSE_HIDE
  };

  togglePose = () => this.setState(({ pose }) => ({ pose: pose === POSE_HIDE ? POSE_SHOW : POSE_HIDE }));

  render() {
    const { pose } = this.state;

    return (
      <div>
        <button onClick={this.togglePose}>Toggle Animation Pose</button>
        <ArcticOceanFractal pose={pose} />
      </div>
    );
  }
}
```

Make sure to read the [React Pose documentation][rp-docs-gs] for more details if you're not already familiar with the animation concept with poses.

## Customization

The component can be customized through props. All available props are documented in more detail in the sections below.

### Animation Duration

> **Prop**: `duration`  
> **Type**: number  
> **Default**: `3200`(ms)  
> **Required**: No

The total animation duration in milliseconds.

```js
<ArcticOceanFractal pose="hide" duration={2000} />
```

### Animation Completion Callback

> **Prop**: `onAnimationComplete`  
> **Type**: function  
> **Default**: `() => {}`(noop)  
> **Required**: No

The function that will be called when the pose animation has been completed.

```js
const handleAnimationCompletion = () => console.log("Arctic Ocean Fractal pose animation has been completed!");

<ArcticOceanFractal pose="hide" onAnimationComplete={handleAnimationCompletion} />;
```

### Animation Pose

> **Prop**: `pose`  
> **Type**: string  
> **Default**: -  
> **Required**: Yes  
> **Values**: `hide`\|`show`

The `pose` prop is currently the only required prop and defines the name of the actual animation pose.
This can either be `hide` or `show` where the first one starts the animation that puts the anglerfish in the foreground while the second one makes it hide behind the ocean's underground stones and “blobs in“ the jellyfishes.

Note that both animation pose names are also available as constants as [named exports][mdn-export]:

- `POSE_HIDE` — The name of the `hide` animation pose
- `POSE_SHOW` — The name of the `show` animation pose

```js
import { POSE_HIDE, POSE_SHOW } from "arctic-ocean-fractal";
```

## Development Workflow

Run `npm install` from within the project root to bootstrap the project and install the development- and runtime dependencies.

The project is configured for the opinionated code formatter [Prettier][] which provides [integration support for many editors][prettier-doc-editors] to e.g. automatically format the source file on save.

### Building

A distribution build can be created with [Rollup][] by running

```sh
npm run build
```

Continuous integration builds are running at [Circle CI][circle-ci].

### Testing

#### Linting

JavaScript sources are linted with [ESLint][] using the [arcticicestudio][npm-esl-ais] configuration which can be run with

```sh
npm run lint:js
```

Markdown sources are linted with [remark-lint][npm-rml] using the [arcticicestudio-preset][npm-rml-ais] which can be run with

```sh
npm run lint:md
```

All linting tasks can be run with

```sh
npm run lint
```

## Contributing

Read the [contributing guide][gh-contrib] to learn about the development process and how to propose [enhancement suggestions][gh-contrib-enhancements] and [report bugs][gh-contrib-bug-reports], how to [submit pull requests][gh-contrib-pr] and the project's [styleguides][gh-contrib-styleguides], [branch organization][gh-contrib-branch-org] and [versioning][gh-contrib-versioning] model.

The guide also includes information about [minimal, complete, and verifiable examples][gh-contrib-mcve] and other ways to contribute to the project like [improving existing issues][gh-contrib-improve-issues] and [giving feedback on issues and pull requests][gh-contrib-feedback].

---

<p align="center">Copyright &copy; 2019-present <a href="https://www.arcticicestudio.com">Arctic Ice Studio</a> & <a href="https://www.svengreb.de">Sven Greb</a></p>

<p align="center"><a href="https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a></p>

[circle-ci]: https://circleci.com/gh/arcticicestudio/arctic-ocean-fractal
[eslint]: https://eslint.org
[gh-contrib-branch-org]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#branch-organization
[gh-contrib-bug-reports]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#bug-reports
[gh-contrib-enhancements]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#enhancement-suggestions
[gh-contrib-feedback]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#give-feedback-on-issues-and-pull-requests
[gh-contrib-improve-issues]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#improve-issues
[gh-contrib-mcve]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#mcve
[gh-contrib-pr]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#pull-requests
[gh-contrib-styleguides]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#styleguides
[gh-contrib-versioning]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md#versioning
[gh-contrib]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/CONTRIBUTING.md
[mdn-export]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
[mdn-svg]: https://developer.mozilla.org/en-US/docs/Web/SVG
[nodejs-blog-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[nord-docs-c]: https://www.nordtheme.com/docs/colors
[nord]: https://www.nordtheme.com
[npm-blog-npx]: https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner
[npm-esl-ais]: https://www.npmjs.com/package/eslint-config-arcticicestudio
[npm-get]: https://www.npmjs.com/get-npm
[npm-ipd]: https://www.npmjs.com/package/install-peerdeps
[npm-npx]: https://www.npmjs.com/package/npx
[npm-r]: https://www.npmjs.com/package/react
[npm-rd]: https://www.npmjs.com/package/react-dom
[npm-rml-ais]: https://www.npmjs.com/package/remark-preset-lint-arcticicestudio
[npm-rml]: https://www.npmjs.com/package/remark-cli
[npm-rp]: https://www.npmjs.com/package/react-pose
[npm-stc]: https://www.npmjs.com/package/styled-components
[prettier-doc-editors]: https://prettier.io/docs/en/editors
[prettier]: https://prettier.io
[r-docs-comp]: https://reactjs.org/docs/react-component.html
[react]: https://reactjs.org
[rollup]: https://rollupjs.org
[rp-doc-api]: https://popmotion.io/pose/api
[rp-docs-gs]: https://popmotion.io/pose/learn/get-started
[rp]: https://popmotion.io/pose
[stc-doc-api]: https://www.styled-components.com/docs/api
[stc]: https://www.styled-components.com
[wiki-af]: https://en.wikipedia.org/wiki/Anglerfish
[wiki-jf]: https://en.wikipedia.org/wiki/Jellyfish
