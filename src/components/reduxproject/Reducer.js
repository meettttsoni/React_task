const arr = [];

export const myReducer = (state = arr, action) => {
    if (action.type === "ADD") {
        return [
            ...state,
            { ...action.payload, quantity: 1 }
        ];
    }

    if (action.type === "INCREMENT") {
        return state.map((item, index) =>
            index === action.payload
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    if (action.type === "DECREMENT") {
        return state.map((item, index) =>
            index === action.payload && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
    }

    return state;
};
