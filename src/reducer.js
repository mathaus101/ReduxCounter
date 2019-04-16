// Reducer for the state of a counter

function counter(state, action) {
    if (state === undefined) {
        return { count: 0 };
    }

    var count = state.count;

    switch (action.type) {
        case "INCREMENT":
            return { count: count + 1 };
        case "DECREMENT":
            return { count: count - 1 };
        default:
            return state;
    }
}

export default counter;