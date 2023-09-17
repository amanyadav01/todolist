import { getAllTasks } from '../../services/fetchpost'
const getTask = () => async (dispatch) => {
    dispatch({ type: 'GET_TASK' })
    try {
        const response = await getAllTasks();
        const tasks = response.data?.slice(0, 9)
        dispatch({ type: 'GET_TASK_SUCCESS', payload: tasks })
    } catch (error) {
        console.log("Error in action");
        dispatch({ type: 'GET_TASK_ERROR', error })
    }
}


export {
    getTask
}