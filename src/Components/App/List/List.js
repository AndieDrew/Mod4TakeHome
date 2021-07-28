import React from 'react'
import { Link } from 'react-router-dom'

export default function List( props ) {
    console.log('LIST THANG', props.articles)
    const listItems = props.articles.map((item, index) => {
        return (
         <li
           key={item.uri}
           className='listItem'
           id={item.url}>
            <Link to={`/${item.title}`} key={index}>
                {item.title}
            </Link>
         </li>
       )
     })

    return (
        <div>
            <h1>List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}
