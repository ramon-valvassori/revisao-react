import styled from "styled-components";
import { theme } from "../../styles";

export const FeedContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
  justify-items: center;
  grid-gap: 10px 0;
  padding-top: 20px;
  margin: 0 auto;
`;

export const RecipeCardStyled = styled.div`
  width: 20vw;
  border: 1px solid black;
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  img {
    padding: 10px;
  }
`;
export const AddRecipeButton = styled.div`
  border-radius: 50%;
  font-size: 5px;
  width: 30px;
  padding: 5px;
  height: 2rem;
  background-color: ${theme.colors.laranja["500"]};
  position: fixed;
  bottom: 15px;
  right: 15px;
  transition: 0.5s;
  
  &:hover {
    transform: scale(1.05);
  }
`;
