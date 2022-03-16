import {useReducer} from 'react'
import  filterReducer from './useFilter.reducer'
import { filterCategories, filterBrands, resetFilter } from './useFilter.actions'

function useFilter() {
  const [state, dispatch] = useReducer(filterReducer, {
    categories: [],
    brands: []
  })

  return {
    filters: state,
    toggleCategory: (payload) => dispatch(filterCategories(payload)),
    toggleBrand: (payload) => dispatch(filterBrands(payload)),
    resetFilter: () => dispatch(resetFilter())
  }
}

export default useFilter