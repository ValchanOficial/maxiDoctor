import React from 'react';

import Agilidade from '../../assets/icons/AGILIDADE.png';
import Comodidade from '../../assets/icons/COMODIDADE.png';
import Facilidade from '../../assets/icons/FACILIDADE.png';
import FreteGratis from '../../assets/icons/FRETE_GRATIS.png';
import Quantidade from '../../assets/icons/QUANTIDADE.png';

import { Container, Group, Icon } from "./styles";

const Footer = () => (
    <Container>
        <Group>
            <Icon>
                <img src={Facilidade} alt="Facilidade"/>
                <p>Facilidade<br/> de compra</p>
            </Icon>
            
            <Icon>
                <img src={Quantidade} alt="Quantidade"/>
                <p>Quantidade<br/>não limitada</p>
            </Icon>
        </Group>
        <Group>
            <Icon>
                <img src={FreteGratis} alt="Frete Gratis"/>
                <p>Frete grátis</p>
            </Icon>
            
            <Icon>
                <img src={Agilidade} alt="Agilidade"/>
                <p>Agilidade</p>
            </Icon>
            
            <Icon>
                <img src={Comodidade} alt="Comodidade"/>
                <p>Comodidade</p>
            </Icon>
        </Group>
    </Container>
);

export default Footer;
