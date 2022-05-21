import styled from 'styled-components';
import axios from 'axios';
import dotenv from 'dotenv';
import { useContext, useState, useEffect } from 'react';

import logout from '../assets/log-out-outline.svg';
import micoff from '../assets/mic-off-outline.svg';
import video from '../assets/videocam-off-outline.svg';

export default function Chat() {
    dotenv.config();
    const [messages, setMessages] = useState([]);

    useEffect(()=> {
        const config = {
            headers : {
                chat_id : "62883ca56b13c3dcc6ee19c7"
            }           
        }
        const promise = axios.get('https://hackathon-2-back.herokuapp.com/messages', config);
        promise.then(response => {
            console.log(response.data);
            setMessages(response.data);
        });
        promise.catch(error => {
            console.log(error);
        });
    },[]);

    return(
        <Div>
            <Header>
                <h1>Nome do professor</h1>
                <img src={logout} alt="logout" />
            </Header>
            <ChatBox>
                <div className="chat-body">
                {messages.map(({text}) => {
                    console.log(text)
                    return (<div className="chat-message-left">{text}</div>)
                })}
                </div>
            </ChatBox>
            <Footer>
                <input type='text' placeholder="Digite sua mensagem aqui..."/>
                <img src={micoff} alt="microfone off"/>
                <img src={video} alt="video off"/>
            </Footer>
        </Div>
    )
}

// styled components
const Div = styled.div`
    background-color: #37cfc8;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`;
const Header = styled.div`
    width: 100%;
    height: 50px;
    background-color : #008580;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 20px;
        color: #FFFFFF;
    }

    img {
        width: 30px;
    }
`;
const ChatBox = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 80px;
    box-sizing: border-box;

    .chat-header {
        width: 95%;
        height: 50px;
        background-color: #1caaa4;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-family: Raleway;
        font-size: 20px;
    }

    .chat-body {
        width: 95%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        padding: 10px;
    }

    .chat-message-right, .chat-message-left {
        min-width: 150px;
        min-height: 30px;
        background: #FFFFFF;
        padding: 10px;
        text-align: center;
        font-family: Raleway;
        font-size: 20px;
        border-radius: 35px;
        position: relative;
        margin-top: 10px;
    }
    .chat-message-right:before {
        content: "";
        position: absolute;
        border-left: 20px solid #FFFFFF;
        border-right: 20px solid transparent;
        border-top: 20px solid #FFFFFF;
        border-bottom: 20px solid transparent;
        right: -20px;
        top: 10px;
    }
    .chat-message-left:before {
        content: "";
        position: absolute;
        border-right: 20px solid #FFFFFF;
        border-left: 20px solid transparent;
        border-top: 20px solid #FFFFFF;
        border-bottom: 20px solid transparent;
        left: -20px;
        top: 10px;
    }
    .chat-message-right {
        margin-left: auto;
    }
`;
const Footer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: #008580;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    padding: 5px;

    input {
        width: 80%;
        height: 100%;
        border: none;
        border-radius: 5px;
    }
    img {
        width: 30px;
    }
`;
