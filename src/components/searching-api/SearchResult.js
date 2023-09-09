import React from 'react'

const SearchResult = ({i}) => {
  return (
    <div
    onClick={(e)=>alert(`You chose: ${i.name}`)}
    >{i.name}</div>
  )
}

export default SearchResult