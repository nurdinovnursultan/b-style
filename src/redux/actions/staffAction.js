import axios from "axios";
import { workersAPI } from "../api";
import { GET_WORKERS } from "../types";

export function getWorkers() {
    return async (dispatch) => {
        const { data } = await axios(workersAPI)
        dispatch({
            type: GET_WORKERS,
            payload: data
        })
    }
}