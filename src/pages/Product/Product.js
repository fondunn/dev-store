import React from 'react'

function Product({ data }) {
  return (
    <div>
    <h1>Product detail page</h1>
    <p>{data} and {window.location.href}</p>
    </div>
  )
}

export default Product