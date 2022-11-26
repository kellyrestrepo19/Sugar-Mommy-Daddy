import FormularioAyuda from "./FormularioAyuda";
import FormularioBeneficiario from "./FormularioBeneficiario";
import FormularioPresupuesto from "./FormularioPresupuesto";
import Imagenes from "./Imagenes";

const Main = () => {
  return (
    <main>
      <section className="formularios">
        <FormularioAyuda />
        <FormularioBeneficiario />
        <FormularioPresupuesto />
      </section>
      <Imagenes/>
    </main>

  )
}

export default Main;