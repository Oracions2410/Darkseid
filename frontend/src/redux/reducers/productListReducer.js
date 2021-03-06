import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../../constants/productContants'

export function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, payload: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, payload: action.payload }
        default:
            return state
    }
}