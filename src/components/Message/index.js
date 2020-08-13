import React from 'react';

import { Container } from './styles';

const Message = ({ status: { error, message } }) => (
    <>{error && <Container>{message}</Container>}</>
);

export default Message;
