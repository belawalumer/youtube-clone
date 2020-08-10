const initialState = []

export const searchReducer = (state = initialState, action) => {
    if (action.type == "add")
        return action.payload
    return state;
}