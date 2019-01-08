/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

/**
 * Calculates the delay and duration timings for the `Anglerfish` and `Jellyfish` pose animations based on the passed
 * total duration time.
 *
 * @method calcPoseTimings
 * @return {Object} The calculated pose animation timings.
 * @since 0.1.0
 */
const calcPoseTimings = totalTime => {
  let timeLeft = totalTime;

  /* Calculate past time until the anglerfish eye lens animation starts. */
  const anglerfishDelayEyeLens = totalTime * 0.25;
  timeLeft -= anglerfishDelayEyeLens;

  /* Calculate total anglerfish eye lens animation duration */
  const anglerfishDurationEyeLens = timeLeft * 0.07;
  timeLeft -= anglerfishDurationEyeLens;

  /* Calculate anglerfish hiding animation duration. */
  const anglerfishDurationHide = timeLeft * 0.5;
  timeLeft -= anglerfishDurationHide;

  /* Calculate past time until anglerfish hiding animation starts. */
  const anglerfishDelayHide = anglerfishDelayEyeLens + anglerfishDurationEyeLens + timeLeft * 0.15;
  timeLeft -= timeLeft * 0.15;

  /* Calculate jellyfish bounce in animation delay. */
  const jellyfishDelay = anglerfishDelayHide + anglerfishDelayHide * 0.1;
  timeLeft -= anglerfishDelayHide * 0.1;

  return {
    anglerfish: {
      anglerfishDelay: anglerfishDelayHide,
      anglerfishDuration: anglerfishDurationHide,
      anglerfishEyeLensDelay: anglerfishDelayEyeLens,
      anglerfishEyeLensDuration: anglerfishDurationEyeLens
    },
    jellyfish: {
      jellyFishDelay: jellyfishDelay,
      jellyFishDuration: timeLeft
    }
  };
};

export default calcPoseTimings;
