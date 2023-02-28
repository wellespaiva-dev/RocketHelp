import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const SubContainer = styled.View`
  background: #202024;
  width: 400px;
  height: 136px;
`;

export const BackgroundFirst = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 60px;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 154px;
  height: 26px;
`;

export const Symbol = styled.Image`
  width: 40.74px;
  height: 40px;
`;

export const BackgroundSymbol = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonBack = styled.TouchableOpacity`
  height: 26px;
  width: 26px;
  background: #202024;
`;

export const ImageSign = styled.Image`
  width: 26px;
  height: 26px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-top: 15px;
`;

export const ViewSearch = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 8px;
`;

export const ButtonProgress = styled.TouchableOpacity`
  width: 184px;
  height: 35px;
  border-radius: 4px;
  background-color: #202024;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.isProgress ? '#fba94c' : '#202024')};
  border-width: 1px;
`;

export const ButtonDone = styled.TouchableOpacity`
  width: 184px;
  height: 35px;
  border-radius: 4px;
  background-color: #202024;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.done ? '#04d361' : '#202024')};
  border-width: 1px;
`;

export const ButtonFinishedGray = styled.View`
  width: 184px;
  height: 35px;
  border-radius: 4px;
  background-color: #202024;
  justify-content: center;
  align-items: center;
`;

export const TextOrange = styled.Text`
  color: ${props => (props.isProgress ? '#fba94c' : '#7C7C8A')};
  font-size: 12px;
`;

export const TextGreen = styled.Text`
  color: ${props => (props.done ? '#04D361' : '#7c7c8a')};
  font-size: 12px;
`;

export const TitleSolicite = styled.Text`
  color: #e1e1e8;
  font-size: 20px;
`;

export const TitleNumber = styled.Text`
  color: #c4c4cc;
  font-size: 16px;
`;

export const TextAlert = styled.Text`
  color: #7c7c8a;
  font-size: 20px;
  line-height: 32px;
  top: 15px;
`;
