import './Landingpage.css';
import Container from "react-bootstrap/Container";
import { Fade } from "react-reveal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import groupDiverse  from "./groupDiverse.avif";

function Landingpage()
{
    return(
        <>
            <div id='Landingpage' className="pt-60 pb-40">
                <Container>
                    <Row>
                        <Col lg="8" sm="12" className="pr-100 pr-sm-0">
                        <Fade left>
                            <h2 className="title">
                            Your One-Stop Destination.<span>for Building <br/> a Creative & Futuristic.</span> Blockchain Ecosystem!
                            </h2>
                        </Fade>
                        </Col>
                        <Col lg="4" sm="12">
            <Fade right>
              <div className="mb-50 mt-50">
                <h4 className="con">
                Let's shape your <b>idea</b> into <b>products</b> that will lead the blockchain industry in the upcoming years.
                </h4>
              </div>
              <Button className="getstarted">Get Started</Button>
            </Fade>
          </Col>
                    </Row>
                </Container>

                <Container fluid className="pl-0 pr-0 pt-100">
        <Row>
          <Col lg="9" sm="12" className="imgGroup">
            
            <img src={groupDiverse} className="groupDiverse" />
          </Col>
          <Col lg="3" sm="12">
                <Fade right>
                   <span className='sent'> <h1>It's a brand-new way of transmitting money without the need for traditional banking networks, as well as a means to store data in a transparent and unalterable way.</h1></span>
                </Fade>
          </Col>
        </Row>
      </Container>

            </div>
        </>
    )
}

export default Landingpage