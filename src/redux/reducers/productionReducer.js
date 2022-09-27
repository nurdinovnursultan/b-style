import { GET_CATALOG, GET_ELABORATION, GET_SEMI_FINISHED, GET_STOCK, GET_CATALOG_ID, GET_COUNTRIES, GET_SEMI_FINISHED_ID, GET_STOCK_ID } from "../types"


const initialState = {
    semiFinished: [],
    semiFinishedID: {},
    countries: [],
    elaboration: [],
    catalog: [],
    catalogID: {},
    stock: [],
    stockItem: {}
}

export const productionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEMI_FINISHED:
            return { ...state, semiFinished: action.payload }
        case GET_SEMI_FINISHED_ID:
            return { ...state, semiFinishedID: action.payload }
        case GET_COUNTRIES:
            return { ...state, countries: action.payload }
        case GET_ELABORATION:
            return { ...state, elaboration: action.payload }
        case GET_CATALOG:
            return { ...state, catalog: action.payload }
        case GET_CATALOG_ID:
            return { ...state, catalogID: action.payload }
        case GET_STOCK:
            return { ...state, stock: action.payload }
        case GET_STOCK_ID:
            return { ...state, stockItem: action.payload }
        default:
            return state
    }
}