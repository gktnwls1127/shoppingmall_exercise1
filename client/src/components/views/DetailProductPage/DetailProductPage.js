import React, { useEffect } from 'react'
import axios from 'axios'
import { response } from 'express'

function DetailProductPAge(props) {

    const productId = props.match.params.productId

    useEffect(()=>{
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                if(response.data.success) {
                    
                } else {
                    alert('상세정보 가져오기를 실패했습니다.')
                }
            })
    },[])

    return (
        <div>
            
        </div>
    )
}

export default DetailProductPAge
