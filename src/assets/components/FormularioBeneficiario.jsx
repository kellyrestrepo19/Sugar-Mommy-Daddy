const FormularioBeneficiario = () => {
    return (
        <section class="form1">
            <form className="beneficiarios" action="">
                <h1>Beneficiarios</h1>
                <input class="formulario-beneficiario" placeholder="Nombre" type="text" />
                <input class="formulario-beneficiario" placeholder="Dirección" type="text" />
                <input class="formulario-beneficiario" placeholder="Universidad" type="text" />
                <input class="formulario-beneficiario" placeholder="Edad" type="text" />
                <input class="formulario-beneficiario" placeholder="Correo" type="email" />
                <input class="formulario-beneficiario" placeholder="Telefono" type="file"/>
                <input class="btnGuardar" type="submit" value="Agregar" />
            </form>
        </section>
    )
}
export default FormularioBeneficiario;