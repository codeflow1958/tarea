import React, { startTransition } from 'react'
import Infotarjeta from './Infotarjeta'
import Lista from './Lista'
Lista

Infotarjeta




export default function InfoPersonal() {
    return (
        <>
            <h3> PERFIL</h3>
            <hr />
            <Infotarjeta tittle=" Correo Electronico" descripcion=" nickylds1958@gmail.com" />
            <Infotarjeta tittle="Fecha de Nacimineto " descripcion="8 de abril de 1993 " />
            <Infotarjeta tittle="licencia de conducir" descripcion=" si" />
            <Lista tittle='Intereces' />
            <Lista tittle=' Habilidades' />






        </>
    )
}




















