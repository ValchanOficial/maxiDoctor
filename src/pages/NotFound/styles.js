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
        transition: opacity 0.2s ease-in-out;

        width: 450px;
        height: auto;
        margin: 12px auto;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (max-width: 800px) {
        font-size: 12px;
        margin: 20px 0;
        
        & svg {
            margin: 20px 0;
            width: 200px;
        }
    }
`;