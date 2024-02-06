import { useState } from "react"

function App() {
  const [respuesta, setRespuesta] = useState("0")
  const [valorInicial, setValorInicial] = useState("0")
  const [operador, setOperador] = useState(null)
  const [operadorPresionado, setOperadorPresionado] = useState(false) // Nueva variable de estado

  const actualizarNumero = (valor) => {
    if (respuesta === "0" || operadorPresionado) {
      setRespuesta(valor.toString())
      setOperadorPresionado(false)
    } else {
      setRespuesta(respuesta + valor)
    }
  }
  const limpiarRespuesta = () => {
    setRespuesta("0")
    setValorInicial("0")
    setOperador(null)
    setOperadorPresionado(false)
  }
  const capturaOperacion = (operador) => {
    setOperador(operador)
    setValorInicial(respuesta)
    setOperadorPresionado(true)
  }
  const respuestaCalculo = () => {
    console.log(operador)
    let resultado
    if (operador === "+") {
      resultado = Number(valorInicial) + Number(respuesta)
    } else if (operador === "-") {
      resultado = Number(valorInicial) - Number(respuesta)
    } else if (operador === "x") {
      resultado = Number(valorInicial) * Number(respuesta)
    } else if (operador === "/") {
      resultado = Number(valorInicial) / Number(respuesta)
    }

    setRespuesta(resultado)
  }

  return (
    <>
      <div className="flex justify-center m-auto mt-5 w-[300px] h-[300px] bg-white flex-col" >
        <p className=" font-bold text-center text-[#25694e] text-[20px]">Calculador</p>
        <div className="w-[280px] bg-[#459b78] h-[250px]  m-auto">
          <div className=" w-[210px] bg-[#456156] h-[40px]  m-auto mt-5 mb-5 text-[24px] font-semibold">{respuesta}
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={() => actualizarNumero(7)} className="rounded-sm bg-white w-10" >7</button>
            <button onClick={() => actualizarNumero(8)} className="rounded-sm bg-white w-10">8</button>
            <button onClick={() => actualizarNumero(9)} className="rounded-sm bg-white w-10">9</button>
            <button onClick={() => capturaOperacion("+")} className="rounded-sm bg-white w-10" >+</button>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={() => actualizarNumero(4)} className="rounded-sm bg-white w-10">4</button>
            <button onClick={() => actualizarNumero(5)} className="rounded-sm bg-white w-10">5</button>
            <button onClick={() => actualizarNumero(6)} className="rounded-sm bg-white w-10">6</button>
            <button onClick={() => capturaOperacion("-")} className="rounded-sm bg-white w-10" >-</button>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={() => actualizarNumero(1)} className="rounded-sm bg-white w-10">1</button>
            <button onClick={() => actualizarNumero(2)} className="rounded-sm bg-white w-10">2</button>
            <button onClick={() => actualizarNumero(3)} className="rounded-sm bg-white w-10">3</button>
            <button onClick={() => capturaOperacion("x")} className="rounded-sm bg-white w-10" >x</button>
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <button onClick={() => limpiarRespuesta()} className="rounded-sm bg-white w-10">C</button>
            <button onClick={() => actualizarNumero(0)} className="rounded-sm bg-white w-10">0</button>
            <button onClick={() => respuestaCalculo()} className="rounded-sm bg-white w-10">=</button>
            <button onClick={() => capturaOperacion("/")} className="rounded-sm bg-white w-10">/</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
