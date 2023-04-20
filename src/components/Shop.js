import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreater } from "../State/index";


const Shop = () => {
    const amount =  useSelector(state => state.amount)
    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} =  bindActionCreators(actionCreater, dispatch);
    return(
        <div>
            <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(10)}}>-</button>
            Your Balance:{amount}
            <button className="btn btn-primary mx-2" onClick={() => {depositMoney(10)}}>+</button>
        </div>
    )
}

export default Shop