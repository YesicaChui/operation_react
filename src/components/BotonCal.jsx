import React from 'react'

const BotonCal = ({ botonFuncion, textBoton }) => {
  return (
    <button onClick={botonFuncion} className="rounded-md bg-white w-10 shadow-lg hover:shadow-lg">{textBoton}</button>
  )
}

export default BotonCal