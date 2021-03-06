import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

export default function StartNow() {
	const navigate = useNavigate()
	const [name, setName] = useState("")
	return (
		<Div>
			<h1>Promigle</h1>
			<p>Aprendendo programação com professores do Brasil todo!</p>
			<p>Comece agora!</p>
			<form
				onSubmit={e => {
					e.preventDefault()
					axios
						.post(`${process.env.REACT_APP_URI}/students`, { name })
						.then(({ data }) => {
							console.log(data)
							localStorage.setItem(
								"studentId",
								JSON.stringify(data)
							)
							localStorage.setItem(
								"studentName",
								JSON.stringify(name)
							)
							navigate("/choices")
						})
						.catch(err => console.log(err))
				}}>
				<input
					type="text"
					required
					placeholder="Digite seu nome aqui..."
					onChange={e => setName(e.target.value)}
				/>
				<div className="buttons">
					<button type="submit">Quero aprender</button>
					<button disabled>Quero ensinar</button>
				</div>
			</form>
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
		font-family: "Press Start 2P", cursive;
		font-size: 40px;
		color: #008580;
		margin-bottom: 100px;
	}

	p {
		font-family: Raleway;
		font-size: 20px;
		margin-bottom: 50px;
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

	input {
		width: 200px;
		height: 50px;
		border: none;
		border-radius: 5px;
	}
`
