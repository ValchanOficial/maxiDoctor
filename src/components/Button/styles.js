import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    background-color: #9b83bd;

    border: 6px solid #9c83be;
    border-radius: 6px;

    height: 40px;
    width: 100%;
    max-width: 442px;

    display: flex;
    justify-content: center;
    align-items: center;    
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #e4deee; 
    font-size: 20px;

    filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.35));
    transition: opacity 0.4s ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    margin-top: 20px;

    @media (max-width: 800px) {
        margin: 0 20px;
        margin-top: 20px;
    }
`;