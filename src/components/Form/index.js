import React, { useState, useCallback } from 'react';

import { Container, Group, LabelGroup, Input, Text } from './styles';

import Button from '../Button';
import Dialog from '../Dialog';
import Select from '../Select';
import Message from '../Message';

import { checkMinLength, checkIsEmptyOrIsSelect } from '../../utils/util';

const Form = ({ list }) => {
    const [CRM, setCRM] = useState('');
    const [state, setState] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const [error, setError] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if(!checkMinLength(CRM).error && !checkIsEmptyOrIsSelect(state).error) {
            setError(false);
            setIsOpen(true);
        }
        setError(true);
    }, [CRM, state]);

    const handleUpdateValue = useCallback((e, func) => {
        const { target : { value } } = e;
        func(value);
    }, []);

    return(
        <Container onSubmit={e => handleSubmit(e)}>
            <Group>
                <LabelGroup>
                    <label htmlFor="crm">CRM</label>
                    <Input id="crm" value={CRM} onChange={e => handleUpdateValue(e, setCRM)} placeholder="0000000"/>
                </LabelGroup>
                <Message status={error && checkMinLength(CRM)} />
            </Group>

            <Group>
                <LabelGroup>
                    <label htmlFor="uf">UF</label>
                    <Select list={list} onChange={e => handleUpdateValue(e, setState)}/>
                </LabelGroup>
                <Message status={error && checkIsEmptyOrIsSelect(state)} />
            </Group>

            <Input type="submit" value="CONTINUE"/>

            <Dialog isOpen={isOpen}>
                <p>Sucesso </p>
                <div>
                    <Button to="#" text="OK" onClick={() => setIsOpen(false)}/>
                </div>
            </Dialog>

            <Text>Canal de compra exclusivo para classe médica</Text>
        </Container>
    );
};

export default Form;
