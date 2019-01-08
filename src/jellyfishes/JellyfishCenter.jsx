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
import { centerPaths, centerTentaclePaths } from "./pathData";
import { jellyfishBasePropTypes } from "../shared/propTypes";

const animTentacleSwing = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-0.25%, -1%, 0); }
`;

const animFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-1.5%, -6%, 0); }
`;

const bodyAnimStyle = css`
  animation: ${animFloat} 4s ease-in-out infinite 1.2s alternate;
`;

const tentaclesAnimStyle = css`
  animation: ${animTentacleSwing} 4s linear 3s infinite alternate;
`;

const JellyfishCenter = ({ poseTimings, runCssAnimations }) => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={centerPaths}
    poseTimings={poseTimings}
    runCssAnimations={runCssAnimations}
    tentaclePaths={centerTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishCenter.propTypes = jellyfishBasePropTypes;

export default React.memo(props => <JellyfishCenter {...props} />);
