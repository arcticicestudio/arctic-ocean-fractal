/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

import React from "react";
import { css, keyframes } from "styled-components";

import Jellyfish from "./Jellyfish";
import { leftSmallPaths, leftSmallTentaclePaths } from "./pathData";
import { jellyfishBasePropTypes } from "../shared/propTypes";

const animTentacleSwing = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -1.5%, 0); }
`;

const animFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -8%, 0); }
`;

const bodyAnimStyle = css`
  animation: ${animFloat} 8s ease-in-out infinite alternate;
`;

const tentaclesAnimStyle = css`
  animation: ${animTentacleSwing} 8s linear 1.8s infinite alternate;
`;

const JellyfishLeftSmall = ({ poseTimings, runCssAnimations }) => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={leftSmallPaths}
    poseTimings={poseTimings}
    runCssAnimations={runCssAnimations}
    tentaclePaths={leftSmallTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishLeftSmall.propTypes = jellyfishBasePropTypes;

export default React.memo(props => <JellyfishLeftSmall {...props} />);
