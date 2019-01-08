/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

import React from "react";
import styled, { keyframes } from "styled-components";

import nord from "../../shared/nord";

const animLightRingGlow = keyframes`
  0% {
    opacity: 0.6;
    fill: ${nord.nord4};
  }

  100% {
    opacity: 0.9;
    fill: ${nord.nord6};
  }
`;

const LightRing = styled.path`
  animation: ${animLightRingGlow} 3s linear infinite alternate;
  transform-style: preserve-3d;
`;

export default React.memo(props => <LightRing {...props} />);
