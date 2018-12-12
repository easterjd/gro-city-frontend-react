import authReducer from './auth';
import boardsReducer from './boards';
import plantsReducer from './plants';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    authReducer,
    boardsReducer,
    plantsReducer
});

export default rootReducer;