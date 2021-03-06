import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #0bb8d4;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #0e778a;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const ViewSignMessageButton = styled.View`
  flex-direction: row;
  margin: 50px 0 20px;
  justify-content: center;
`;

export const SignMessageButton = styled.TouchableOpacity``;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #217685;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #217685;
  font-weight: bold;
  margin-left: 5px;
`;
