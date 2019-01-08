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
import { rightPaths, rightTentaclePaths } from "./pathData";
import { jellyfishBasePropTypes } from "../shared/propTypes";

const animTentacleSwing = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0.25%, -1%, 0); }
`;

const animFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(1.8%, -2%, 0); }
`;
const bodyAnimStyle = css`
  animation: ${animFloat} 5s ease-in-out infinite alternate;
`;

const tentaclesAnimStyle = css`
  animation: ${animTentacleSwing} 5s linear 1.8s infinite alternate;
`;

const JellyfishRight = ({ poseTimings, runCssAnimations }) => (
  <Jellyfish
    bodyAnimation={bodyAnimStyle}
    bodyPaths={rightPaths}
    poseTimings={poseTimings}
    runCssAnimations={runCssAnimations}
    tentaclePaths={rightTentaclePaths}
    tentaclesAnimation={tentaclesAnimStyle}
  />
);

JellyfishRight.propTypes = jellyfishBasePropTypes;

export default React.memo(props => <JellyfishRight {...props} />);
