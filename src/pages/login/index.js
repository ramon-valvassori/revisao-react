import { useState } from "react";
import { useForm } from "../../hooks";
import { CenteredPageContainer as LoginPageContainer, 
    FormContainer, 
    ButtonContainer, 
    ButtonContainer2,
    EmailInput, 
    PasswordInput} from "../../components";
import { Button } from "@chakra-ui/react";
import { validateEmail, validatePassword } from "../../contants"
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToSignupPage } from "../../routes";
import logo from '../../assets/logo.png'
import { Login } from "../../contants";

export const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    setIsEmailValid(validateEmail(form.email));
    setIsPasswordValid(validatePassword(form.email))
    try {
        const { token } = isEmailValid && isPasswordValid && await Login({
        email: form.email,
        password: form.password
      })
    localStorage.setItem('cookenu.token', token)  
    console.log(token);
    goToFeedPage(navigate)
    setIsLoggedIn(true)
    } catch(e) {
      console.log(e);
    }
    
  };

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
            <img src={logo} alt='logo do Cookenu'/>
          <EmailInput 
          value={form.email} 
          onChange={onChangeInputs}
          isValid={isEmailValid}
          />
          <PasswordInput
          value={form.password}
          onChange={onChangeInputs}
          isValid={isPasswordValid}
          />
          <ButtonContainer>
            <Button type="submit" variant="formMain">Enviar</Button>
          </ButtonContainer> 
          <ButtonContainer2>
            <Button onClick={()=>goToSignupPage(navigate)}type="button" variant="formSecondary">Não possui conta? Cadastre-se</Button>
            </ButtonContainer2> 
        </form>
      </FormContainer>
    </LoginPageContainer>
  );
};
