import React, { 
    // useState, 
    useCallback 
} from 'react';
// import Select from 'react-select';

import { 
    Container, 
    Input, 
    Text,
    // CustomStyles 
} from './styles';

const Form = ({ list }) => {
    // const [state, setState] = useState(null);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        alert("hello")
    },[]);

    return(
        <Container onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="crm">CRM</label>
                <Input id="crm" placeholder="0000000"/>
            </div>
            <div>
                <label htmlFor="uf">UF</label>
                <Input id="uf" placeholder="Selecionar"/>
            </div>
            <Input type="submit" value="CONTINUE"/>
            {/* {list && <Select
                noOptionsMessage={() => "Não encontrado"}
                value={state}
                onChange={(e) => setState(e)}
                styles={CustomStyles}
                placeholder="Selecionar"
                options={list}
            />} */}
            <Text>Canal de compra exclusivo para classe médica</Text>
        </Container>
    );
};

export default Form;
