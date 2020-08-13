import React from 'react';

import { ReactComponent as Logo } from '../../assets/LOGO.svg';

import Title from '../Title';

import { Container } from "./styles";

const Header = () => (
    <Container>
        <Logo title="MaxiDoctor"/>
        <Title text="A plataforma de compra direta do seu anestésico tópico"/>
    </Container>
);

export default Header;