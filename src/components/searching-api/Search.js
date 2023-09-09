import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'
import { Title } from './styled-components/Container'

const Search = () => {

  const [result, setResult] = useState([])

  return (
    <div className="search-app">
      <div className="search-bar-contaner">
        <Title>
          searching
        </Title>
        <div>
          <SearchBar setResult={setResult} />
        </div>
        <div>
          <SearchResultList result={result}/>
        </div>
      </div>
    </div>
  )
}

export default Search