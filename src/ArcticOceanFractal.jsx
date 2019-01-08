/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ocean Fractal
 * Repository: https://github.com/arcticicestudio/arctic-ocean-fractal
 * License:    MIT
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import posed from "react-pose";

import { POSE_HIDE, POSE_SHOW } from "./shared/constants";
import {
  BubblesFishSwarm,
  BubblesGroundHoleCenter,
  BubblesGroundHoleOverflow,
  BubblesGroundHoleTop,
  BubblesWater
} from "./bubbles";
import IllustrationCanvas from "./IllustrationCanvas";
import { JellyfishCenter, JellyfishLeft, JellyfishLeftSmall, JellyfishRight } from "./jellyfishes";
import calcPoseTimings from "./calcPoseTimings";

const Svg = posed.svg({});

/**
 * An animated fractal of the arctic ocean.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @version 0.1.0
 */
export default class ArcticOceanFractal extends Component {
  static propTypes = {
    /**
     * The total animation duration.
     *
     * @since 0.1.0
     */
    duration: ({ duration }, propName, componentName) =>
      duration < 0 &&
      !Number.isNaN(duration) &&
      new Error(
        `Invalid prop "${propName}" of value "${duration}" supplied to "${componentName}", expected a non-negative number.`
      ),
    /**
     * The function that gets called when the animation is completed.
     *
     * @since 0.1.0
     */
    onAnimationComplete: PropTypes.func,
    /**
     * The name of the animation pose.
     *
     * @since 0.1.0
     */
    pose: PropTypes.oneOf([POSE_HIDE, POSE_SHOW]).isRequired
  };

  static defaultProps = {
    duration: 3200,
    onAnimationComplete: () => {}
  };

  state = {
    /**
     * Trigger to run the CSS animation keyframes after the pose animation has been completed.
     *
     * @since 0.1.0
     */
    runCssAnimations: false
  };

  /**
   * Handles the triggering of the CSS keyframe animations and calls the custom animation callback function.
   *
   * @method handleCssAnimations
   * @return {void}
   * @since 0.1.0
   */
  handleCssAnimations = () => {
    const { onAnimationComplete } = this.props;
    this.setState({ runCssAnimations: true });
    onAnimationComplete();
  };

  render() {
    const { duration, pose } = this.props;
    const { runCssAnimations } = this.state;
    const { anglerfish, jellyfish } = calcPoseTimings(duration);

    return (
      <Svg
        onPoseComplete={this.handleCssAnimations}
        pose={pose}
        viewBox="0 0 800 640.66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IllustrationCanvas anglerfishProps={anglerfish} />
        <BubblesFishSwarm />
        <BubblesWater />
        <BubblesGroundHoleTop />
        <BubblesGroundHoleCenter />
        <BubblesGroundHoleOverflow />
        <JellyfishLeft poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
        <JellyfishLeftSmall poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
        <JellyfishCenter poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
        <JellyfishRight poseTimings={jellyfish} runCssAnimations={runCssAnimations} />
      </Svg>
    );
  }
}
