import { GET_CATALOG, GET_ELABORATION, GET_SEMI_FINISHED, GET_STOCK } from "../types"
const initialState = {
    semiFinished: {},
    elaboration: {},
    catalog: {},
    stock: {},
}

export const productionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEMI_FINISHED:
            return { ...state, semiFinished: action.payload }
        case GET_ELABORATION:
            return { ...state, elaboration: action.payload }
        case GET_CATALOG:
            return { ...state, catalog: action.payload }
        case GET_STOCK:
            return { ...state, stock: action.payload }
        default:
            return state
    }
}