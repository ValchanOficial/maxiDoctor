import styled from "styled-components";

export const Container = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px 0;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 442px;
`;

export const LabelGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 442px;
  border-bottom: 1px solid #7e479b;
  margin: 16px 0;
  padding-bottom: 6px;

  label {
    color: gray;
    width: 50px;
    text-align: start;
    margin-right: 16px;
    font-weight: 500;
  }
`;

export const Text = styled.p`
  color: #7e479b;

  font-size: 18px;
  text-align: center;
  text-transform: uppercase;

  user-select: none;

  width: 300px;

  margin-top: 20px;

  @media (max-width: 800px) {
    margin: 20px;
  }
`;

export const Input = styled.input`
    background: transparent;
    border: 0;
    width: 100%;
    max-width: 442px;
    color: #7e479b;
    padding-left: 4px;

    &[type=submit] {
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
            margin-top: 20px;
        }
    }
`;

export const CustomStyles = {
    menu: (provided, state) => ({
      ...provided,
      background: "#F9F9F9",
      marginTop: "5px",
      padding: "2px 4px"
    }),
  
    input: (provided, state) => ({
      ...provided,
      height: "100%",
      padding: "0",
      margin: "auto"
    }),
  
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none"
    }),
  
    indicatorsContainer: (provided, state) => ({
      ...provided,
      color: "#131313"
    }),
  
    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? "#d3c5e8" : "#F9F9F9",
      color: state.isFocused ? "#7e479b" : "#131313",
      cursor: "pointer"
    }),
  
    control: (provided, state) => ({
      ...provided,
      background: "transparent",
      border: "0",
      borderRadius: "0",
      borderBottom: "1px solid #7e479b !important",
      boxShadow: "none",
      cursor: "pointer",
      padding: "0",
      margin: "0",
      height: "40px"
    }),

    container: (provided, state) => ({
        ...provided,
        background: "transparent",
        width: "100%",
        maxWidth: "442px"
    }),

    valueContainer: (provided, state) => ({
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      alignContent: "center",
      height: "40px",
      padding: "0",
      margin: "0",
    })
};
