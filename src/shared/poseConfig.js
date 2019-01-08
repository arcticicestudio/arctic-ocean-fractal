/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

/**
 * @file Provides shared pose configurations.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://popmotion.io/pose/api/react-config
 */

const transitionSpringBounceIn = {
  type: "spring",
  stiffness: 250,
  damping: 12,
  velocity: 2
};

const timingsAnglerfishEyeLens = {
  delay: ({ anglerfishEyeLensDelay }) => anglerfishEyeLensDelay,
  duration: ({ anglerfishEyeLensDuration }) => anglerfishEyeLensDuration
};

const poseConfigJellyfish = {
  hide: {
    opacity: 0,
    scale: 0,
    transition: { scale: { ...transitionSpringBounceIn } }
  },
  show: {
    opacity: 1,
    scale: 1,
    delay: ({ jellyFishDelay }) => jellyFishDelay,
    duration: ({ jellyFishDuration }) => jellyFishDuration,
    transition: { scale: { ...transitionSpringBounceIn } }
  }
};

const poseConfigAnglerfish = {
  hide: {
    rotate: 15,
    scale: 1.6,
    x: -92,
    y: -45
  },
  show: {
    rotate: 0,
    scale: 1,
    x: 20,
    y: 8,
    delay: ({ anglerfishDelay }) => anglerfishDelay,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      velocity: 15,
      duration: ({ anglerfishDuration }) => anglerfishDuration
    }
  }
};

const poseConfigAnglerfishEyeLens = {
  hide: { scale: 1 },
  show: {
    scale: 0.7,
    ...timingsAnglerfishEyeLens
  }
};

const poseConfigAnglerfishForeheadSkinFold = {
  hide: { opacity: 1 },
  show: {
    opacity: 0,
    ...timingsAnglerfishEyeLens
  }
};

export { poseConfigAnglerfish, poseConfigAnglerfishEyeLens, poseConfigAnglerfishForeheadSkinFold, poseConfigJellyfish };
