import axios from "axios";
import { salesJournalAPI, tabelWorkersAPI, workersAPI } from "../api";
import { GET_SALES_ITEM, GET_SALES_JOURNAL, GET_TABEL_WORKERS, GET_WORKERS, GET_WORKER_ID } from "../types";

export function getWorkers() {
    return async (dispatch) => {
        const { data } = await axios(workersAPI)
        dispatch({
            type: GET_WORKERS,
            payload: data
        })
    }
}

export function getWorker(id) {
    return async (dispatch) => {
        const { data } = await axios(`${workersAPI}${id}/`)
        dispatch({
            type: GET_WORKER_ID,
            payload: data
        })
    }
}

export function getTabelWorkers() {
    return async (dispatch) => {
        const { data } = await axios(tabelWorkersAPI)
        dispatch({
            type: GET_TABEL_WORKERS,
            payload: data
        })
    }
}

export function getSalesJournal() {
    return async (dispatch) => {
        const { data } = await axios(salesJournalAPI)
        dispatch({
            type: GET_SALES_JOURNAL,
            payload: data
        })
    }
}

export function getSalesItem(id) {
    return async (dispatch) => {
        const { data } = await axios(`${salesJournalAPI}${id}/`)
        dispatch({
            type: GET_SALES_ITEM,
            payload: data
        })
    }
}