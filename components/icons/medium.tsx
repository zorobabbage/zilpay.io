import React from 'react';

import { Colors } from '@/config/colors';

type Prop = {
  width: number | string;
  height: number | string;
  color: Colors;
  hoverColor?: Colors;
};

export const MediumIcon: React.FC<Prop> = ({
  width,
  height,
  color,
  hoverColor = Colors.White
}) => {
  const [hoverd, setHover] = React.useState(false);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 24H5C2.239 24 0 21.761 0 19V5C0 2.239 2.239 0 5 0H19C21.762 0 24 2.239 24 5V19C24 21.761 21.763 23.999 19 24ZM19.97 18.351V18.082L18.723 16.858C18.613 16.774 18.558 16.636 18.581 16.499V7.501C18.558 7.364 18.613 7.226 18.723 7.142L20 5.918V5.649H15.578L12.426 13.512L8.84 5.649H4.202V5.918L5.696 7.717C5.842 7.85 5.917 8.044 5.897 8.24V15.312C5.941 15.567 5.86 15.828 5.681 16.014L4 18.052V18.321H8.766V18.052L7.085 16.014C6.904 15.828 6.819 15.569 6.853 15.312V9.196L11.036 18.321H11.522L15.115 9.196V16.469C15.115 16.663 15.115 16.701 14.988 16.828L13.696 18.082V18.351H19.97V18.351Z"
        fill={hoverd ? hoverColor : color}
      />
    </svg>
  );
};
