/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

import React from "react";

import { groundHoleOverflowCircles } from "./pathData";
import BubbleGroundHole from "./styled/BubbleGroundHole";

export default React.memo(props => (
  <g>
    {groundHoleOverflowCircles.map(({ cx, cy, r }, idx) => (
      <BubbleGroundHole key={`${cx}-${cy}-${r}`} animDelay={idx} cx={cx} cy={cy} r={r} {...props} />
    ))}
  </g>
));
