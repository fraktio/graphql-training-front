import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";
import { ReactElement, useEffect, useState } from "react";

type WonkyProp = {
  fonts: Set<string>;
  children: string;
  isCap?: boolean;
};

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const randomOrientation = () => `${Math.floor(Math.random() * 90) - 45}`;

const getRandomFont = (set: Set<string>): string => {
  const items = Array.from(set);

  return items[Math.floor(Math.random() * items.length)];
};

function useForceUpdate() {
  const [_, setValue] = useState(0); // integer state

  return () => setValue((value) => value + 1);
}

const glow = (color: string) => {
  const lighten = LightenDarkenColor(color, 10);

  return keyframes`
  from {
    text-shadow: 0 0 10px #eeeeee, 0 0 20px #${color};
  }
  to {
    text-shadow: 0 0 20px #eeeeee, 0 0 30px #${lighten};
`;
};

function LightenDarkenColor(col, amt) {
  col = parseInt(col, 16);

  return (
    ((col & 0x0000ff) + amt) |
    ((((col >> 8) & 0x00ff) + amt) << 8) |
    (((col >> 16) + amt) << 16)
  ).toString(16);
}

const flip = (flip: number) =>
  flip
    ? `
        -moz-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        transform: scaleX(-1);
        -ms-filter: fliph; 
        filter: fliph;`
    : "";

export const Letter = ({
  children,
  fonts,
  isCap = false,
}: WonkyProp): ReactElement => {
  const handleForceUpdate = useForceUpdate();
  const [intervalRandom, setIntervalRandom] = useState(0);

  useEffect(() => {
    const random = Math.random() * 300;
    const intervalId = setInterval(() => {
      setIntervalRandom(random);
      handleForceUpdate();
    }, 1500 + random - intervalRandom);

    return () => clearTimeout(intervalId);
  });

  const color = randomColor();

  return (
    <span
      onClick={handleForceUpdate}
      className={css`
        font-family: "${getRandomFont(fonts)}";
        color: #${color};
        display: inline-block;
        transform: rotate(${randomOrientation()}deg);
        padding: 0.5rem;
        text-transform: uppercase;
        font-size: ${isCap ? "5rem" : "4rem"};
        cursor: pointer;
        vertical-align: top;
        line-height: 7rem;
        animation: ${glow(color)} 1s ease-in-out infinite alternate;
        ${flip((Math.random() + 0.5) >> 0)}
      `}
    >
      {children}
    </span>
  );
};
