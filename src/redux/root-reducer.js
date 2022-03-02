import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import directoryReducer from './directory/directory.reducer'
import collectionsReducer from './collections/collections.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    directory: directoryReducer,
    collections: collectionsReducer,

    // shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)