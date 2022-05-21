import styled from "styled-components"

export const Container = styled.main`
  --primary-color: #37cfc8;
  --text-color: #fff;

  height: 100vh;
  padding: 20px;
  padding-top: 200px;
  background-color: var(--primary-color);
  color: var(--text-color);
`

export const Header = styled.header`
  width: 100%;
  height: 150px;

  font-size: 38px;
  font-weight: 700;
  background-color: var(--primary-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
`

export const Form = styled.form`
  color: #333;
  font-weight: 500;
`

export const SelectContainer = styled.div`
  height: max-content;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 10px;
    font-weight: 700;
  }

  select {
    width: 200px;
    height: 55px;
    padding: 20px;
    border-radius: 5px;
    border: none;
  }
`
