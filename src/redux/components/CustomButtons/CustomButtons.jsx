import React from "react";
import {
  ButtonStyled,
  NameDomeStyled,
  HomeButtonStyled,
  NavStyled,
  NameStyled,
} from "./style";

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

    case "name": {
      return (
        <NameStyled
          ref={props.ref}
          type={props.type}
          value={props.value}
          onClick={props.onClick}
        >
          {props.children}
        </NameStyled>
      );
    }

    case "nameDone": {
      return (
        <NameDomeStyled ref={props.ref} dp={props.dp} onClick={props.onClick}>
          {props.children}
        </NameDomeStyled>
      );
    }

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
