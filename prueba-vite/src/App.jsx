
import './App.css'
import Caps from './componentes/Caps'
import Info from './componentes/Info'
import InfoPersonal from './componentes/InfoPersonal'
import Usuario from './componentes/Usuario'
import Tarjeta from './componentes/Tarjeta'
import { useState } from 'react'

Tarjeta
Caps
InfoPersonal
Usuario
Info

function App() {
  const [visible, setVisible] = useState(true)
  const [visible2, setVisible2] = useState(true)

  function ocultar() {
    setVisible(!visible)

  }
  function ocultar2() {
    setVisible2(!visible2)

  }




  return (
    <>
      <div id='todo'>


        <div id='contenedor2'  >

          <div className='info'>
            <Usuario />
            <InfoPersonal />
          </div>
          <div className='segundo'>
            <Info tittle='Nicky Stewart Subuyu Lopez' sub=' Programador' des='soy una persona proactiva, autodidacta,
           una persona que cumple con sus metas,  responsable, puntual, puedo trabajar bajo presion, me gusta mucho el deporte  '/>
            <div className='caps'>
              <Caps t=' EXPERIENCIA LABORAL' />

              <button onClick={ocultar} >Ocultar</button>

            </div>
            <hr />
            {visible ? <> <Tarjeta fecha='12/01/2016 ' tittle='Telus international ' description=' Encargado de servicio al cliente y resolucion de problemas.'
            />
              <Tarjeta fecha='07/12/2018 ' tittle='Compartamos' description=' Encargado de evaluar, gestionar y asesorar creditos grupales.' />
              <Tarjeta fecha='31/06/2023 ' tittle='Genesis Empresarial' description='Encargado de evaluar record crediticio para poder brindar creditos grupales
            para brindar creditos y mantener artera de clientes en progreso ' /></> : <> </>

            }




            <div>
              <div className='caps'>
                <Caps t='EDUCACION' />

                <button onClick={ocultar2} >Ocultar</button>

              </div>
              <hr />

              {visible2 ? <> <Tarjeta fecha='31/10/2005 ' tittle='colegio san vicente de paul bethania' description='' />
                <Tarjeta fecha='31/10/2009 ' tittle='colegio ITED' description='' />
                <Tarjeta fecha='12/11/2012 ' tittle='escuela tecnica militar de aviacion' description='' /></> : <></>

              }




            </div>
          </div>
        </div>


      </div >



    </>
  )
}

export default App
