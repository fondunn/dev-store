import React, { useState, useEffect, useRef } from 'react'

import { Container, Content } from './ShopPage.style'

import Sidebar from 'components/Sidebar/Sidebar'
import Filters from 'components/Filters/Filters'
import FiltersCheckbox from 'components/FiltersCheckbox/FiltersCheckbox'
import CheckboxHandler from 'components/CheckboxHandler/CheckboxHandler'
import CollectionPreview from 'components/CollectionPreview/CollectionPreview'
import CollectionsList from 'components/CollectionsList/CollectionsList'

import CollectionItem from 'components/CollectionItem/CollectionItem'

import { getAllPrices } from 'helpers/getAllPrices'
import { goods } from 'data/goods'
import { getUniqArrayItems, getArrayItems, getValue } from 'helpers/functions'
import DoubleRangeSlider from 'components/DoubleRangeSlider/DoubleRangeSlider'
import { capitalize } from 'helpers/capitalizeFirst'
const prices = getAllPrices(goods)
const uniqCategories = getUniqArrayItems(goods, 'category')
const categoriesLength = uniqCategories.length
const uniqBrands = getUniqArrayItems(goods, 'brand')
const min = getValue(prices, 'min')
const max = getValue(prices, 'max')

function ShopPage() {
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)
  const [filters, setFilters] = useState({ brands: [], categories: [] })
  const [selectedPrice, setSelectedPrice] = useState([minValue, maxValue])
  
  const [checkedState, setCheckedState] = useState(
    new Array(uniqCategories.length + uniqBrands.length).fill(false)
  )
  console.log('checkboxes state: ',checkedState);


  const [collection, setCollection] = useState(goods)

  const minValueRef = useRef(null)
  const maxValueRef = useRef(null)
  const isChecked = useRef(false)

  const showCategory = (e) => {
    if (filters.categories.length === 0) {
      setFilters({ brands: [...filters.brands], categories: [e] })
    }
    else if (!filters.categories.includes(e)) {
      setFilters({ brands: [...filters.brands], categories: [...filters.categories, e] })
    } else {
      setFilters({
        brands: [...filters.brands], categories: filters.categories.filter(item => {
          return item !== e
        })
      })
    }
  }
  const showBrand = (e) => {
    if (filters.brands.length === 0) {
      setFilters({ categories: [...filters.categories], brands: [e] })
    }
    else if (!filters.brands.includes(e)) {
      setFilters({ categories: [...filters.categories], brands: [...filters.brands, e] })
    } else {
      setFilters({
        categories: [...filters.categories], brands: filters.brands.filter(item => {
          return item !== e
        })
      })
    }
  }

  const applyFilters = () => {
    let updatedList=goods
    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]
    const testArr = []
    if(filters.brands.length > 0) {
      updatedList = updatedList.filter(item => {
        return filters.brands.includes(item.brand)
      })
    }
    if(filters.categories.length > 0) {
      updatedList = updatedList.filter(item => {
        return filters.categories.includes(item.category)
      })
    }

    updatedList = updatedList.filter(item => {
      return item.price>=minPrice && item.price<=maxPrice
    })
    setCollection(updatedList)
  }

  const resetFilters = () => {
    collection
    setMinValue(min)
    setMaxValue(max)
    setFilters({ brands: [], categories: [] })
    setSelectedPrice([minValue, maxValue])
    setCheckedState(
      new Array(uniqCategories.length + uniqBrands.length).fill(false)
    )
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item
    })

    setCheckedState(updatedCheckedState)
  }

  useEffect(() => {
    applyFilters()
  }, [filters, selectedPrice])
  return (
    <Container>
      <Sidebar>
        <Filters>
          <CheckboxHandler>
          <h3>Categories</h3>
          {
            uniqCategories.map((item, index) => {
              return (
                <FiltersCheckbox>
                  <input 
                    type="checkbox" 
                    onChange={() => {showCategory(item); handleOnChange(index)}}
                    checked={checkedState[index]}
                  /> <h3>{capitalize(item)}</h3>
                </FiltersCheckbox>
              )
            })
          }
          </CheckboxHandler>
          <CheckboxHandler>
          <h3>Brands</h3>
          {
            uniqBrands.map((item, index) => {
              return (
                <FiltersCheckbox>
                  <input 
                    type="checkbox" 
                    onChange={() => {showBrand(item); handleOnChange(index+categoriesLength)}} 
                    checked={checkedState[index+categoriesLength]}
                  /> 
                  <h3>{item}</h3>
                </FiltersCheckbox>
              )
            })
          }
          </CheckboxHandler>
          
          <h3>Price</h3>
          <DoubleRangeSlider min={min} max={max} setMinVal={setMinValue} setMaxVal={setMaxValue} minValRef={minValueRef} maxValRef={maxValueRef} minVal={minValue} maxVal={maxValue} setSelectedPrice={setSelectedPrice}/>

          <button onClick={() => resetFilters()}>Reset Filters</button>

        </Filters>
      </Sidebar>
      <Content>
        <CollectionPreview>
          
          {
            collection.map(item => {
              return (
                
                <CollectionItem key={item.name} data={item} category={item.category}/>
              )
            })
          }

        </CollectionPreview>
      </Content>
    </Container>
  )
}

export default ShopPage