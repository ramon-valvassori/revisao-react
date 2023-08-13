import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'

export const PasswordInput = ({ isValid, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(showPassword);
  };

  return (
    <FormControl isInvalid={!isValid}>
      <FormLabel>Senha</FormLabel>
      <InputGroup size="md">
        <Input
          name="password"
          value={value}
          onChange={onChange}
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Senha com no mínimo 6 caracteres"
        />
        <InputRightElement width="4.5rem">
          <IconButton
            icon={showPassword ? <AiFillEyeInvisible /> : 
            <AiFillEye />}
            h="1,75rem"
            size="sm"
            onClick={onClickShowPassword}
          />
        </InputRightElement>
      </InputGroup>
      {isValid ? (
        <FormErrorMessage as="p">
          A senha deve conter ao menos 6 caracteres
        </FormErrorMessage>
      ) : undefined}
    </FormControl>
  );
};
