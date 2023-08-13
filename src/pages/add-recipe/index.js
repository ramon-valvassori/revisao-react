import { useEffect, useState } from "react";
import { useForm, useProtectPage } from "../../hooks";
import {
  CenteredPageContainer as AddRecipeContainer,
  FormContainer,
  ButtonContainer,
  DescriptionTextArea,
  ImageInput,
  TitleInput,
} from "../../components";
import { Button, Textarea } from "@chakra-ui/react";
import {
  validateEmail,
  validatePassword,
  validateName,
  AddRecipies,
} from "../../contants";
import { goToFeedPage } from "../../routes";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export const AddRecipePage = () => {

  const [form, onChange, clearInputs] = useForm({
    description: "",
    title: "",
    image: "",
  });

  useProtectPage(Navigate)

  const [isTitleValid, setTitleValid] = useState(true);
  const [isUrlValid, setIsUrlValid] = useState(true);

  useEffect(() => {
    setTitleValid(validateName(form.title,4));
    setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.image));
  }, [form]);

  const onSubmit = async (e) => {
    e.preventDefault();
    

    try {
      if (isUrlValid && isTitleValid) {
        await AddRecipies({
          title: form.title,
          description: form.description,
          image: form.image,
        });
        alert("Receita cadastrada com sucesso");
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <AddRecipeContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <h1>Adicionar nova Receita</h1>
          <TitleInput
            value={form.title}
            onChange={onChange}
            isValid={isTitleValid}
          />
          <DescriptionTextArea
            value={form.description}
            onChange={onChange}
            isValid={true}
          />
          <ImageInput
            value={form.image}
            onChange={onChange}
            isValid={isUrlValid}
          />
          <ButtonContainer>
            <Button type="submit" variant="formMain">
              Cadastar
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </AddRecipeContainer>
  );
};
