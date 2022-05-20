import styled from 'styled-components';

export default function StartNow() {
    return (
        <Div>
            <h1>Promigle</h1>
            <p>Aprendendo programação com professores do Brasil todo!</p>
            <p>Comece agora!</p>
            <div className="buttons">
                <button>Quero aprender</button>
                <button>Quero ensinar</button>
            </div>
        </Div>
    )
}

// styled components
const Div = styled.div`
    background-color: #37cfc8;
    width: 100%;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
    padding-top: 150px;
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;

    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 40px;
        color: #008580;
        margin-bottom: 100px;
    }

    p {
        font-family: Raleway;
        font-size: 20px;
        margin-bottom: 80px;
    }

    .buttons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 50px;
    }

    button {
        width: 150px;
        height: 50px;
        border: none;
        background-color: #0e9892;
        border-radius: 10px;

        font-family: Raleway;
        font-size: 18px;
        color: #fff;
    }
`;