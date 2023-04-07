import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import './CardView.css'
import fireDb from "../Firebas"
import { ToastContainer, toast } from "react-toastify";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import History from './History';






const initialState = {
    token_name:"",
    token_symbol:"",
    decimal:"",
    select_price:"",
    roles:"",
    supply_type:"",
    inti_supply:"",
    max_supply:"",
    smart_chain:""
}




function CardView() { 

    const validationSchema = Yup.object().shape({
        token_name:Yup.string().required('Token Name is required'),
        token_symbol:Yup.string().required('Token Symbl is required'),
        decimal:Yup.number().required('Enter value in Decimal').min(10,'Enter decimal value'),
        inti_supply:Yup.string().required('please Enter initial supply amount'),
        max_supply:Yup.string().required('please Enter maximum supply amount'),
        supply_type:Yup.string().required('Select any supply type'),
      });
    
      const formik = useFormik({
        initialValues:{
          token_name:'',
          token_symbol:'',
          decimal:'',
          inti_supply:'',
          max_supply:'',
          supply_type:'',
    
        },
        validationSchema,
        onSubmit:(data)=>{
          console.log(data);
        },
      });

    const [checked,  setChecked] = useState(false); 
    const [checked1, setChecked1] = useState(false); 
    const [checked2, setChecked2] = useState(false); 
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);

    const [state,setState]=useState(initialState);

    const {token_name,token_symbol,transfer_ownership,decimal,
        token_price,supply_type,inti_supply,
        max_supply,smart_chain} = state;

    const handleInput =(e) =>{
        const {name, value} = e.target;
        
        setState({...state, [name]: value})
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        state.harsh = checked
        state.Recoverable = checked1
        state.Verify_Explorer = checked2
        state.Condition = checked3
        state.Multi_wallet_transfer = checked4
        state.Ownable = checked5
        state.Transfer_Ownership = checked6
        state.Token_price = checked7
        state.Burnable =  checked8
        state.Pausable = checked9

        fireDb.child("contaxt").push(state, (err => {
            if(err){
                toast.error(err);
            }else{
                toast.success("Form added");
            }
        }))
    };

  return (
    <>

    <center>

    <ButtonGroup size="lg" className="mb-2">
       <Link to="/CardView"><Button className='b1'>Form</Button></Link>
       <Link to="/History"><Button className='b2'>History</Button></Link>
    </ButtonGroup>

     

        <br/>
    <Card style={{ width: '80rem' }} className="card">
      <ListGroup variant="flush">
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col>
                <Form.Group className="mb-1 mt-3 col-md-12" controlId="exampleForm.ControlInput1">
                <Form.Label className='line1'><h2>Token Informatin</h2></Form.Label><hr className='hr'/>
                </Form.Group>
                
                </Col>
                <Col>
                <Form.Group className="mb-1 mt-3 col-md-12" controlId="exampleForm.ControlInput1">
                <Form.Label className='line'><h2>Customization</h2></Form.Label><hr/>
                </Form.Group>
                </Col>
            </Row>
            









            <Row>
                <Col>
                <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Token Name<span>*</span>  
                <Tooltip title="Enter Token Name">
                    <IconButton>
                        <InfoIcon className='btnstyle'/>
                    </IconButton>
                </Tooltip>
                </Form.Label>
                <Form.Control type="text" name="token_name" className={'text-field' +  (formik.errors?.token_name && formik.touched?.token_name
                        ? ' is-invalid'
                        : '')}
               value={formik.values?.token_name} onChange={formik.handleChange} placeholder="Token Name" />
               <div className="invalid-feedback">
                    {formik.errors.token_name && formik.touched.token_name
                    ? formik.errors.token_name
                    : null}
                </div>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Token Symbol<span>*</span>
                <Tooltip title="Enter Token Symbol">
                    <IconButton>
                        <InfoIcon className='btnstyle'/>
                    </IconButton>
                </Tooltip>
                </Form.Label>
                <Form.Control type="text" name="token_symbol" className={'text-field' + (formik.errors?.token_symbol && formik.touched?.token_symbol
              ? ' is-invalid'
              : '')} value={formik.values?.token_symbol} onChange={formik.handleChange} placeholder="Token Symbol" />
              
              <div className="invalid-feedback">
                {formik.errors.token_symbol && formik.touched.token_symbol
                ? formik.errors.token_symbol
                : null}
             </div>
              </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                        <input
                        className='label1'
                        type="checkbox"
                        checked={checked6}
                        onChange={e => setChecked6(e.target.checked6)}/>
                        <Form.Label className='check'>Transfer_Ownership
                        <Tooltip title="For Transfering Ownership">
                            <IconButton>
                                <InfoIcon className='btnstyle'/>
                            </IconButton>
                        </Tooltip>
                        </Form.Label>  
                {/* {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                <Form.Check type={type} name="select_transfer" value={select_transfer} onChange={handleInput} id={`default-${type}`} label={`Transfer Ownership`}/>
                </div>
                ))} */}
                {/* <Form.Label>Transfer Ownership</Form.Label> */}
                <Form.Control type="text" name="transfer_ownership" className='text-field' value={transfer_ownership} onChange={handleInput} />
                </Form.Group>
                </Col>
            </Row>









            <Row>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='label'>Decimal<span>*</span>
                    <Tooltip title="Enter Decimal amount">
                    <IconButton>
                        <InfoIcon className='btnstyle'/>
                    </IconButton>
                </Tooltip>
                    </Form.Label>
                    <Form.Control type="number" name="decimal" className={'text-field' + (formik.errors?.decimal && formik.touched?.decimal
              ? ' is-invalid'
              : '')}  value={formik.values?.decimal} onChange={formik.handleChange} placeholder="0" />
                    
                    <div className="invalid-feedback">
                        {formik.errors.decimal && formik.touched.decimal
                        ? formik.errors.decimal
                        : null}
                    </div>
                    </Form.Group>

                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='line2'><h2>Supply</h2></Form.Label><hr/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <input
                        // className='label'
                        className="fix-space"
                        type="checkbox"
                        checked={checked7}
                        onChange={e => setChecked7(e.target.checked)}/>
                        <Form.Label className='check3, label'>Token_price
                        <Tooltip title="Enter Token Name">
                                <IconButton>
                                    <InfoIcon className='btnstyle'/>
                                </IconButton>
                        </Tooltip>
                        </Form.Label>
                    <Form.Control type="text" name="token_price" className='text-field' value={token_price} onChange={handleInput}/>
                    </Form.Group>
                </Col>
            </Row>










            <Row>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='line3, label'><h2>Access control
                    <Tooltip title="Select any control">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                        </h2></Form.Label><br/><hr/>
                    <input
                        type="radio"
                        checked={checked5}
                        onChange={e => setChecked5(e.target.checked)}/>
                        <Form.Label className='check1'>Ownable</Form.Label>
                        <input
                        type="radio"
                        checked={checked6}
                        onChange={e => setChecked6(e.target.checked)}/>
                        <Form.Label className='check1'>Transfer_Ownership</Form.Label>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='label'>Supply Type<span>*</span>
                    <Tooltip title="Select Supply TYpe">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </Form.Label>    
                    <Form.Select aria-label="Default select example" className={'text-field' + (formik.errors?.supply_type && formik.touched?.supply_type
              ? ' is-invalid'
              : '')} name="supply_type" value={formik.values?.supply_type} onChange={formik.handleChange}>
                        <option>Fixed</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <div className="invalid-feedback">
                        {formik.errors.supply_type && formik.touched.supply_type
                        ? formik.errors.supply_type
                        : null}
                    </div>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <input
                        type="checkbox"
                        checked={checked4}
                        onChange={e => setChecked4(e.target.checked)}/>
                        <Form.Label className='check, label'>Multi_wallet_transfer
                            <Tooltip title="Select for multipal wallet transfer">
                                <IconButton>
                                    <InfoIcon className='btnstyle'/>
                                </IconButton>
                            </Tooltip>
                        </Form.Label>
                    </Form.Group>
                </Col>
            </Row>









            <Row>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='line5'><h2>Features</h2></Form.Label><hr/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='label'>Intial Supply<span>*</span>
                    <Tooltip title="Enter initial supply value">
                    <IconButton>
                        <InfoIcon className='btnstyle'/>
                    </IconButton>
                </Tooltip>
                    </Form.Label>
                    <Form.Control type="number" name="inti_supply" className={'text-field' + (formik.errors?.inti_supply && formik.touched?.inti_supply
              ? ' is-invalid'
              : '')} value={formik.values?.inti_supply} onChange={formik.handleChange} placeholder="0" />

                <div className="invalid-feedback">
                    {formik.errors.inti_supply && formik.touched.inti_supply
                    ? formik.errors.inti_supply
                    : null}
                </div>

                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='line6'><h2>Agreement</h2></Form.Label><hr/>
                    </Form.Group>
                </Col>
            </Row>









            <Row>
            <Col>
            
            <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                <label class="switch">
                <input type="checkbox" className='text-field' checked={checked8} onChange={e => setChecked8(e.target.checked8)} />
                <span class="slider round"></span>
                </label>
            <Form.Label className='check2'>Burnable
                <Tooltip title="Select the feature">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
            </Form.Label><br/>
                <label class="switch">
                <input type="checkbox" className='text-field'  checked={checked9}  onChange={e => setChecked9(e.target.checked9)}/>
                <span class="slider round"></span>
                </label>
            <Form.Label className='check2'>Pausable
                        <Tooltip title="Select the feature">
                            <IconButton>
                                <InfoIcon className='btnstyle'/>
                            </IconButton>
                        </Tooltip>
            </Form.Label>
            </Form.Group>
 
                <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                        <input
                        type="checkbox"
                        checked={checked1}
                        onChange={e => setChecked1(e.target.checked)}/>
                        <Form.Label className='check'>Recoverable
                            <Tooltip title="Select the feature">
                                <IconButton>
                                    <InfoIcon className='btnstyle'/>
                                </IconButton>
                            </Tooltip>
                        </Form.Label>
                        <br/>

                        <input
                        type="checkbox"
                        checked={checked2}
                        onChange={e => setChecked2(e.target.checked)}/>
                        <Form.Label className='check'>Verify_Explorer
                            <Tooltip title="Select the feature">
                                <IconButton>
                                    <InfoIcon className='btnstyle'/>
                                </IconButton>
                            </Tooltip>
                        </Form.Label>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='label'>Maximum Supply<span>*</span>
                    <Tooltip title="Enter Maximum Supply">
                    <IconButton>
                        <InfoIcon className='btnstyle'/>
                    </IconButton>
                </Tooltip>
                    </Form.Label>
                    <Form.Control type="number" className={'text-field' + (formik.errors?.max_supply && formik.touched?.max_supply
              ? ' is-invalid'
              : '')} 
              value={formik.values?.max_supply} onChange={formik.handleChange}  name="max_supply" placeholder="0" />
                   
                    <div className="invalid-feedback">
                        {formik.errors.max_supply && formik.touched.max_supply
                        ? formik.errors.max_supply
                        : null}
                    </div>
                   
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                <input
                        type="checkbox"
                        checked={checked3}
                        onChange={e => setChecked3(e.target.checked)}/>
                        <Form.Label className='check4'>I agree to the Term&Use </Form.Label>
                </Form.Group>
                </Col>
            </Row>








            <Row>
                  <Col>
                    {/* <input
                        type="checkbox"
                        checked={checked}
                        onChange={e => setChecked(e.target.checked)}/>
                        <Form.Label>Harsh</Form.Label> */}
                  </Col> 
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Form.Label className='line7'><h2>Networks</h2></Form.Label><hr/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3 mt-3 col-md-8" controlId="exampleForm.ControlInput1">
                    <Button variant="primary"  className='col-md-11' type="submit" value="save" >Confirm</Button>
                    </Form.Group>
                </Col> 
            </Row>










            <Row>
            <Col>
                    <Form.Group className="mb-3 mt-3 col-md-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='line7, label'>Select Networks
                    <Tooltip title="Select Network Type">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </Form.Label>
                    <Form.Select aria-label="Default select example" className='text-field' name="smart_chain" value={smart_chain} onChange={handleInput}>
                        <option>Binance Smart Chain Testnet</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            
        </Form>
      </ListGroup>
    </Card>
    </center>

    <Routes>
      <Route path="/CardView" element={<CardView/>}></Route>
      <Route path="/History" element={<History/>}></Route>
    </Routes>
    
    </>
    
  );
}

export default CardView;