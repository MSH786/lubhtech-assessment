import React from "react";
import Svg, {Path} from "react-native-svg";

const MoreIcon = ({width, height}: ISvgIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 1024 1024">
      <Path
        d="M425.68426667 482.15253333H216.75093333c-32.92373333 0-59.6992-26.77546667-59.6992-59.69706666V213.5008c0-32.92266667 26.77546667-59.6896 59.6992-59.6896h208.93333334c32.92373333 0 59.71733333 26.76693333 59.71733333 59.6896v208.9536c0.00106667 32.92266667-26.79253333 59.69813333-59.71733333 59.69813333M216.75093333 213.5008v208.9536h208.98986667l-0.05653333-208.9536H216.75093333zM425.68426667 870.19946667H216.75093333c-32.92373333 0-59.6992-26.77546667-59.6992-59.69706667V601.5488c0-32.9216 26.77546667-59.68746667 59.6992-59.68746667h208.93333334c32.92373333 0 59.71733333 26.76586667 59.71733333 59.68746667v208.9536c0.00106667 32.92266667-26.79253333 59.69706667-59.71733333 59.69706667m-208.93333334-268.65066667v208.9536h208.98986667l-0.05653333-208.9536H216.75093333zM813.73226667 482.15253333H604.79893333c-32.92373333 0-59.6992-26.77546667-59.6992-59.69706666V213.5008c0-32.92266667 26.77546667-59.6896 59.6992-59.6896h149.25546667c16.49813333 0 29.84 13.37066667 29.84 29.84 0 16.48106667-13.34293333 29.8496-29.84 29.8496H604.79893333v208.9536h208.93333334V273.2096c0-16.47146667 13.36106667-29.8496 29.87733333-29.8496 16.47893333 0 29.84 13.37813333 29.84 29.8496v149.24586667c0 32.9216-26.7936 59.69706667-59.71733333 59.69706666M813.73226667 870.19946667H604.79893333c-32.92373333 0-59.6992-26.77546667-59.6992-59.69706667V601.5488c0-32.9216 26.77546667-59.68746667 59.6992-59.68746667h208.93333334c32.92373333 0 59.71733333 26.76586667 59.71733333 59.68746667v208.9536c0 32.92266667-26.7936 59.69706667-59.71733333 59.69706667m-208.93333334-268.65066667v208.9536h208.98986667l-0.05653333-208.9536H604.79893333z"
        fill="#4a89ff"
      />
    </Svg>
  );
};

export default MoreIcon;