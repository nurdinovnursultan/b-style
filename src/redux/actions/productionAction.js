import axios from "axios"
import { catalogAPI, elaborationAPI, semiFinishedAPI, stockAPI } from "../api"
import { GET_CATALOG, GET_ELABORATION, GET_SEMI_FINISHED, GET_STOCK, GET_CATALOG_ID } from "../types"

export function getSemiFinished() {
    return async (dispatch) => {
        const { data } = await axios(semiFinishedAPI)
        console.log(data);
        dispatch({
            type: GET_SEMI_FINISHED,
            payload: data
        })
    }
}

export function getElaboration() {
    return async (dispatch) => {
        const { data } = await axios(elaborationAPI)
        dispatch({
            type: GET_ELABORATION,
            payload: data
        })
    }
}

export function getCatalog() {
    return async (dispatch) => {
        const { data } = await axios(catalogAPI)
        dispatch({
            type: GET_CATALOG,
            payload: data
        })
    }
}

export function getStock() {
    return async (dispatch) => {
        const { data } = await axios(stockAPI)
        dispatch({
            type: GET_STOCK,
            payload: data
        })
    }
}

export function getCatalogId(id) {
    return async (dispatch) => {
        const { data } = await axios(`${catalogAPI}${id}/`)
        dispatch({
            type: GET_CATALOG_ID,
            payload: data,
        })
    }
}