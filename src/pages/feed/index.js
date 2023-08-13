import { AddRecipeButton, FeedContainerStyled, RecipeCardStyled } from "./styled";
import { useEffect, useState } from "react";
import { ListRecipies } from "../../contants";
import { goToRecipeDetailPage, goToAddRecipePage, goToLoginPage} from "../../routes";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useProtectPage } from "../../hooks";

export const FeedPage = () => {

    const navigate = useNavigate()
    useProtectPage(navigate)

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    ListRecipies()
      .then((data) => {
       setRecipes(data)
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate, id)
  }

  const onClickAddButton = () => {
    goToAddRecipePage(navigate)
  }

  return (
    <FeedContainerStyled>
      {recipes.slice(0,20).map((recipe, i)=>(
        <RecipeCardStyled key={i} onClick={()=>onClickCard(recipe.recipe_id)}>
            <img src={recipe.imageUrl} alt="receitas"/>
            <h3>{recipe.title}</h3>
        </RecipeCardStyled>
      ))}
      <AddRecipeButton>
      <Button onClick={()=>onClickAddButton()} variant="add-recipe">+</Button>
      </AddRecipeButton>
   </FeedContainerStyled>
  );
};
