import React, { Component } from "react";
import { Handles, Rail, Slider, Tracks } from "react-compound-slider";
import { Handle, SliderRail, Track } from "./SliderMiscComponents";

const sliderStyle = {
  position: "relative",
  width: "100%",
  touchAction: "none"
};

export default class SpeechSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setState({
      values: this.props.values,
      update: this.props.values
    });
  }

  onUpdate = update => {
    this.setState({ update });
  };

  render() {
    const { values, domain } = this.props;
    return (
      <div style={{ margin: "1rem", height: 20, width: "100%" }}>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={e => this.props.onLoudnessChange(e[0])}
          onChange={e => this.props.onLoudnessChange(e[0])}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}
