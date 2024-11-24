const initialState = {
    quantities: {}
};

const CardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            const { id, product } = action.payload;
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [id]: (state.quantities[id] || 0) + 1,
                }
            };
        }
        case 'DECREMENT': {
            const { id } = action.payload;
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [id]: Math.max((state.quantities[id] || 1) - 1, 0),
                }
            };
        }
        case 'REMOVE': {
            const { id } = action.payload;
            const { [id]: _, ...remainingQuantities } = state.quantities;
            return {
                ...state,
                quantities: remainingQuantities
            };
        }
        case 'REMOVEALL': {
            return {
                ...state,
                quantities: {}
            };
        }
        default:
            return state;
    }
};

export default CardReducer;
