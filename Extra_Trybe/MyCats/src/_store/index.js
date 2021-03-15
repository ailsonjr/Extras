import { createStore } from 'redux';

import user from '../_store/reducers/user';

const store = createStore(user, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
