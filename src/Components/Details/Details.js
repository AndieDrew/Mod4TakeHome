import React from "react"
import './Details.css'

export default function Details({ foundArticle }) {

//   const [currentArticle, setCurrentArticle] = useState(null)

//   useEffect(() => {
//     const foundArticle = props.articles.find(
//       (article) =>
//         article.uri.split("/")[3] === window.location.href.split("/")[6]
//     );
//     setCurrentArticle(foundArticle);
//   }, [])

  return (
    <div>
      {!foundArticle &&
        <h1>Something went wrong!</h1>
      }
      {foundArticle && (
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
      )}
    </div>
  )
}
