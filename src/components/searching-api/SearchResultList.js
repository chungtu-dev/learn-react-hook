import React from 'react'
import './SearchResultList.css'
import SearchResult from './SearchResult'

const SearchResultList = ({result}) => {
  return (
    <div className='result-list'>
        {
            result.map((i, id)=>{
                return <SearchResult key={id} i={i}/>
            })
        }
    </div>
  )
}

export default SearchResultList