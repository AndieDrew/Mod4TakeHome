import React, { useRef, useState } from 'react'

export default function Search( { filter } ) {
    const searchRef = useRef()
    const [icon, setIcon] = useState('🔍')

    const handleClick = (e) => {
        e.preventDefault()
        console.log(searchRef.current.value)
        filter(searchRef.current.value)
        if(searchRef.current.value && icon === '🔍') {
            changeIcon()
        } 
        if(!searchRef.current.value && icon === '🔙') {
            changeIcon()
        }
        clearInput()
    }

    const clearInput = () => {
        searchRef.current.value = ''
    }

    const changeIcon = () => {
        if( icon === '🔍' ) {
            setIcon('🔙') 
        } else {
            setIcon('🔍')
        }
    }

    return (
      <form>
        <input type="text" placeholder='Search' ref={searchRef} />
        <button onClick={ (e) => handleClick(e) } > {icon} </button>
      </form>
    )
}
