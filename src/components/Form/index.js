import React, { useState, useCallback } from 'react';

import { Container, Input, Text } from './styles';

import Select from '../Select';

const Form = ({ list }) => {
    const [CRM, setCRM] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        alert("Sucesso");
    }, []);

    const handleUpdateValue = useCallback((e, func ) => {
        const { target : { value } } = e;
        func(value);
    }, []);
    
    return(
        <Container onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="crm">CRM</label>
                <Input id="crm" value={CRM} onChange={e => handleUpdateValue(e, setCRM)} placeholder="0000000" minLength="5"/>
            </div>
            <div>
                <label htmlFor="uf">UF</label>
                <Select list={list} onChange={e => handleUpdateValue(e, setState)}/>
            </div>
            <Input type="submit" value="CONTINUE"/>
            <Text>Canal de compra exclusivo para classe médica</Text>
        </Container>
    );
};

export default Form;
