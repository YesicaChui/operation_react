import { useState } from "react"

function App() {
  const [respuesta, setRespuesta] = useState("0")
  const actualizarNumero = (valor) => {
    setRespuesta(valor)
  }


  return (
    <>
      <div className="flex justify-center m-auto mt-5 w-[300px] h-[300px] bg-white flex-col" >
        <p className=" font-bold text-center text-[#25694e] text-[20px]">Calculador</p>
        <div className="w-[280px] bg-[#459b78] h-[250px]  m-auto">
          <div className=" w-[210px] bg-[#456156] h-[40px]  m-auto mt-5 mb-5 text-[24px] font-semibold">{respuesta}
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={()=>actualizarNumero(7)} className="rounded-sm bg-white w-10" >7</button>
            <button onClick={()=>actualizarNumero(8)} className="rounded-sm bg-white w-10">8</button>
            <button onClick={()=>actualizarNumero(9)}className="rounded-sm bg-white w-10">9</button>
            <button onClick={()=>actualizarNumero(7)} className="rounded-sm bg-white w-10" >+</button>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={()=>actualizarNumero(4)} className="rounded-sm bg-white w-10">4</button>
            <button onClick={()=>actualizarNumero(5)} className="rounded-sm bg-white w-10">5</button>
            <button onClick={()=>actualizarNumero(6)} className="rounded-sm bg-white w-10">6</button>
            <button onClick={()=>actualizarNumero()} className="rounded-sm bg-white w-10" >-</button>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={()=>actualizarNumero(1)} className="rounded-sm bg-white w-10">1</button>
            <button onClick={()=>actualizarNumero(2)} className="rounded-sm bg-white w-10">2</button>
            <button onClick={()=>actualizarNumero(3)} className="rounded-sm bg-white w-10">3</button>
            <button onClick={()=>actualizarNumero(7)} className="rounded-sm bg-white w-10" >x</button>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={()=>actualizarNumero(7)} className="rounded-sm bg-white w-10">C</button>
            <button onClick={()=>actualizarNumero(0)} className="rounded-sm bg-white w-10">0</button>
            <button onClick={()=>actualizarNumero(7)} className="rounded-sm bg-white w-10">=</button>
            <button onClick={()=>actualizarNumero(7)} className="rounded-sm bg-white w-10">/</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
