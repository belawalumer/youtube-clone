const initialState = []

export const reducer = (state = initialState, action) => {
    if (action.type == "all_videos")
        return action.payload
    return state;
}