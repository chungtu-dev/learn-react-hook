import React, { useState } from 'react'
import './SearchBar.css'
import { AiOutlineFileSearch } from 'react-icons/ai'

const SearchBar = ({setResult}) => {

  const [input, setInput] = useState("")
  const fetchData = (value) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((i) => {
        const result = i.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResult(result)
        // console.log(result);
      })
  }

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="input-wrapper">
      <AiOutlineFileSearch id='search-icon' />
      <input type="text" placeholder="Search..." value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default SearchBar