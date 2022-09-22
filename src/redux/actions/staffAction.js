import axios from "axios";
import { dailyDiaryAPI, tabelWorkersAPI, workersAPI } from "../api";
import { GET_DAILY_DIARY, GET_TABEL_WORKERS, GET_WORKERS } from "../types";

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

export function getDailyDiary() {
    return async (dispatch) => {
        const { data } = await axios(dailyDiaryAPI)
        dispatch({
            type: GET_DAILY_DIARY,
            payload: data
        })
    }
}