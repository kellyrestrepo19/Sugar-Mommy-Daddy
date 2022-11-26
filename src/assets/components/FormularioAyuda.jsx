const FormularioAyuda=()=>{
    return(
<section class="form2">
<form className="productos-ayuda" action="">
            <h1 class="titulo">Productos</h1>
                <input class="formulario-ayuda" type="text" placeholder="Nombre del prorducto"/>
                <input class="formulario-ayuda" type="text" placeholder="Descripción producto"/>
                <input class="formulario-ayuda" type="text" placeholder="Tienda"/>
                <input class="formulario-ayuda" type="number" placeholder="$ Valor del producto"/>
                <input class="formulario-ayuda" type="number" placeholder="Referencia"/>
                <input class="btnGuardar" type="submit" value="Agregar"/>
            </form>
</section>
    )
}
export default FormularioAyuda;