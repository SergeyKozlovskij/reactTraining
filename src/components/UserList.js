import React from 'react'

const UserList = (props) =>
    props
        .users
        .map(user =>
            <div key={user.id}>
                <div className="row">
                    <div className="col-sm-3">{user.email} {user.first_name} {user.last_name}</div>
                    <img className="col-sm-3" src={user.avatar} alt=""/>
                </div>
            </div>);

export default UserList