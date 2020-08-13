import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;

    height: calc(100vh - 50px);
    width: 100%;

    & svg {
        width: 450px;
        height: auto;
        margin: 12px auto;
    }

    @media (max-width: 800px) {
        font-size: 12px;
        margin: 20px 0;
        
        & svg {
            margin: 20px 0;
            width: 250px;
        }
    }
`;