import React, { useEffect, useState, } from 'react'
import axios from 'axios'
export default AxiosTutorial





function AxiosTutorial() {
    const data = {
        fname: "",
        password: ''
    };
    // const [userData, setUserData] = useState([])
    const [password, setpassword] = useState(data)

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => {
    //             console.log(response);
    //             // setUserData(response.data)
    //         })
    // }, [])
    const handleData = ((e) => {
        setpassword({ ...password, ...{ [e.target.name]: e.target.value } })
    })

    // onsubmit
    const handleSubmit = ((e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", password)
            .then((response) => {
                console.log(response);
            })

    });
    return (
        <>
            <div>axios</div>
            {/* {
                userData.map((data) => {
                    return <div className='designEmail' style={{ textAlign: 'center' }} >
                        {data.email}
                    </div>

                })
            } */}
            <div className="design" style={{ textAlign: "center", margin: '10px' }}>
                <label>User Name</label>
                <input type="text" name="fname" value={password.fname} onChange={handleData} /> <br /> <br />
                <label>Last Name</label>

                <input type="text" password="password" value={password.password} onChange={handleData} /> <br /> <br />
                <button onclick={handleSubmit}>submit</button>
            </div>

        </>


    );
}

