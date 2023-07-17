import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        age: "",
        city: "",
        is_married: false
    })

    const handleChange = (e) => {
        let { name, value, type, checked } = e.target;
        const inputVal = type === 'checkbox' ? checked : value;
        setFormdata({ ...formdata, [name]: inputVal });
    }

    const postData = (data) => {
        axios.post('https://backendtesting-74jt.onrender.com/users/register', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isMarried = Boolean(formdata.is_married);

        const data = {
            ...formdata,
            is_married: isMarried,
        };

        postData(data);
        setFormdata({
            name: "",
            email: "",
            gender: "",
            password: "",
            age: "",
            city: "",
            is_married: false
        });
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }} >
            <form id="form" onSubmit={handleSubmit} >
                <h1>SignUp</h1>
                <div>
                    <input name="name" onChange={(e) => handleChange(e)} type="text" placeholder='Enter name' value={formdata.name} />
                </div>
                <div>
                    <input name="email" onChange={(e) => handleChange(e)} type="email" placeholder='Enter email' value={formdata.email} />
                </div>

                <div>
                    <select name="gender" onChange={(e) => handleChange(e)} value={formdata.gender}>
                        <option value={""} >Select Gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"other"}>Others</option>
                    </select>
                </div>
                <div>
                    <input name="password" onChange={(e) => handleChange(e)} type='password' placeholder='Enter Password' value={formdata.password} />
                </div>
                <div>
                    <input name='age' onChange={(e) => handleChange(e)} type='text' placeholder='Enter Age' value={formdata.age} />
                </div>
                <div>
                    <input name='city' onChange={(e) => handleChange(e)} type='text' placeholder='Enter City' value={formdata.city} />
                </div>
                <div>
                    <input name="is_married" onChange={(e) => handleChange(e)} type="checkbox" checked={formdata.is_married} />
                    <label>Married</label>
                </div>

                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
}


export default Signup;