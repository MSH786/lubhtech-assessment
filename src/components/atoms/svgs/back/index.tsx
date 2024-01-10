import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackIcon = ({ width, height }: ISvgIconProps) => {
  return (
    <Svg
      width={width} // Set your desired width
      height={height} // Set your desired height
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M731.117037 1024a53.567692 53.567692 0 0 1-39.532957-17.4095L253.936037 528.01674a55.871103 55.871103 0 0 1 1.874869-77.566018L693.351814 15.534631a53.567692 53.567692 0 0 1 75.744717 0.535677 53.567692 53.567692 0 0 1 0 75.744716L367.767382 490.197949a2.517682 2.517682 0 0 0 0 3.428333l402.989747 440.647834a53.567692 53.567692 0 0 1-39.532957 89.725884z'
        fill='#209fa5' // Set your desired fill color
      />
    </Svg>
  );
};

export default BackIcon;
