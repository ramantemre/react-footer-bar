import React from "react";
import { FooterProps } from "./index.types";
import Styled from "./footer.module.css";

const Footer = (props: FooterProps) => {
  const {
    className,
    style,
    backGroundStyle,
    textArray = ["Please add some text"],
    textStyle,
    enableAnimation = false,
  } = props;

  return (
    <div className={className} style={style}>
      <section
        className={enableAnimation ? Styled["enable-animation"] : ""}
        style={{ marginBlock: "0.25rem" }}
      >
        <div className={Styled.marquee} style={backGroundStyle}>
          <div className={Styled.marquee__content}>
            {textArray.map((text, idx) => (
              <div key={idx} style={textStyle}>
                {text}
              </div>
            ))}
          </div>

          <div aria-hidden="true" className={Styled.marquee__content}>
            {textArray.map((text, idx) => (
              <div key={idx} style={textStyle}>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
