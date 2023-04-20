const reducer = (state=0, action) => {
    if(action.type==='changeColor'){
        return action.color;
    }
    else{
        return state;
    }
}

export default reducer;