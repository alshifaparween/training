

import React, { useContext, useEffect, useState } from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import './about.css'
import listContext from '../Component/ContextTut/listContext';


function About() {
    const [name, setName] = useState("");


    const { list1, setList1 } = useContext(listContext)

    // const [list, setAddlist] = useState([])

    const [activeUpdate, setActiveUpdate] = useState(true)
    const [edited, setEdited] = useState(null)
    function handleClick(e) {
        e.preventDefault()

        if (!name) {
            alert("write something in box")

        }
        else {
            const obj = {
                id: Math.random(),
                name: name
            }

            // localStorage.setItem("listKey", JSON.stringify([...list, obj]))
            setList1([...list1, obj])
            setName("")
        }
    }
    //delete
    function handleDelete(id) {
        const del = list1.filter((elem) => {
            return elem.id != id
        })
        setList1(del)
        localStorage.setItem("listKey", JSON.stringify(del))
    }
    function handleUpdate(id) {
        setActiveUpdate(false)
        let updated = list1.find((item) => {
            return item.id == id
        })

        setName(updated.name)
        setEdited(id)


    }

    function handleUpdatemain() {

        const fullEdits = list1.map((val) => {
            if (val.id == edited) {
                val.name = name

            }
            return val
        })
        setList1(fullEdits)
        setActiveUpdate(true)
        setName("")
    }
    // useEffect(() => {
    //     setAddlist(JSON.parse(localStorage.getItem('listKey')));
    // }, []);
    useEffect(() => {
        console.log("list", list1)
        // console.log(list.map((val, i) => val.name))
    }, [list1])
    return (
        <>


            <div className='container-fluid ' style={{ width: "100vh" }}>

                <div className="row justify-content-center ">


                    <div className="col-6">

                        <div className="first-text"> <h2> Todo List</h2></div>
                        <div className='todoboxmain'>

                            <div className='todobox'>
                                <div className="header-list">
                                    <input type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }} />
                                </div>

                                {
                                    activeUpdate ? <div className='btn2'>
                                        <button onClick={handleClick} >
                                            Add
                                        </button>
                                    </div> : <div className="update-icon">
                                        <CreateIcon onClick={handleUpdatemain} />
                                    </div>
                                }


                            </div>
                            {
                                list1.length > 0 && list1.map((val, i) => (
                                    <div className="list" key={i}>
                                        <div>
                                            <div className="very-big">
                                                <div className="big">
                                                    <div className="create">

                                                        <div className="">
                                                            <h3>{val.name}</h3>
                                                            <span class="tooltiptext">
                                                                <DeleteIcon onClick={() => handleDelete(val.id)} />
                                                                <CreateIcon onClick={() => handleUpdate(val.id)} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }


                            <div className="remove-btn">
                                <button onClick={() => setList1([])}>
                                    Remove All (-)
                                </button>
                            </div>
                        </div>

                    </div>



                </div>





            </div>









        </>
    )
}

export default About