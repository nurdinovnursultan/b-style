import axios from "axios";
import { tabelWorkersAPI, workersAPI } from "../api";
import { GET_TABEL_WORKERS, GET_WORKERS } from "../types";

export function getWorkers() {
    return async (dispatch) => {
        const { data } = await axios(workersAPI)
        dispatch({
            type: GET_WORKERS,
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