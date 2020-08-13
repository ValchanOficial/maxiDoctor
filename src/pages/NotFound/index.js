import React from 'react';

import { ReactComponent as NotFoundImage } from '../../assets/images/NotFoundImage.svg';

import Title from '../../components/Title';
import Button from '../../components/Button';

import { Container } from './styles';

const NotFound = () => (
    <Container>
        <Title text="Ops... Página não encontrada!"/>
        <NotFoundImage title="404"/>
        <Button to="/" text="Voltar" />
    </Container>
);

export default NotFound;
