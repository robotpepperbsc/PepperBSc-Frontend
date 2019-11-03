import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Media extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { media } = this.props;
    return (
      <div>
        {media.map(media => {
          const className = classNames("media", {
            selected: media.label === this.state.seletectedMove.label
          });
          return (
            <div className={className} onClick={e => this.selectMove(media)}>
              {media.label}
            </div>
          );
        })}
      </div>
    );
  }
}
