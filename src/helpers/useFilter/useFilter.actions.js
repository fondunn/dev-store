import FilterActionTypes from './useFilter.types'

export const filterCategories = (payload) => {
  return {
    type: FilterActionTypes.toggleCategory,
    payload
  }
}
export const filterBrands = (payload) => {
  return {
    type: FilterActionTypes.toggleBrand,
    payload
  }
}
export const resetFilter = () => {
  return {
    type: FilterActionTypes.resetFilter,
    payload
  }
}