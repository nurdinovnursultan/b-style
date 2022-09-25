import axios from "axios"
import { catalogAPI, countriesAPI, elaborationAPI, semiFinishedAPI, stockAPI } from "../api"
import {
    GET_SEMI_FINISHED,
    GET_SEMI_FINISHED_ID,
    GET_COUNTRIES,
    GET_ELABORATION,
    GET_CATALOG,
    GET_CATALOG_ID,
    GET_STOCK
} from "../types"

export function getSemiFinished() {
    return async (dispatch) => {
        const { data } = await axios(semiFinishedAPI)
        dispatch({
            type: GET_SEMI_FINISHED,
            payload: data
        })
    }
}

export function getSemiFinishedId(id) {
    return async (dispatch) => {
        const { data } = await axios(`${semiFinishedAPI}${id}/`)
        dispatch({
            type: GET_SEMI_FINISHED_ID,
            payload: data
        })
    }
}

export function getCountries() {
    return async (dispatch) => {
        const { data } = await axios(countriesAPI)
        dispatch({
            type: GET_COUNTRIES,
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

export function getCatalogId(id) {
    return async (dispatch) => {
        const { data } = await axios(`${catalogAPI}${id}/`)
        dispatch({
            type: GET_CATALOG_ID,
            payload: data,
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

export function postStock(obj) {
    return async (dispatch) => {
        const { data } = await axios.post(stockAPI,obj)
        dispatch({
            type: GET_STOCK,
            payload: data
        })
    }
}

export function postCatalog(obj) {
    return async (dispatch) => {
        const { data } = await axios.post(catalogAPI, obj)
        dispatch({
            type: GET_CATALOG,
            payload: data
        })
    }
}

