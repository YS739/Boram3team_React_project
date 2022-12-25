import React from "react";
import styled from "styled-components";

const Buttons = ({
  className,
  children,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({
    width = "auto",
    height = "auto",
    buttonColor = "white",
    hasBorder = false,
    borderColor = "white",
    borderRadius = "4px",
    fontColor = "black",
    fontSize = "14px",
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${(props) => props.color};
    border: ${hasBorder ? `2px solid ${(props) => props.color}` : "none"};
    border-radius: ${borderRadius};
    color: ${(props) => props.color};
    font-size: ${fontSize};
  `}
`;

export default Buttons;
