import React, { useState } from 'react'
import './todobox.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function TodoBox() {
    const [name, setName] = useState("")
    const [list, setAddlist] = useState([])
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


            setAddlist([...list, obj])
            setName("")
        }
    }
    //delete
    function handleDelete(id) {
        const del = list.filter((elem) => {
            return elem.id != id
        })
        setAddlist(del)
    }
    function handleUpdate(id) {
        setActiveUpdate(false)
        let updated = list.find((item) => {
            return item.id == id
        })

        setName(updated.name)
        setEdited(id)


    }

    function handleUpdatemain() {

        const fullEdits = list.map((val) => {
            if (val.id == edited) {
                val.name = name

            }
            return val
        })
        setAddlist(fullEdits)
        setActiveUpdate(true)
        setName("")
    }
    return (
        <>
            <div className='todoboxmain'>
                <h2> Todo List</h2>
                <div className='todobox'>
                    <div className="header-list">
                        <input type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }} />
                    </div>

                    {
                        activeUpdate ? <div className='btn'>
                            <button onClick={handleClick} >
                                Add
                            </button>
                        </div> : <div className="update-icon">
                            <CreateIcon onClick={handleUpdatemain} />
                        </div>
                    }


                </div>
                {
                    list.map((val, i) => {
                        return <div className="list" key={i}>
                            <div>
                                <h3>{val.name}</h3>
                            </div>
                            <div className='list_btn'>
                                <div className="list-icon">
                                    <div className="icon">
                                        <DeleteIcon onClick={() => handleDelete(val.id)} />
                                    </div>
                                    <div className="update-icon">
                                        <CreateIcon onClick={() => handleUpdate(val.id)} />
                                    </div>


                                </div>

                            </div>
                        </div>

                    })
                }

                <div className="remove-btn">
                    <button onClick={() => setAddlist([])}>
                        Remove All (-)
                    </button>
                </div>
            </div>






        </>
    )
}

export default TodoBox                       