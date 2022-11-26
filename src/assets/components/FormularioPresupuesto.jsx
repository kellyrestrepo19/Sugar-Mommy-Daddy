const FormularioPresupuesto=()=>{
    return(
        <section class="form3">
            <form className="presupuesto" action="">
            <h1 class="titulo">Presupuesto</h1>
                <input class="formulario-presupuesto" type="number" placeholder="$ Valor"/>
                <input class="formulario-presupuesto" type="text" placeholder="Descripción"/>
                <input class="btnGuardar" type="submit" value="Agregar"/>
            </form>
        </section>
    )
}
export default FormularioPresupuesto;