import React from "react";

import { Container, Content } from "./styles";

const Dialog = ({ children, isOpen, ...rest }) => {
  return (
    <Container isOpen={isOpen} {...rest}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Dialog;
