import React, { useRef } from 'react'

export default function Search( props ) {
    const searchRef = useRef()

    const handleClick = (e) => {
        e.preventDefault()
        props.filter(searchRef.current.value)
        clearInput()
    }

    const clearInput = () => {
        searchRef.current.value = ''
    }

    return (
      <form>
        <input type="text" placeholder='Search' ref={searchRef} />
        <button onClick={ (e) => handleClick(e) } > 🔍 </button>
      </form>
    )
}
