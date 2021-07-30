import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

export default function List( { articles } ) {

    const listItems = articles.map((item, index) => {
        const path = item.uri.split('/').pop()
        return (
         <li
           key={item.uri}
           className='listItem'
           id={item.url}>
            <Link  to={`/${path}`} key={index}>
                {item.title}
            </Link>
         </li>
       )
     })

    return (
        <div>
            <h2>Top Articles</h2>
            <h3>Courtesy of The New York Times</h3>
              <div className='list-container'>
                <ul>
                    {listItems}
                </ul>
              </div>
        </div>
    )
}
