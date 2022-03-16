import { showCategory, showBrand, reset } from './useFilter.utils'

const INITIAL_STATE = {
  brands: [], 
  categories: []
}

const filterReducer = (state = INITIAL_STATE, action) => {
  console.log('reducer start working!')
  switch (action.type) {
    case 'toggleCategory':
      return showCategory(state, action.payload)
    case 'toggleBrand':
      return showBrand(state, action.payload)
    case 'resetFilter':
      return reset(state)
    default :
    return state
  }
}

export default filterReducer