export function showCategory(state, e){
  console.log('showCategory function started!');
  if (state.categories.length === 0) {
    return { brands: [...state.brands], categories: [e] }
  }
  else if (!state.categories.includes(e)) {
    return { brands: [...state.brands], categories: [...state.categories, e] }
  } else {
    return {
      brands: [...state.brands], categories: state.categories.filter(item => {
        return item !== e
      })
    }
  }
}
export function showBrand(state, e){
  if (state.brands.length === 0) {
    return { categories: [...state.categories], brands: [e] }
  }
  else if (!state.brands.includes(e)) {
    return { categories: [...state.categories], brands: [...state.brands, e] }
  } else {
    return {
      categories: [...state.categories], brands: state.brands.filter(item => {
        return item !== e
      })
    }
  }
}
export function reset(state){
  return state
}