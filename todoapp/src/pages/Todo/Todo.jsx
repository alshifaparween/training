import React from 'react'
import './todo.css'
import TodoBox from '../../components/Todo/TodoBox/TodoBox'

function Todo() {
    return (
        <div className='todomain'>
            <div>
                <TodoBox />
            </div>
        </div>
    )
}

export default Todo