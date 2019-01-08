/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import { poseConfigJellyfish } from "../shared/poseConfig";
import { jellyfishPropTypes } from "../shared/propTypes";

const Tentacle = styled(posed.path(poseConfigJellyfish))`
  ${({ tentaclesAnimation, runCssAnimations }) => runCssAnimations && tentaclesAnimation};
  animation-play-state: ${({ runCssAnimations }) => (runCssAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Group = styled(posed.g(poseConfigJellyfish))`
  ${({ bodyAnimation, runCssAnimations }) => runCssAnimations && bodyAnimation};
  animation-play-state: ${({ runCssAnimations }) => (runCssAnimations ? "running" : "paused")};
  transform-style: preserve-3d;
`;

const Jellyfish = ({ bodyAnimation, bodyPaths, poseTimings, runCssAnimations, tentaclesAnimation, tentaclePaths }) => (
  <Group bodyAnimation={bodyAnimation} runCssAnimations={runCssAnimations} {...poseTimings}>
    {tentaclePaths.map(({ d, fill }) => (
      <Tentacle key={d} d={d} fill={fill} runCssAnimations={runCssAnimations} tentaclesAnimation={tentaclesAnimation} />
    ))}
    {bodyPaths.map(({ d, fill }) => (
      <path key={d} d={d} fill={fill} />
    ))}
  </Group>
);

Jellyfish.propTypes = jellyfishPropTypes;

export default React.memo(props => <Jellyfish {...props} />);
