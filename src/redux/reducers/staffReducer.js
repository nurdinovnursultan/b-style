import { GET_TABEL_WORKERS, GET_WORKERS } from "../types"

const initialState = {
    workers: {},
    tabelWorkers: {}
}

export const workersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS:
            return { ...state, workers: action.payload }
        case GET_TABEL_WORKERS:
            return { ...state, tabelWorkers: action.payload }
        default:
            return state
    }
}