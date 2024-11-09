export const initialState = {count:0};

export const counterReducer = (state, action) => {
    switch(action.type){
        case 'increment' :
            return {count: state.count + 1};
            break;
        case "decrement" :
            return {count: state.count - 1};
            break;
        default:
            throw new Error("unknow action type")
    }
}