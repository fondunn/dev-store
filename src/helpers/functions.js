export const getUniqArrayItems = (arr, key) => {
  if(key === undefined) return arr
  const newArr = arr.map(item => {
    return item[key]
  })
  return newArr.filter((item, index) => newArr.indexOf(item) === index)
}

export const getArrayItems = (arr, key) => {
  if(key === undefined) return arr
  return arr.map(item => {
    return item[key]
  })
}

export const getValue = (arr, value) => {
  if (value === 'max') {
    return Math.max(...arr)
  }
  if (value === 'min') {
    return Math.min(...arr)
  }
  else {
    throw new Error('Enter max/min as a string')
  }
}