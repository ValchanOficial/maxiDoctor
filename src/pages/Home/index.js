import React from 'react';

import { ReactComponent as Medicine } from '../../assets/images/medicine.svg';

import Title from '../../components/Title';
import Button from '../../components/Button';

import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Medicine title="Medicine"/>
            <Title text="Avaliação de"/>
            <Title text="Valéria Padilha de Vargas"/>
            <Button to="/maxdoctor" text="Acessar MaxDoctor"/>
        </Container>
    );
};

export default Home;
