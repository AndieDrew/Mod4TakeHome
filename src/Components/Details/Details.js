import React from "react"
import './Details.css'
import { Link } from 'react-router-dom'

export default function Details({ foundArticle }) {

  return (
    <div>
      {!foundArticle &&
        <h1>Something went wrong!</h1>
      }
      {foundArticle && (
        <div>
          <div>
            <Link to={`/`}>
              <button>Home</button>
            </Link>
          </div>
          <div>
            <h1>{foundArticle.title}</h1>
            <h2>{foundArticle.byline}</h2>
            <p>Abstract: {foundArticle.abstract}</p>
            <div>
              <img className='multimedia' id={foundArticle.title} src={foundArticle.multimedia[0].url} alt={`Article multimedia`}/>
            </div>
            <a href={foundArticle.url}>Article Link</a>
            <p>Created: {foundArticle.created_date.split("T")[0]}</p>
            <p>Updated: {foundArticle.updated_date.split("T")[0]}</p>
          </div>
        </div>
      )}
    </div>
  )
}
