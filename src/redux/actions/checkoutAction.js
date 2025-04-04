import { CREATE_ORDER_CASH, CREATE_ORDER_CARD } from '../type'
import { usePostData } from '../../hooks/usePostData';


//create order cash fro user
export const createOrderCash = (id, body) => async (dispatch) => {
    try {
        const response = await usePostData(`/api/v1/orders/${id}`, body);
        // console.log(response)
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response,
        })
    }
}


//create order by card for user
export const createOrderCARD = (id, body) => async (dispatch) => {
    try {
        const response = await usePostData(`/api/v1/orders/checkout-session/${id}`, body);
        // console.log(response)
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: e.response,
        })
    }
}