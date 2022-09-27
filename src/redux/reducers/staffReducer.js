import { GET_SALES_ITEM, GET_SALES_JOURNAL, GET_TABEL_WORKERS, GET_WORKERS, GET_WORKER_ID } from "../types"

const initialState = {
    workers: [],
    worker: {},
    tabelWorkers: [],
    sales: [],
    salesItem: {}
}

export const workersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKERS:
            return { ...state, workers: action.payload }
        case GET_WORKER_ID:
            return { ...state, worker: action.payload }
        case GET_TABEL_WORKERS:
            return { ...state, tabelWorkers: action.payload }
        case GET_SALES_JOURNAL:
            return { ...state, sales: action.payload }
        case GET_SALES_ITEM:
            return { ...state, salesItem: action.payload }
        default:
            return state
    }
}