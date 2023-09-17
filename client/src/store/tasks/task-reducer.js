const initialState = {
    tasks: [],
    loading: false,
    error: null
}
const taskReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'GET_TASK': {
            return { ...state, loading: true }
        }
        case 'GET_TASK_SUCCESS': {
            return { ...state, tasks: action?.payload, loading: false, error: null }
        }
        case 'GET_TASK_ERROR': {
            return { ...state, tasks: null, error: action?.error, loading: false }
        }
        default:
            return state
    }
}

export default taskReducer;