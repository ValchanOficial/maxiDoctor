import React from "react";

import { Container } from './styles';

const Select = ({ list, onChange }) => {
  return (
    <Container name="uf" id="uf" onChange={onChange}>
        <option>Selecionar</option>
        {list.map(({ value, label }) => (
            <option key={value} value={label}>
            {label}
            </option>
        ))}
    </Container>
  );
};

export default Select;
