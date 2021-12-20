import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../configs/constants";

export const CardsWrapper = styled("div")`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: .2rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

export const Card = styled("div")`
  background-color: gray;
  color: white;
  padding: 1rem;
  height: 1rem;
  border-radius: 10px;
`;

export const CustomLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover {
    color: red;
    background: blue;
    }
`;



export const SectionHeader = styled("div")`
padding: 1rem;
height: 1rem;
border-radius: 1px;
border: 1px solid gray;
margin: 0 auto;
display: flex;
`;



export const RightButton = styled("button") `
align-self: flex-end;
`