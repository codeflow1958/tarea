import React from 'react'
import { useState } from 'react'

export default function Lista(props) {

    const [lista, setLista] = useState([])
    const [txtValue, setTxtValue] = useState('')

    function añadir() {
        setLista([...lista, txtValue])


    }

    return (


        <div>
            <div>
                <input type="text" onChange={(e) => { setTxtValue(e.currentTarget.value) }} />

                <button onClick={añadir}>añadir</button>

            </div>



            <div>

                <h2>{props.tittle} </h2>
                <hr />
                <div  >
                    {lista.map((e, key) => {
                        return <li key={key} >{e} </li>
                    })
                    }

                    <ul>

                    </ul>
                </div>

            </div>
        </div >

    )
}
