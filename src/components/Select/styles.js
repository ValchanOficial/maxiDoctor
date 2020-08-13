import styled from 'styled-components';

import Arrow from '../../assets/images/select-arrow.png';

export const Container = styled.select`    
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;

    width: 100%;
    border: 0;
    font-size: 18px;
    padding: 0;
    margin: 0;

    cursor: pointer;

    background-image: url(${Arrow});
    background-repeat: no-repeat, repeat;
    background-position: right 0.2em top 50%, 0 0;
    background-size: 2em auto, 100%;
    
    color: #7e479b;
`;