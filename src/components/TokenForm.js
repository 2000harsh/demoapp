import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TokenForm.css';

function TokenForm() {
  return (
    <>
        <form>
            <h2>Launch your Token</h2>
            <div className='form'>
                <div className='space'>
                <Container>
                    <Row>
                        <Col>
                            <label className='l1'><h2>Token Informatin</h2></label>
                        </Col>
                        <Col>
                            <label className='l1'><h2>Customization</h2></label>
                        </Col>
                    </Row>
      <Row>
        <Col>
            <label>Token Name</label><br/>
            <input className='i1' type='text' placeholder='Token Name'/>
        </Col>
            
        <Col>
            <label>Token Symbol</label><br/>
            <input type='text' placeholder='Token Symbol'/>
        </Col>

        <Col>
            <input type='checkbox'/>
            <label>Transfer Ownership</label><br/>  
            <input type='text'></input>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
            <label>Decimal</label><br/>
            <input type='text' placeholder='Decimal'/>
        </Col>

        <Col>
            <label className='l1'><h1>Supply</h1></label>
        </Col>

        <Col>
            <input type='checkbox'/>
            <label>Token Price</label><br/>
            <input type='text'/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
            <label className='l2'><h3>Access Control</h3></label><br/>
            <input type="radio" id="Ownable" name="fav_language" value="Ownable"/>
            <label for="Ownable">Ownable</label>
            <input type="radio" id="Roles" name="fav_language" value="Roles"/>
            <label for="Roles">Roles</label>
        </Col>

        <Col>
            <label>Supply Type</label><br/>
            <select name="Fixed" id="Fixed">
                <option value="Fixed">Fixed</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </Col>
        <Col>
            <input type='checkbox'/>
            <label>Multi Wallet withdrawals</label>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
            <label className='l3'><h3>Features</h3></label><br/>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
            <label>Burnable</label>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
            <label>Pausable</label>
            <br/>
            <input type='checkbox'/>
            <label>Recoverable</label>
            <input type='checkbox'/>
            <label>Verified on Explorer</label>
        </Col>
            
        <Col>
            <label>Intial Supply</label><br/>
            <input type='text' placeholder='0'/>
        </Col>

        <Col>
            <label className='l4'><h3>Agreement</h3></label>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        </Col>
        <Col>
            <label>Maximum Supply</label><br/>
            <input type='text' placeholder='0'/>
        </Col>
        <Col>
            <input type='checkbox'/>
            I have read,understand and agree to the Terms and Condition
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        </Col>
        <Col>
            <label><h3>Networks</h3></label><br/>
            <select name="Fixed" id="Fixed">
                <option value="Fixed">Binance Smart Chain Testnet</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </Col>
        <Col>
            <button class="btn btn-primary" type="button">Confirm</button>    
        </Col>
      </Row>
    </Container>
                </div>
            
            </div>
        </form>
        
    </>
    
  );
}

export default TokenForm;