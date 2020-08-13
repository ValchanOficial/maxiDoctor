import React, { useEffect, useState } from 'react';

import Api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from '../../components/Form';
// import Message from '../../components/Message';

import { Container } from './styles';

const MaxDoctor = () => {
    const [list, setList] = useState([]);
    // const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        Api.getStateList()
            .then(data => setList(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Header />
            <Form list={list}/>
            {/* <Message isVisible={isVisible} /> */}
            <Footer />
        </Container>
    );
};

export default MaxDoctor;
