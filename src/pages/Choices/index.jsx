import { useState, useEffect } from "react"
import * as S from "./styles"

const initialLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Rust",
]

const initialValues = {
  JavaScript: "nenhum",
  TypeScript: "nenhum",
  Python: "nenhum",
  Java: "nenhum",
  C: "nenhum",
  "C++": "nenhum",
  "C#": "nenhum",
  Rust: "nenhum",
}

export default function Choices(props) {
  const [languages, setLanguages] = useState(initialLanguages)
  const [value, setValue] = useState(initialValues)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    console.log(selected)
  }, [selected])

  const handleClick = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name && value) {
      if (value === "nenhum") {
        const filtered = selected.filter((language) => language.name !== name)
        setSelected(filtered)
        setValue({ ...value, [name]: "nenhum" })
      } else {
        const newLanguage = { name, level: value }
        setSelected([...selected, newLanguage])
        setValue({ ...value, [name]: value })
      }
    }

    return
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Promigle</h1>
      </S.Header>

      <S.Form>
        {languages.map((language, index) => (
          <S.SelectContainer>
            <h2>{language}</h2>
            <select
              key={(index + 1).toString()}
              name={language}
              onChange={handleClick}
              value={value[language]}
            >
              <option value="nenhum" selected>
                Escolha seu nível
              </option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
          </S.SelectContainer>
        ))}
      </S.Form>
    </S.Container>
  )
}
