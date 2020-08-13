import React from "react";

import { Container } from "./styles";

const Button = ({ text, to, ...rest }) => {
    return(
        <Container to={to} {...rest}>{text.toUpperCase()}</Container>
    );
};

export default Button;

