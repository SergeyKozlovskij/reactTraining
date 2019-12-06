import React, {useState, useEffect} from 'react'
import UserList from './UserList'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            fetch('https://reqres.in/api/users')
                .then(result => result.json())
                .then(result => {
                    setUsers(result.data)
                });
        };
        fetchData();
    }, []);
    return <UserList users={users}></UserList>
};

export default Users