import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 442px;
    margin-bottom: 36px;
`;

export const Group = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const Icon = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: gray;

        font-size: 18px;
        text-align: center;
        text-transform: uppercase;

        user-select: none;
        width: 125px;
        margin-top: 12px;
    }

    img {
        color: white;
        width: 100%;
        max-width: 80px;
    }   
`;
