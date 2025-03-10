import { useEffect, useState, useRef } from "react";
import './style.css'
import api from '../../services/api'

function Home() {
const [users, setUSers] = useState([])

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()
 
async function getUsers(){
  const usersFromApi = await api.get('/usuarios')

  setUSers(usersFromApi.data)
  
}

async function createUsers(){
  await api.post('/usuarios', {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value
  })

  getUsers()
  
}

async function deleteUsers(id){
  const usersFromApi = await api.delete(`/usuarios/${id}`)
  
  getUsers()
}

useEffect(() => {
  getUsers()
}, [])

  return (

    <div className="container">
      <form>
        <h1>Cadastro De Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' ref={inputName} />
        <input placeholder="Idade" name='idade' type='number' ref={inputAge} />
        <input placeholder="E-mail" name='email' type='email' ref={inputEmail} />
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>Delete</button>
        </div>
      ))}
    </div>

  )
}

export default Home
