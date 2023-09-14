import React, { useState } from 'react'

function Service() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    function submitData(e) {
        e.preventDefault()
        const data = {
            name: name,
            password: password
        }

        console.log(data);
        localStorage.setItem("user", JSON.stringify(data))
    }

    return (

        <>
            <div class="container mt-3">
                <h1 className='text-center'>CONTACT</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-5  pt-3" style={{ backgroundColor: '#090C2D' }}>
                        <div className='text-center'>
                            <h3 style={{ color: "white" }}>Form Validation</h3>
                            <p style={{ color: "white" }}>Try to submit the form.</p>
                        </div>
                        <form class="was-validated">
                            <div class="mb-3 mt-3">
                                <label for="uname" class="form-label " style={{ color: "white" }}>Username:</label>
                                <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" value={name} onChange={(e) => setName(e.target.value)} required />
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div class="mb-3">
                                <label for="pwd" class="form-label" style={{ color: "white" }}>Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                                <label class="form-check-label" for="myCheck">I agree on blabla.</label>
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Check this checkbox to continue.</div>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={submitData}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service;