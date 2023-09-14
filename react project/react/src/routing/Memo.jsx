import React, { useMemo, useState } from 'react'
const datahai = [
    {
        name: "Alshifa",
        date: 2
    },
    {
        name: "Parween",
        date: 3
    },


]

// function H1({ singleobj, index, count }) {
//     const [value, setValue] = useState(singleobj.date)
//     // function getDate(input) {
//     //     let dat = input.toISOString()
//     //     console.log("count");
//     //     return dat
//     // }
//     function getDate(input) {
//         return input
//     }


//     const finalDate = useMemo(() => {
//         return getDate(value);
//     }, [value])

//     return
//     <>
//         <h1 key={"datahai" + index}>Name:{singleobj.name} date:{finalDate} </h1>
//     </>
// }
// function Memo() {
//     const [count, setCount] = useState(0)
//     const [data, setDate] = useState(0)
//     console.log("count");
//     return (
//         <div>
//             <h1>INC {count}</h1>
//             <button onClick={() => setCount(count + 1)}>increment </button>
//             {
//                 datahai.map((singleobj, index) => {
//                     return <H1 count={count} singleobj={singleobj} index={index} />


//                 })
//             }
//             <button onClick={() => setDate(data - 1)}>Dec</button>
//         </div>
//     )
// }


function Memo() {
    const [count, setCount] = useState(0);
    const [evenNum, setEvenNum] = useState(2)

    // const memoHook = useMemo(function evenNumDouble() {
    //     console.log("double");
    //     return evenNum * 2;
    // }, [evenNum])

    // function memoHook() {
    //     console.log("EvenNum");
    //     return evenNum * 2
    // }

    const memoHook = useMemo(() => {
        console.log("even");
        return evenNum * 3
    }, [evenNum])

    return (
        <div>
            <h2>Counter: {count}</h2>
            <h2>Even Numbers: {evenNum}</h2>
            <h2>even Number Double Value: {memoHook}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
        </div>
    )
}



export default Memo
