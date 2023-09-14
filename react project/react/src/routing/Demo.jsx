import React, { useContext } from 'react'
import listContext from '../Component/ContextTut/listContext'
import AxiosTutorial from '../MemoProps/AxiosTutorial';


export const Demo = () => {

    const { list1, setList1 } = useContext(listContext);


    function removeAllList() {
        setList1([])
    }


    return (

        <>

            {/* <div>
                <button onClick={removeAllList}>remove all</button>
            </div>
            {

                list1 && list1.map(((val) => {
                    return (
                        <div>

                            <h3>{val.name}</h3>
                        </div>
                    )
                }))
            } */}

            <AxiosTutorial />

        </>

    )
}
