import React, {useState} from 'react';
import {
  Container,
  ButtonNav,
  Title,
  Logo,
  SubContainer,
  InputOne,
  ImageEmail,
  TextColorWhite,
  InputTextView,
  ViewImage,
  ViewSpace,
  ImageSenha,
  Separator,
  SeparatorItem,
  ErrorMensage,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {api} from '../../api';
import _ from 'loadsh';
import {Alert} from 'react-native';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const navigation = useNavigation();

  const ClickHome = async () => {
    setErrorEmail(!email);
    setErrorPassword(!password);
    if (email && password) {
      api
        .get('user')
        .then(resp => {
          const isValidEmail = _.isEqual(resp.data[0].login, email);
          const isValidPassword = _.isEqual(resp.data[0].password, password);
          if (isValidEmail && isValidPassword) {
            navigation.navigate('Home');
          } else {
            Alert.alert('Email ou senha incorretos');
          }
        })
        .catch(e => console.log(e));
    }
  };

  return (
    <Container>
      <SubContainer>
        <SeparatorItem />
        <Logo source={require('../../assets/images/Logo.png')} />
        <SeparatorItem />
        <TextColorWhite>Acesse sua conta</TextColorWhite>
        <Separator />
        <ViewSpace>
          <InputTextView>
            <ViewImage>
              <ImageEmail source={require('../../assets/images/Msg.png')} />
            </ViewImage>
            <InputOne
              placeholder="E-mail"
              placeholderTextColor="#7c7c8a"
              keyboardType="email-address"
              value={email}
              onChangeText={text => {
                setErrorEmail(!text);
                setEmail(text);
              }}
            />
          </InputTextView>
          {errorEmail && <ErrorMensage>Campo email obrigatório</ErrorMensage>}
          <Separator />
          <InputTextView>
            <ViewImage>
              <ImageSenha source={require('../../assets/images/Senha.png')} />
            </ViewImage>
            <InputOne
              placeholder="Senha"
              placeholderTextColor="#7c7c8a"
              secureTextEntry={true}
              value={password}
              onChangeText={text => {
                setErrorPassword(!text);
                setPassword(text);
              }}
            />
          </InputTextView>
          {errorPassword && (
            <ErrorMensage>Campo senha obrigatório</ErrorMensage>
          )}
        </ViewSpace>
        <ButtonNav onPress={() => ClickHome()}>
          <Title>Entrar</Title>
        </ButtonNav>
      </SubContainer>
    </Container>
  );
}
