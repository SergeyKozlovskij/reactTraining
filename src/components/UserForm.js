import React, {useState} from 'react'

const UserForm = () => {
    const [input, setInput] = useState({name: '', job: ''});
    const [savedUser, setSavedUser] = useState({});
    const sendData = () => {
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => result.json())
            .then(result => {
                setSavedUser(result)
            });
    };
    const handleChange = event => {
        event.persist();
        setInput(inputs => ({...inputs, [event.target.name]: event.target.value}))
    };
    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }
        sendData();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={input.name} onChange={handleChange}/>
                    <label htmlFor="job">Job</label>
                    <input type="text" name="job" value={input.job} onChange={handleChange}/>
                </div>
                <button type="submit" disabled={!input.name || !input.job}>Submit</button>
            </form>
            {savedUser.id ? <p>{savedUser.id} {savedUser.name} {savedUser.job} {savedUser.createdAt}</p> : undefined}
        </div>
    )
};

export default UserForm;