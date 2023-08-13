import { useState } from "react";
import { useForm } from "../../hooks";
import {
  CenteredPageContainer as SignupPageContainer,
  FormContainer,
  ButtonContainer,
  NameInput,
  EmailInput,
  PasswordInput,
} from "../../components";
import { Button } from "@chakra-ui/react";
import {
  validateEmail,
  validatePassword,
  validateName,
  Signup,
} from "../../contants";
import { goToFeedPage } from "../../routes";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export const SignupPage = () => {
  const navigate = useNavigate();

  const [form, onChange, clearInputs] = useForm({
    email: "",
    password: "",
    name: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsNameValid(validateName(form.name));
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.email));
    try {
      const token  =
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        (await Signup({
          email: form.email,
          password: form.password,
          name: form.name,
        }));
      console.log(token.token);
      localStorage.setItem("cookenu.token", token.token);
      

      goToFeedPage(navigate);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <SignupPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt="logo do Cookenu" />
          <NameInput
            value={form.name}
            onChange={onChange}
            isValid={isNameValid}
          />
          <EmailInput
            value={form.email}
            onChange={onChange}
            isValid={isEmailValid}
          />
          <PasswordInput
            value={form.password}
            onChange={onChange}
            isValid={isPasswordValid}
          />
          <ButtonContainer>
            <Button type="submit" variant="formMain">
              Cadastar
            </Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </SignupPageContainer>
  );
};
