import React from "react";
import { ButtonStyled, HomeButtonStyled } from "./style";

const CustomButtons = (props) => {
  // 스타일을 조금 변경해야 하는 경우 버튼에 btnName="" 을 주고 case로 분류,
  // styled component 새로 만들어서 적용(ex. HomeButtonStyled)
  switch (props.btnName) {
    case "home": {
      return (
        <HomeButtonStyled onClick={props.onClick}>
          {props.children}
        </HomeButtonStyled>
      );
    }

    default: {
      return (
        <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>
      );
    }
  }
};

export default CustomButtons;
