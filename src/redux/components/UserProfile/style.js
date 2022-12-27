import styled from "styled-components";

const ProfileText = styled.h2`
  margin: 5px 15px;

  span {
    color: #3e6d9c;
  }
`;

const Section = styled.section``;

const P = styled.p`
  font-size: 20px;
`;

const Article = styled.article`
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px 30px;
  margin: 10px 10px 50px 10px;
  font-size: 25px;

  input {
    margin: 4px 10px 0 10px;
    height: 17px;
    padding: 7px;
  }
`;

const Logout = styled.span`
  margin: 2px 25px 0 0;
  font-size: 17px;
  float: right;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
  :hover {
    color: #3e6d9c;
  }
`;
const ShBtn = styled.button`
  display: ${(props) => props.dp};
`;

export { Section, ProfileText, Article, P, Logout, ShBtn };
