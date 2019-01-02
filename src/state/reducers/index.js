import auth from './auth';
import boardsReducer from './boards';
import plantsReducer from './plants';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth,
    boardsReducer,
    plantsReducer
});

export default rootReducer;