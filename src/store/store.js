import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { logger } from "redux-logger";

const initState = {
    search: ''
}

const doSearch = (state = initState, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return { ...state, search: action.payload };
        default:
            return state;
    }
}

const store = createStore(doSearch, applyMiddleware(logger));

export default store;