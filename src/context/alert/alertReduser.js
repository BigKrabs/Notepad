import { HIDE_ALERT, SHOW_ALERT } from "../types"

const handles = {
   [SHOW_ALERT] : (state, {payload}) => ({...payload, visible: true}),
   [HIDE_ALERT] : state => ({...state , visible: false}),
   DEFAULT: state => state
}

export const alertReduser = (state, action) => {
    const handle = handles[action.type] || handles.DEFAULT
    return handle(state,action)
}