import { useState } from "react"
import Pantalla from "./components/Pantalla"
import BotonCal from "./components/BotonCal"
function App() {
  const [respuesta, setRespuesta] = useState("0")
  const [valorInicial, setValorInicial] = useState("0")
  const [operador, setOperador] = useState(null)
  const [operadorPresionado, setOperadorPresionado] = useState(false)

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
          <Pantalla respuesta={respuesta} />
          <div className="flex justify-center mt-2 gap-4">
            <BotonCal botonFuncion={() => actualizarNumero(7)} textBoton={"7"} />
            <BotonCal botonFuncion={() => actualizarNumero(8)} textBoton={"8"} />
            <BotonCal botonFuncion={() => actualizarNumero(9)} textBoton={"9"} />
            <BotonCal botonFuncion={() => capturaOperacion("+")} textBoton={"+"} />
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <BotonCal botonFuncion={() => actualizarNumero(4)} textBoton={"4"} />
            <BotonCal botonFuncion={() => actualizarNumero(5)} textBoton={"5"} />
            <BotonCal botonFuncion={() => actualizarNumero(6)} textBoton={"6"} />
            <BotonCal botonFuncion={() => capturaOperacion("-")} textBoton={"-"} />
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <BotonCal botonFuncion={() => actualizarNumero(1)} textBoton={"1"} />
            <BotonCal botonFuncion={() => actualizarNumero(2)} textBoton={"2"} />
            <BotonCal botonFuncion={() => actualizarNumero(3)} textBoton={"3"} />
            <BotonCal botonFuncion={() => capturaOperacion("x")} textBoton={"x"} />
          </div>
          <div className="flex justify-center mt-2 gap-4">
            <BotonCal botonFuncion={() => limpiarRespuesta()} textBoton={"C"} />
            <BotonCal botonFuncion={() => actualizarNumero(0)} textBoton={"0"} />
            <BotonCal botonFuncion={() => respuestaCalculo()} textBoton={"="} />
            <BotonCal botonFuncion={() => capturaOperacion("/")} textBoton={"/"} />
          </div>
        </div>
      </div>
    </>
  )
}
export default App
