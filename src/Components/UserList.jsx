import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { themeContext } from './ThemeProvider/Theme';
import { Outlet, Link } from 'react-router-dom'
import "./style.css"

function UserList() {
  const { users } = useContext(themeContext)
  console.log(users)

  return (
    <div>
      <h1 className='use'>USERS</h1>
      <div className='card-sec'>
        {users.map((user) => {
          return (
            <Link className="sec1" to={`/details/${user.id}`}>
              <div key={user.id} className="user-card">
                <img  src={user.avatar} alt="" />
                <h4 >  {user.first_name} {user.last_name}</h4>
              </div>
            </Link>
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default UserList
