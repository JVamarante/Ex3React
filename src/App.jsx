import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  const alunos = [
    { nome: "João", email: "joao@gmail.com", curso: "Sistemas de Internet", media: 8.5 },
    { nome: "Maria", email: "maria@gmail.com", curso: "Sistemas de Internet", media: 6.8 },
    { nome: "Kellyanne", email: "kellyanne@gmail.com", curso: "Sistemas de Informação", media: 7.0 },
  ]

  return (
    <div>
      {alunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}
    </div>
  )
}

export default App
