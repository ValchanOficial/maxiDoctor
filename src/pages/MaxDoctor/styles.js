import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;

    height: 100%;
    width: 100%;

    @media (max-width: 800px) {
        font-size: 12px;
        margin: 20px 0;
    }
`;
