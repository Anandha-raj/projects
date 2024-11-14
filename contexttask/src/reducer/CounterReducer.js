export const initialState = {
    quantities: {},
};

export const CounterReducer = (state, action) => {
    const { id } = action;
    switch (action.type) {
        case "increment":
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [id]: (state.quantities[id] || 1) + 1, // Increment quantity of specific item
                },
            };
            break;
        case "decrement":
            return {
                ...state,
                quantities: {
                    ...state.quantities,
                    [id]: Math.max((state.quantities[id] || 1) - 1, 1), // Decrement, with min of 1
                },
            };
            break;
        default:
            return state;
    }
}