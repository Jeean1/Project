

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ({ getUsers, userSelect, deselectUser }) => {




    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")




    useEffect(() => {

        if (userSelect !== null) {

            setEmail(userSelect.email)
            setPassword(userSelect.password)
            setFirstName(userSelect.first_name)
            setLastName(userSelect.last_name)
            setBirthday(userSelect.birthday)


        }


    }, [userSelect])



    const submit = (e) => {

        e.preventDefault()

        const newUserForm = {

            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday


        }

        if (userSelect !== null) {

            axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, newUserForm)
                .then(() => getUsers(), resetForms(), deselectUser())
                .catch(error => console.log(error.response))


        } else {

            axios.post(`https://users-crud1.herokuapp.com/users/`, newUserForm)
                .then(() => getUsers(), resetForms())
                .catch(error => console.log(error.response))

                alert("Creating")

        }



    }


    const resetForms = () => {
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setBirthday("")
    }

    const buttonCancel = (userSelect) => {

        if (userSelect !== null) {
            return (
                <>
                    <button type='button' onClick={() => { resetForms(), deselectUser() }}>Cancel</button>
                </>
            )
        }

    }


    return (
        <div className='formContainer'>


            <form className='form' onSubmit={submit}>

                <h1>New User</h1>


                <div className='divInput'>

                    <label htmlFor="firtsName" ><i className="fa-solid fa-user" style={{ fontSize: "2rem" }}></i></label>
                    <input
                        type="text"
                        id="firtsName"
                        placeholder='firts Name'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />

                    <input type="text"
                        placeholder='last name'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />

                </div>

                <div className='divInput'>

                    <label htmlFor="email"><i className="fa-solid fa-envelope" style={{ fontSize: "1.7rem" }}></i></label>
                    <input
                        type="email"
                        id="email"
                        placeholder='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                </div>

                <div className='divInput'>

                    <label htmlFor="password"><i className="fa-solid fa-lock" style={{ fontSize: "2rem" }}></i></label>
                    <input
                        type="password"
                        id="password"
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                </div>

                <div className='divInput'>

                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles" style={{ fontSize: "2rem" }}></i></label>
                    <input
                        type="date"
                        id="birthday"
                        placeholder='birthday'
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />

                </div>


                <button>Upload</button>

                {buttonCancel(userSelect)}


            </form>



        </div>
    );
};

export default UsersForm;