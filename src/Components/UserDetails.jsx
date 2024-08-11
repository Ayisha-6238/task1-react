import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import { useContext } from 'react';
import { themeContext } from './ThemeProvider/Theme';


function UserDetails() {
  const { id } = useParams()
  const { users } = useContext(themeContext)
  return (
    <div>
      <div >
        <h1 className='detail' > User Details</h1>
        <div>
          {users.filter((users) => users.id == id).map((users) => {
            console.log(users)
            return (
              <div key={users.id}  className='avatar'>
                <div>
                  <img className='avatar1' src={users.avatar} alt="" />
                </div>
                <div  className='elements'>
                  <h2 >{users.first_name}{users.last_name}</h2>
                  <h4>{users.email}</h4>
                </div>

              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
