const Footer = () => {
    return (
        <section className="footer-basic">
        <footer>
          <section className="imagenes">
            <img className="img" src="../../../public/instagram.png" alt="" />
            <img className="img" src="../../../public/facebook.png" alt="" />
            <img className="img" src="../../../public/twitter.png" alt="" />
          </section>
  
  
          
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="link" href="#">Contactanos</a>
            </li>
            <li className="list-inline-item">
              <a className="link" href="#">Presta tus servisios</a>
            </li>
            <li className="list-inline-item">
              <a className="link" href="#">A cambio de cosas</a>
            </li>
          </ul>
        
        </footer>
      </section>
    )
}
export default Footer;