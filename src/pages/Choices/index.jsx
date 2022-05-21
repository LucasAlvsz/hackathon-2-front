import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./styles"

export default function Choices(props) {
	const [languages, setLanguages] = useState([])
	const [selected, setSelected] = useState([])
	const [professors, setProfessors] = useState([])
	const [showProfessors, setShowProfessors] = useState(false)
	const [professorId, setProfessorId] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		;(async function () {
			const result = await axios.get(
				"https://hackathon-2-back.herokuapp.com/languages"
			)
			setLanguages(result.data.map(({ name }) => name))
		})()
	}, [])

	const handleClick = e => {
		const name = e.target.name
		const value = e.target.value

		if (name && value) {
			if (value === "nenhum") {
				const filtered = selected.filter(
					language => Object.keys(language)[0] !== name
				)
				setSelected(filtered)
			} else {
				const filteredSelected = selected.filter(
					select => select !== name
				)
				setSelected([...filteredSelected, { [name]: value }])
			}
		}

		return
	}

	const handleSend = async () => {
		try {
			if (!showProfessors) {
				const allLanguages = selected.map(
					select => Object.keys(select)[0]
				)

				const response = await axios.post(
					"https://hackathon-2-back.herokuapp.com/match",
					{ languages: allLanguages }
				)
				console.log(response.data)
				console.log(allLanguages)
				setProfessors(response.data)
				setShowProfessors(true)
			} else {
				const response = await axios.post(
					"https://hackathon-2-back.herokuapp.com/match/new-chat",
					"",
					{
						headers: {
							student_id: JSON.parse(
								localStorage.getItem("studentId")
							).studentId,
							teacher_id: localStorage.getItem("teacherId"),
						},
					}
				)
				console.log(response.data)
				JSON.stringify(
					localStorage.setItem("chatId", response.data.chatId)
				)
				navigate("/chat")
			}
		} catch (e) {
			console.log(e)
		}
	}

	const handleProfessor = professorId => {
		setProfessorId(professorId)
		localStorage.setItem("teacherId", professorId)
	}

	return (
		<S.Container>
			<S.Header>
				<h1>Promigle</h1>
			</S.Header>
			{!showProfessors && (
				<S.Form>
					{languages.map(language => (
						<S.SelectContainer key={language}>
							<h2>{language}</h2>
							<select name={language} onChange={handleClick}>
								<option value="nenhum" selected>
									Escolha seu nível
								</option>
								<option value="iniciante">Iniciante</option>
								<option value="intermediario">
									Intermediário
								</option>
								<option value="avancado">Avançado</option>
							</select>
						</S.SelectContainer>
					))}
				</S.Form>
			)}

			<S.ProfessorContainer>
				{showProfessors && <h3>Professores</h3>}
				{showProfessors && (
					<div>
						{professors.map(professor => (
							<S.Professor
								className={
									professorId === professor._id
										? "selected"
										: ""
								}
								onClick={() => handleProfessor(professor._id)}>
								<h4>{professor.name}</h4>
							</S.Professor>
						))}
					</div>
				)}
			</S.ProfessorContainer>

			<S.Button
				className={selected.length === 0 ? "disabled" : ""}
				onClick={handleSend}
				disabled={showProfessors && !professorId}>
				Prosseguir
			</S.Button>
		</S.Container>
	)
}
