import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

import { goods } from 'data/goods'



function DetailPage() {

    const navigate = useNavigate()
    const { detailId } = useParams()
    console.log('detailid: ', detailId);
    console.log(window.location.pathname.split('/'));

    function findItem(arr) {
        return arr.find(item => {
            return item._id = detailId
        })
    }
    const item = findItem(goods)


    const { name, price, imgUrl, category } = item
  return (
    <div>
        <p>link: <Link to={`/shop/${category}`}>{category}</Link> / {name}</p>
        <h1>{name}</h1>
        <h3>{price} $</h3>
        <img src={imgUrl} alt="" />

    </div>
  )
}

export default DetailPage