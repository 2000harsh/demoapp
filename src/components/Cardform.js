import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';  
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import './Cardform.css'

function Cardform()
{
    return(
        <>
        <center>
        <ButtonGroup size="lg" className="mb-2">
            <Link to="/Cardform"><Button className='b1'>Form</Button></Link>
            <Link to="/History"><Button className='b2'>History</Button></Link>
        </ButtonGroup>

        <Card style={{width:'80rem'}} className="card">
            <div className='container-card'>

                    <div className='column'>
                        <h2 className='colortitle'>Token Information</h2>
                    </div>
                    <div className='column'>
                       
                    </div>
                    <div className='column'>
                        <h2 className='colortitle'>Customization</h2>
                    </div>


                    <div className='column'>
                        <hr className='inputhr'/>
                    </div>
                    <div className='column'>
                    
                    </div>
                    <div className='column'>
                        <hr className='inputhr1'/>
                    </div>

                <div className='column'>
                    <label><b>Token Name</b>
                    <Tooltip title="Enter Your Token Name">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                </label>
                <br/>
                    <input type='text' className='inputfield'/>
                </div>
                <div className='column'>
                    <label><b>Token Symbol</b>
                    <Tooltip title="Enter Your Token Symbol">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <input type='text'className='inputfield'/>
                </div>
                <div className='column'>
                <input type="checkbox" id="multiwallet" name="multiwallet" value="True"/>
                    <label><b>Transfer Ownership</b>
                    <Tooltip title="Check if you want transfer ownership">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <input type='text'className='inputfield'/>
                </div>


                <div className='column'>
                    <label><b>Decimals</b>
                    <Tooltip title="Enter Decimal Number">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <input type='number' className='inputfield'/>
                </div>
                <div className='column'>
                    <h2>Supply</h2>
                    <hr className='inputfield3'/>
                </div>
                <div className='column'>
                <input type="checkbox" id="multiwallet" name="multiwallet" value="True"/>
                    <label><b>Token Price</b>
                    <Tooltip title="Enter Your Tokrn-Price">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <input type='number' className='inputfield'/>
                </div>


                <div className='column'>
                    <h2>Access Control 
                        <Tooltip title="Select one of the access control">
                            <IconButton>
                                <InfoIcon className='btnstyle'/>
                            </IconButton>
                        </Tooltip></h2>
                    <hr className='inputfield2'/>
                    <input type="radio" id="ownable" name="access_control" value="ownable"/>
                    <label for="ownable">Ownable</label>
                    <input type="radio" id="roles" name="access_control" value="roles"/>
                    <label for="roles">Roles</label>
                </div>
                <div className='column'>
                    <label><b>Supply Type</b>
                    <Tooltip title="Select Supply type">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <select name="supply" id="supply" className='inputfield'>
                        <option value="fixed">Fixed</option>
                        <option value="mintable">Mintable</option>
                        <option value="xyz">xyz</option>
                    </select>
                </div>
                <div className='column'>
                <input type="checkbox" id="multiwallet" name="multiwallet" value="True"/>
                    <label className='inputfieldcheckbox'><b>Multi wallet withdrawals</b>
                    <Tooltip title="select if you want multipal wallet withdrawals">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    
                </div>


                <div className='column'>
                    <h2>Features</h2>
                    <hr className='inputfieldfeature'/>
                </div>
                <div className='column'>
                    <label><b>Initial Supply</b>
                    <Tooltip title="Select initial value">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <input type='number' className='inputfield'/>
                </div>
                <div className='column'>
                    <h2>Agreement</h2>
                    <hr className='inputfield3'/>
                </div>


                <div className='column'>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                <label>Burnable</label>
                <br/>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                <label>Pausable</label>
                <br/> 
                <input type="checkbox" id="recoverable" name="recoverable" value="True"/>
                <label className='inputfieldcheckbox'>Recoverable</label><br/>
                <input type="checkbox" id="verify_explorer" name="verify_explorer" value="True"/>
                <label className='inputfieldcheckbox'>Verify Explorer</label><br/> 
                </div>
                <div className='column'>
                    <label><b>Maximum Supply</b>
                    <Tooltip title="select maximum value">
                        <IconButton>
                            <InfoIcon className='btnstyle'/>
                        </IconButton>
                    </Tooltip>
                    </label><br/>
                    <input type='number' className='inputfieldmax'/>
                </div>
                <div className='column'>
                <input type="checkbox" id="multiwallet" name="multiwallet" value="True"/>
                    <label className='inputfieldcheckbox'>I Have read,understand and agree Terms of use</label><br/>   
                </div>

                
                <div className='column'>
                    
                </div>
                <div className='column'>
                    <h2>Networks 
                        <Tooltip title="Select any network">
                            <IconButton>
                                <InfoIcon className='btnstyle'/>
                            </IconButton>
                        </Tooltip></h2><br/>
                     <hr className='inputfieldnetwork'/>
                </div>
                <div className='column'>
                    <Button className='confirmbtn'>Confirm</Button>
                </div>



                    <div className='column'>
                    
                    </div>
                <div className='column'>
                    <select name="supply" id="supply" className='inputfield' style={{marginBottom:"5%"}}>
                        <option value="fixed">Binance Smart Chain Testnet</option>
                        <option value="mintable">Mintable</option>
                        <option value="xyz">xyz</option>
                    </select>
                </div>
            </div>
        </Card>
        </center>
        </>
    )
}

export default Cardform