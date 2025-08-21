import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Info() {

const {id, goodId} =useParams
const [searchParams, setSearchParams] = useSearchParams(); //쿼리스트링 따주는애

let page = searchParams.get('page');


  return (
    <div>
    <h1>{id}</h1>
    <h1>{goodId}</h1>
    <h2>{page}</h2>
    </div>
    
  )
}
