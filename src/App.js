import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = {
            name: name,
            age: Number(age),
            mobile: Number(mobile),
            email: email
        }
        try {
            const response = await axios.post('http://localhost:5000/api/register', formdata)
          console.log(response.data)
          setAge('')
          setEmail('')
          setMobile('')
          setName('')
        } catch (e) {
            console.log(e.response.data.errors)
        }
    }

    return (
        <div> 
            <h1>user details form</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter name</label><br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label>enter age</label><br />
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)} /><br />
                <label>Mobile number</label><br />
                <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} /><br />
                <label>Enter email</label><br />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App
