<p align="center"><a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://raw.githubusercontent.com/arcticicestudio/arctic-ocean-fractal/develop/assets/repository-hero.svg?sanitize=true"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/arctic-ocean-fractal/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/arctic-ocean-fractal.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://img.shields.io/npm/v/arctic-ocean-fractal.svg?style=flat-square&logo=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://img.shields.io/npm/dt/arctic-ocean-fractal.svg?style=flat-square&logo=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center">An animated fractal of the arctic ocean</p>

# 0.1.0

![Release Date: 2019-01-08](https://img.shields.io/badge/Release_Date-2019--01--08-88c0d0.svg?style=flat-square&colorA=4c566a) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/arctic-ocean-fractal/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88c0d0.svg?style=flat-square&colorA=4c566a&logo=github&logoColor=eceff4)](https://github.com/arcticicestudio/arctic-ocean-fractal/milestone/1)

This is the initial release version of _Arctic Ocean Fractal_.
It represents the basic project setup, structure and development workflow with an deployable state. It provides the initial implementations and configurations.

To get an overview of the general project plan, [read the documentation][gh-readme] which introduces the project and it's usage, the architecture, the tech stack and the development workflow.

<p align="center"><a href="https://www.npmjs.com/package/arctic-ocean-fractal"><img src="https://raw.githubusercontent.com/arcticicestudio/arctic-ocean-fractal/develop/assets/preview.gif"/></a></p>

## Features

### Basic Project Setup

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg?sanitize=true" width="10%" /></p>

**NPM package initialization** — #1 (⊶ ad46d7f2)
↠ Initialized the [NPM][npm-docs-pkg] `package.json` file that contains the project's metadata and dependency definitions.

**Initial Project Setup** — #2 (⊶ 7bf16ba4)
↠ Implemented the initial project setup based on [Arctic Ice Studio's][ais] standards and conventions.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48661206-c0fe6600-ea6e-11e8-8142-4c65c82b9927.png" width="50%" /></p>

**Styled SVG Vector Graphic Components** — #3 (⊶ 73f18227)
↠ Implemented all required styled SVG vector graphic fractal components the main `ArcticOceanFractal` (#3) component consists of.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48669377-c0fc7580-eb03-11e8-82e8-4853fb0ed52c.png" width="10%" /></p>

**Main Public API `ArcticOceanFractal` Component** — #4 (⊶ 255527c6)
↠ Implemented the main `ArcticOceanFractal` component. It is build out of the styled components implemented in #3 and represents the public API including the [`props` to customize the component][gh-readme-cs].

---

<!--
+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
-->

<!-- lint disable final-definition -->

<!-- Base Links -->

[ais]: https://www.arcticicestudio.com
[gh-readme]: https://github.com/arcticicestudio/arctic-ocean-fractal/blob/develop/README.md
[gh-readme-cs]: https://github.com/arcticicestudio/arctic-ocean-fractal#customization
[npm-docs-pkg]: https://docs.npmjs.com/files/package.json
