import Header from "./Header";
import Footer from "./Footer";
const Main = () => {
  return (
    <main className=" d-flex flex-column justify-content-center align-items-center  bg bg-info">
        <section className="col-5">
        <section class="input-group mb-3 justify-content-center align-items-center ">
        <span class="input-group-text" id="basic-addon1">
          *
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          aria-describedby="basic-addon1"
        />
      </section>

      <section className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Correo"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @
        </span>
      </section>

      <label for="basic-url" className="form-label">
      </label>
      <section className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          Universidad
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </section>
      <section className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Telefono"

        />
        <input
          type="text"
          className="form-control"
          placeholder="Direccion"
          
        />
      </section>
      

      <section className="input-group">
        <span className="input-group-text"> Descripcion</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </section>
        </section>
     
    </main>
  );
};

export default Main;