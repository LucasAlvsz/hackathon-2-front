import styled from "styled-components"

export const Container = styled.main`
  --primary-color: #37cfc8;
  --text-color: #fff;

  height: 100vh;
  padding: 20px;
  padding-top: 200px;
  background-color: var(--primary-color);
  color: var(--text-color);

  .disabled {
    display: none;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 10px;
    color: #333;
  }

  .selected {
    background-color: #333;
    color: #fff;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 150px;

  font-family: "Press Start 2P", cursive;
  font-size: 40px;
  color: #008580;
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

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  background-color: #0e9892;
  border-radius: 10px;
  font-family: Raleway;
  font-size: 18px;
  color: #fff;

  position: fixed;
  right: 20px;
  bottom: 20px;
`

export const Professor = styled.div`
  font-size: 16px;
  background-color: #fff;
  opacity: 0.8;
  padding: 20px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
`
export const ProfessorContainer = styled.div`
  width: 450px;
  margin: 0 auto;
`
