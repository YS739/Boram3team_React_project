import React from "react";
import { ButtonStyled, HomeButtonStyled, NavStyled } from "./style";

const CustomButtons = (props) => {
  switch (props.btnName) {
    case "home": {
      return (
        <HomeButtonStyled onClick={props.onClick}>
          {props.children}
        </HomeButtonStyled>
      );
    }
    case "navBar": {
      return (
        <NavStyled dp={props.dp} onClick={props.onClick}>
          {props.children}
        </NavStyled>
      );
    }

    // case "name": {
    //   return (
    //     <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
    //   );
    // }

    default: {
      return (
        <ButtonStyled dp={props.dp} onClick={props.onClick}>
          {props.children}
        </ButtonStyled>
      );
    }
  }
};

export default CustomButtons;
