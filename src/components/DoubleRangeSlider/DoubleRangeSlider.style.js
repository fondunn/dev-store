import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  background-color: #fff;
  padding: 10px 20px 10px 20px;

`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50px;


  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
  }
  input[type='range']::-moz-range-track {
    -webkit-appearance: none;
    height: 5px;
  }
  input[type='range']::-ms-range-track {
    -webkit-appearance: none;
    height: 5px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.1em;
    width: 1.1em;
    background-color: #3264fe;
    cursor: pointer;
    border-radius: 10px;
    pointer-events: auto;
    margin-top: -5px;
    pointer-events: auto;
  }
  input[type='range']:active::-webkit-slider-thumb {
    background-color: #fff;
    border: 3px solid #3264fe;
  }
`
export const SliderTrack = styled.div`
  width: 100%;
  height: 5px;
  background-color: #d5d5d5;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
`

export const Values = styled.div`
  {background-color: #3264fe;
  width: 50%;
  position: relative;
  margin: auto;
  padding: 5px 0;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  }
  &:before {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    border-top: 10px solid #3264fe;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    margin: auto;
    bottom: -10px;
    left: 0;
    right: 0;
  }
`