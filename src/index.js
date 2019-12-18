import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faInfoCircle, faShoppingCart, faTruck, faBookmark, faShieldAlt, faPen, faCheckCircle, faExpandArrowsAlt, faTrophy,
  faCompass, faEnvelope, faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {Col, Row, Container, Button} from "react-bootstrap";


 
class Obligatorio extends React.Component {
    render () {
        return (
<div>

  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <Container>
      <img className= "displayed" src="./logo WEB-04-04.png" alt="some text"width="110" height="65" />
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className= "navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">INICIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">SOBRE</a>
          </li>
          <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="#signup">PRODUCTOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">SERVICIOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">CONTACTO</a>
          </li>
        </ul>
      </div>
    </Container>
  </nav>


  {/* Imagen y texto arriba */}
  <div>
    <header className="caratula">
      <div className="mx-auto text-center">
        <h1>Somos</h1>
        <h2>WEB Ltda</h2>
        <h3> Importamos, Producimos y Distribuimos.</h3>
        <div className= "socialMediaIcons">
          <FontAwesomeIcon icon={faFacebookF} />{' '}
          <FontAwesomeIcon icon={faTwitter} />{' '}
          <FontAwesomeIcon icon={faInstagram} />{' '}
          <FontAwesomeIcon icon={faLinkedinIn} />{' '}
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        <br/>
        <Button variant="primary" id="btn">Hacé tu pedido ahora</Button>
      </div>
    </header>
  </div>

  
  {/* Producto y texto lateral */}
  <div id= "segundoBloque">
    <Container>
      <Row>
        <Col md={6}>
           <img className="img-fluid mb-3 mb-lg-0" src="./pieza del mes-01.png" alt="" id="productoAzul"/>
        </Col>
        <Col md={6} id="bloqueTexto">
          <h2 className="text-left">Producto Del Mes</h2>
          <p>Adaptador de conexión de salida de tanque de PVC, de la línea Amanco Conectando.
            La marca Amanco Wavin (Brasil) pertence a Mexichem, grupo de empresas químicas y petroquímicas líderes en el mercado latino-americano. Y es representada en Uruguay exclusivamente
            por WEB Ltda.</p>
          <br/>
          <Row>
            <Col xs={3} font-weight-bold>
              <ul className="columnas">
                <li className="item">Pieza</li>
                <li className="item">Marca</li>
                <li className="item">Material</li>
                <li className="item">Medida</li>
                <li className="item">Código</li>
              </ul>
            </Col>
            <Col-auto font-weight-bold>
              <ul className="columnas">
                <li className="item">:</li>
                <li className="item">:</li>
                <li className="item">:</li>
                <li className="item">:</li>
                <li className="item">:</li>
              </ul>
            </Col-auto>
            <Col>
              <ul className="columnas">
                <li className="item">Salida soldable de tanque</li>
                <li className="item">AMANCO</li>
                <li className="item">PVC</li>
                <li className="item">50 mm x 1 1/2”</li>
                <li className="item">12025</li>
              </ul>
            </Col>
          </Row>
          <br/>
          <br/>
          <Button variant="primary" id="btns"><FontAwesomeIcon icon={faPaperclip} />{' '}FICHA TECNICA</Button>{' '}
          <Button variant="danger" id= "btnes"><FontAwesomeIcon icon={faShoppingCart} />{' '}COMPRAR</Button>{' '}
        </Col>
      </Row>
    </Container>
  </div>



  { /* Servicios */}
  <div className="cards">
    <Container>
      <br/>
      <br/>
      <h2 className="text-center">Servicios</h2>
      <br/>
      <div className="card-deck">
        {/* Card 1 */}
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <FontAwesomeIcon icon={faInfoCircle} /> 
            </div>
            <br/>
              <h5 className="text-center">ASESORAMIENTO</h5>
              <p className="card-text">Brindamos la asistencia necesaria para la mejor y más eficiente implementación de tus proyectos.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <br/>
            <h5 className="text-center">VENTA TELEFONICA</h5>
            <p className="card-text">Contamos con múltiples vendedores con línea directa y ofrecemos atención por Whatsapp para agilizar tu compra.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <FontAwesomeIcon icon={faTruck} />  
            </div>
            <br/>
            <h5 className="text-center">ENTREGA</h5>
            <p className="card-text">Gestionamos la entrega de tus pedidos con nuestra propia logística, para llegar a todo Uruguay.</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card">
          <div className="card-body">
            <div className="card-icon">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <br/>
            <h5 className="text-center">GARANTIA</h5>
            <p className="card-text">Con cerca de 30 años en el mercado, nos enfocamos en conocer a nuestros clientes y sus necesidades.</p>
          </div>
        </div>
      </div>
    </Container>
  </div>

      

  {/* Certificaciones */}
  {/* Timeline 1 */}
  <Container>
    <Row>
      <Col sm={6}>
        <div className="bloquetimeline">
          <ul className="timeline">
            <li>
              <li className="ml-3">
                <div className="fondo-simbolo"></div>
                <FontAwesomeIcon icon={faShieldAlt} id="simbolo"/>
                <h5 id="certificaciones">CERTIFICACIONES - PVC</h5>
                <br/>
              </li>
              <li className="timeline-item ml-3 p-4">
                <div className="timeline-line"></div>
                  <h2 className="h5 mb-0">Tubos de PVC - WEB</h2><span className="small text-gray" id="segunda">Version 1982</span>
                  <p className="text-sm-left font-weight-light" id="inferior">Aprobación de tubos de PVC, bajo norma UNIT 206:1982.</p>
              </li>
              <li className="timeline-item ml-3 p-4">
                <div className="timeline-line"></div>
                  <h2 className="h5 mb-0">Tubos de PVC UV - WEB</h2><span className="small text-gray" id="segunda">Version 1982</span>
                  <p className="text-sm-left font-weight-light" id="inferior">Aprobación de tubos de PP bicapa, bajo norma UNIT 206:1982.</p>
              </li>
              <li className="timeline-item ml-3 p-4">
                <div className="timeline-line"></div>
                  <h2 className="h5 mb-0">Tubos de PVC - WEB</h2><span className="small text-gray" id="segunda">Version 1982</span>
                  <p className="text-sm-left font-weight-light" id="inferior"> Aprobación de tubos de PVC, bajo norma UNIT 206:1982.</p>
              </li>
            </li>
          </ul>
        </div>
      </Col>
  

      {/* Timeline 2 */}
      <Col sm={6}>
        <div className="bloquetimeline">
          <ul className="timeline">
            <li>
              <li className="ml-3">
                <div className="fondo-simbolo"></div>
                <FontAwesomeIcon icon={faShieldAlt} id="simbolo"/>
                <h5 id="certificaciones">CERTIFICACIONES - PP</h5>
                <br/>
              </li>
              <li className="timeline-item ml-3 p-4">
                <div className="timeline-line"></div>
                  <h2 className="h5 mb-0">Tubos de PP Monocapa</h2><span className="small text-gray" id="segunda">Version 2014</span>
                  <p className="text-sm-left font-weight-light" id="inferior">Aprobación de tubos de PP monocapa, bajo norma UNIT 799:2014.</p>
              </li>
              <li className="timeline-item ml-3 p-4">
                <div className="timeline-line"></div>
                  <h2 className="h5 mb-0">Tubos de PP Bicapa</h2><span className="small text-gray" id="segunda">Version 2014</span>
                  <p className="text-sm-left font-weight-light" id="inferior">Aprobación de tubos de PP bicapa, bajo norma UNIT 799:2014.</p>
              </li>
              <li className="timeline-item ml-3 p-4">
                <div className="timeline-line"></div>
                  <h2 className="h5 mb-0">Tubos de PP</h2><span className="small text-gray" id="segunda">Version 2014</span>
                  <p className="text-sm-left font-weight-light" id="inferior"> Aprobación de tubos de PVC, bajo norma UNIT 799:2014.</p>
              </li>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>



  {/* Trabajos */}
  <div className= "trabajos">
    <Container>
      <br/>
      <br/>
      <div className="mx-auto text-center">
        <h2>Trabajos Destacados</h2>
        <br/>
        <br/>
        <Button variant="primary" id="botonimg1">MONTEVIDEO</Button>{' '}
        <Button variant="primary" id="botonimg2">COLONIA</Button>{' '}
        <Button variant="primary" id="botonimg3">MALDONADO</Button>{' '}
        <Button variant="primary" id="botonimg4">SALTO</Button>{' '}
      </div>
      <br/>
      <Row>
        <Col>
          <img className="img-fluid mb-3 mb-lg-0" src="./imagenes-01.png" alt=""/>
        </Col>
        <Col>
          <img className="img-fluid mb-3 mb-lg-0" src="./imagenes-05.png" alt=""/>
        </Col>
        <Col>
          <img className="img-fluid mb-3 mb-lg-0" src="./imagenes-02.png" alt=""/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <img className="img-fluid mb-3 mb-lg-0" src="./imagenes-04.png" alt=""/>
        </Col>
        <Col>
          <img className="img-fluid mb-3 mb-lg-0" src="./imagenes-06.png" alt=""/>
        </Col>
        <Col>
          <img className="img-fluid mb-3 mb-lg-0" src="./imagenes-03.png" alt=""/>
        </Col>
      </Row>
    </Container>
  </div>



  {/* Numeros */}
  <div className= "numeros">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <FontAwesomeIcon icon={faPen} id="icono"/>
        <br/>
        <br/>
        <h1>254</h1>
        <p>PRODUCTOS</p>
      </div>
      <div className="mx-auto text-center">
        <FontAwesomeIcon icon={faCheckCircle} id="icono"/>
        <br/>
        <br/>
        <h1>1600</h1>
        <p>CLIENTES</p>
      </div>
      <div className="mx-auto text-center">
        <FontAwesomeIcon icon={faExpandArrowsAlt} id="icono"/>
        <br/>
        <br/>
        <h1>9</h1>
        <p>MARCAS</p>
      </div>
      <div className="mx-auto text-center">
        <FontAwesomeIcon icon={faTrophy} id="icono"/>
        <br/>
        <br/>
        <h1>14</h1>
        <p>RECONOCIMIENTOS</p>
      </div>
    </div>
  </div>


  {/* Contacto */}
  <Container>
    <div className="contacto">
      <Row>
        <Col md={6}>
          <form>
            <br/>
            <h6>CONTACTO</h6>
            <br/>
            <Row>
              <Col>
                <input type="nombre" className="form-control" id="nombre" placeholder="Nombre"/>
              </Col>
              <Col>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
              </Col>
            </Row>
              <br/>
              <input type="asunto" className="form-control" id="asunto" placeholder="Asunto"/>
              <br/>
              <textarea className="form-control" rows="5" placeholder="Su mensaje..."></textarea>
              <br/>
              <Button variant="primary" id="boton-contacto">ENVIAR</Button>
          </form>
          <br/>
        </Col>
      
        <div className= "derecha">
          <Row>
            <Col md={6}>
              <h6>DATOS EMPRESA</h6>
              <div className= "container-derecha">
                <Col>
                  <span><FontAwesomeIcon icon={faCompass} id="derecha-icon"/>{' '}Montevideo, Uruguay</span>
                </Col>
                <br></br>
                <Col>
                  <span><FontAwesomeIcon icon={faEnvelope} id="derecha-icon"/>{' '}ventasweb@adinet.com.uy</span>
                </Col>
                <br></br>
                <Col>
                  <span><FontAwesomeIcon icon={faPhoneVolume} id="derecha-icon"/>{' '}22 22 23 23</span>
                </Col>
                </div>
            </Col>
          </Row>
        </div> 

        <div className="container-mapa">
          <img src="./mapa-01.png" className ="img-fluid" alt="Responsive img"/>
        </div>
      </Row>
    </div>
  </Container>


  {/* Footer */}
  <div className= "footer mx-auto text-center">
    <div className= "socialMediaIcons2">
      <FontAwesomeIcon icon={faFacebookF} />{' '}
      <FontAwesomeIcon icon={faTwitter} />{' '}
      <FontAwesomeIcon icon={faInstagram} />{' '}
      <FontAwesomeIcon icon={faLinkedinIn} />{' '}
      <FontAwesomeIcon icon={faGoogle} />
    </div>
      <p>Copyright © 2018 All Right Reserved</p>
  </div>

</div>
  
);
 }
}

ReactDOM.render(<Obligatorio />, document.getElementById("root"));
