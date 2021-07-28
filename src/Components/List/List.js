import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

export default function List( props ) {

    const listItems = props.articles.map((item, index) => {
        return (
         <li
           key={item.uri}
           className='listItem'
           id={item.url}>
            <Link  to={`/${item.uri}`} key={index}>
                {item.title}
            </Link>
         </li>
       )
     })

    return (
        <div>
            <h1>List</h1>
              <div className='list-container'>
                <ul>
                    {listItems}
                </ul>
              </div>
        </div>
    )
}
