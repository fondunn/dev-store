import React, { useState, useRef } from 'react'
import { Wrapper, Container, SliderTrack, Values } from './DoubleRangeSlider.style'

function DoubleRangeSlider({ min, max, setMinVal, setMaxVal, minVal, maxVal, minValRef, maxValRef, setSelectedPrice }) {


  // const [minVal, setMinVal] = useState(min)
  // const [maxVal, setMaxVal] = useState(max)
  // const minValRef = useRef(null)
  // const maxValRef = useRef(null)
  return (
    <Wrapper>
    <Values>
      <span id='range1'>{minVal}</span>
      <span> - </span>
      <span id='range2'>{maxVal}</span>
    </Values>
      <Container>
        <SliderTrack />
        <input 
          type="range" 
          ref={minValRef}
          value={minVal} 
          min={min}
          max={max}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1)
            setMinVal(value)
            setSelectedPrice([value, maxVal])
            event.target.value = value.toString()
          }}
        />
        <input 
          type="range" 
          ref={maxValRef}
          value={maxVal} 
          min={min}
          max={max}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1)
            setMaxVal(value)
            setSelectedPrice([minVal, value])
            event.target.value = value.toString()
          }}
        />
      </Container>
    </Wrapper>
  )
}

export default DoubleRangeSlider