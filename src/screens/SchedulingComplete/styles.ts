import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.header};

    padding-top: 96px;
`;

export const Content = styled.View`
    width: 100%;
    position: absolute;
    top: 45%;

    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const WrapperLogo = styled.View`
  position: absolute;
  top: 5%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_600};

    margin-top: 30px;
`;

export const Message = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    line-height: ${RFValue(25)}px;
    text-align: center;

    margin-top: 15px;
`;


export const Footer = styled.View`
    bottom: 5%;
    position: absolute;

    width: 100%;
    align-items: center;
    
    margin: 80px 0;
`;