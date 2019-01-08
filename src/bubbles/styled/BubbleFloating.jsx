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

const animBubbleFloat = keyframes`
  0% { opacity: 0; }
  20% { opacity: 1; }
  100% { opacity: 0; }
`;

const BubbleFloating = styled.circle`
  animation: ${animBubbleFloat} 5s linear ${({ animDelay }) => animDelay}s infinite;
  fill: ${nord.nord3};
  opacity: 0;
`;

export default React.memo(props => <BubbleFloating {...props} />);
