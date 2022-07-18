import axios from 'axios'
import { useEffect, useState } from 'react'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {


  const [users, setUsers] = useState([])

  const [userSelect, setUserSelect] = useState(null)



  useEffect(() => {

    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))


  }, [])

  console.log(users)

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }


  const userSelected = (user) => {
    alert("Selected")

    setUserSelect(user)
    console.log(user)

  }


  const deleteUser = (id) =>{

    alert("Eliminated")

    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())

  }

  const deselectUser = () => {

    setUserSelect(null)

  }


  return (



    <div className="App">

      <UsersList
        users={users}
        userSelected={userSelected}
        deleteUser={deleteUser}
        
      />
      <UsersForm
        getUsers={getUsers}
        userSelect={userSelect}
        deselectUser={deselectUser}
       />


    </div>
  )
}

export default App
