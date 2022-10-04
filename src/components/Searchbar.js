import React, { useState } from 'react'
import {RiSearchLine} from 'react-icons/ri'


function Searchbar() {

  const [focused, setfocused] = useState(true);

  return (
    <div className='search' onFocus={() => setfocused(false)} onBlur={() => setfocused(true)}>
      <RiSearchLine style={focused?{display: 'block'} : {display: 'none'}} className='search-icon' />
      <input className='search-input' placeholder='Search'></input>
    </div>
  )
}

export default Searchbar