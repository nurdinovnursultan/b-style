import { GET_WORKERS } from "../types"

const initialState = {
    workers: []
}

export const workersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS:
            return { ...state, workers: action.payload }
        default:
            return state
    }
}