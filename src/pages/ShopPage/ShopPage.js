import React, { useState, useEffect, useRef } from 'react'
import useFilter from 'helpers/useFilter/useFilter'

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
  const {filters, toggleCategory, toggleBrand, resetFilter} = useFilter()
  
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)
  const [selectedPrice, setSelectedPrice] = useState([minValue, maxValue])
  
  const [checkedState, setCheckedState] = useState(
    new Array(uniqCategories.length + uniqBrands.length).fill(false)
  )

  const [collection, setCollection] = useState(goods)
  const minValueRef = useRef(null)
  const maxValueRef = useRef(null)
 
  const applyFilters = () => {
    let updatedList=goods
    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]
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
    resetFilter()
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
                    onChange={() => {handleOnChange(index); toggleCategory(item)}}
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
                    onChange={() => {handleOnChange(index+categoriesLength); toggleBrand(item)}} 
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