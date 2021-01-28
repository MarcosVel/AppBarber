import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83D6E3;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 15px;
  padding-left: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #217685;
  margin-left: 10px;
`;

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <IconSvg width='24' height='24' fill='#0e778a' />
      <Input
        placeholder={ placeholder }
        placeholderTextColor="#217685"
        value={ value }
        onChangeText={ onChangeText }
        secureTextEntry={ password }
      />
    </InputArea>
  );
}