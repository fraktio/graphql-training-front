import styled from "@emotion/styled";
import { useState, useEffect, ReactElement } from "react";

import { Letter } from "~/atoms/HeaderLetter";
import { Row } from "~/atoms/Row";
import { scale } from "~/design";

const Centered = styled(Row)({
  width: "100%",
  paddingTop: scale(2),
  paddingBottom: scale(2),
});

type Props = {
  className?: string;
};

export const TrainingHeader = (props: Props): ReactElement | null => {
  const [fonts, setFonts] = useState(new Set<string>());

  useEffect(() => {
    (async () => {
      await document.fonts.ready;

      const fontAvailable = new Set<string>();

      for (const font of fontCheck.values()) {
        if (document.fonts.check(`12px "${font}"`)) {
          fontAvailable.add(font);
        }
      }
      setFonts(fontAvailable);
    })();
  }, [setFonts]);

  if (fonts.size === 0) {
    return null;
  }

  return (
    <Centered className={props.className} center>
      <Header>
        <Letter fonts={fonts} isCap={true}>
          A
        </Letter>
        <Letter fonts={fonts}>p</Letter>
        <Letter fonts={fonts}>o</Letter>
        <Letter fonts={fonts}>l</Letter>
        <Letter fonts={fonts}>l</Letter>
        <Letter fonts={fonts}>o</Letter>
        <br />
        <Letter fonts={fonts} isCap={true}>
          G
        </Letter>
        <Letter fonts={fonts}>r</Letter>
        <Letter fonts={fonts}>a</Letter>
        <Letter fonts={fonts}>p</Letter>
        <Letter fonts={fonts}>h</Letter>
        <Letter fonts={fonts} isCap={true}>
          Q
        </Letter>
        <Letter fonts={fonts} isCap={true}>
          L
        </Letter>
        <br />
        <Letter fonts={fonts} isCap={true}>
          T
        </Letter>
        <Letter fonts={fonts}>r</Letter>
        <Letter fonts={fonts}>a</Letter>
        <Letter fonts={fonts}>i</Letter>
        <Letter fonts={fonts}>n</Letter>
        <Letter fonts={fonts}>i</Letter>
        <Letter fonts={fonts}>n</Letter>
        <Letter fonts={fonts}>g</Letter>
      </Header>
    </Centered>
  );
};

const Header = styled("h1")`
  text-align: center;
  padding: 0;
  margin: 20px;
  display: block;
`;

const fontCheck = new Set(
  [
    // Windows 10
    "Arial",
    "Arial Black",
    "Bahnschrift",
    "Calibri",
    "Cambria",
    "Cambria Math",
    "Candara",
    "Comic Sans MS",
    "Consolas",
    "Constantia",
    "Corbel",
    "Courier New",
    "Ebrima",
    "Franklin Gothic Medium",
    "Gabriola",
    "Gadugi",
    "Georgia",
    "HoloLens MDL2 Assets",
    "Impact",
    "Ink Free",
    "Javanese Text",
    "Leelawadee UI",
    "Lucida Console",
    "Lucida Sans Unicode",
    "Malgun Gothic",
    "Marlett",
    "Microsoft Himalaya",
    "Microsoft JhengHei",
    "Microsoft New Tai Lue",
    "Microsoft PhagsPa",
    "Microsoft Sans Serif",
    "Microsoft Tai Le",
    "Microsoft YaHei",
    "Microsoft Yi Baiti",
    "MingLiU-ExtB",
    "Mongolian Baiti",
    "MS Gothic",
    "MV Boli",
    "Myanmar Text",
    "Nirmala UI",
    "Palatino Linotype",
    "Segoe MDL2 Assets",
    "Segoe Print",
    "Segoe Script",
    "Segoe UI",
    "Segoe UI Historic",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "SimSun",
    "Sitka",
    "Sylfaen",
    "Symbol",
    "Tahoma",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
    "Webdings",
    "Wingdings",
    "Yu Gothic",
    // macOS
    "American Typewriter",
    "Andale Mono",
    "Arial",
    "Arial Black",
    "Arial Narrow",
    "Arial Rounded MT Bold",
    "Arial Unicode MS",
    "Avenir",
    "Avenir Next",
    "Avenir Next Condensed",
    "Baskerville",
    "Big Caslon",
    "Bodoni 72",
    "Bodoni 72 Oldstyle",
    "Bodoni 72 Smallcaps",
    "Bradley Hand",
    "Brush Script MT",
    "Chalkboard",
    "Chalkboard SE",
    "Chalkduster",
    "Charter",
    "Cochin",
    "Comic Sans MS",
    "Copperplate",
    "Courier",
    "Courier New",
    "Didot",
    "DIN Alternate",
    "DIN Condensed",
    "Futura",
    "Geneva",
    "Georgia",
    "Gill Sans",
    "Helvetica",
    "Helvetica Neue",
    "Herculanum",
    "Hoefler Text",
    "Impact",
    "Lucida Grande",
    "Luminari",
    "Marker Felt",
    "Menlo",
    "Microsoft Sans Serif",
    "Monaco",
    "Noteworthy",
    "Optima",
    "Palatino",
    "Papyrus",
    "Phosphate",
    "Rockwell",
    "Savoye LET",
    "SignPainter",
    "Skia",
    "Snell Roundhand",
    "Tahoma",
    "Times",
    "Times New Roman",
    "Trattatello",
    "Trebuchet MS",
    "Verdana",
    "Zapfino",
  ].sort(),
);
