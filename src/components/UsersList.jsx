

import React from 'react';

const UsersList = ({ users, userSelected, deleteUser }) => {





    return (

        <>
            <div className='userListContainer'>



                <ul className='ulStyle'>
                    {
                        users.map(user => (
                            <li key={user.id}>
                                <div className='cardStyle'>

                                    <h3>{user.first_name} {user.last_name}</h3>
                                    <p>{user.email}</p>
                                    <p>{user.birthday}</p>

                                    <div className='divButtom'>

                                        <button onClick={() => userSelected(user)}><i className="fa-solid fa-pencil" style={{ fontSize: '2rem' }}></i></button>
                                        <button onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-arrow-up" style={{ fontSize: '2rem' }}></i></button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>
    );
};

export default UsersList;