import React, { useEffect, useState } from "react"

export default function Details(props) {
  const [currentArticle, setCurrentArticle] = useState(null)

  useEffect(() => {
    const foundArticle = props.articles.find(
      (article) =>
        article.uri.split("/")[3] === window.location.href.split("/")[6]
    );
    setCurrentArticle(foundArticle);
  }, [])

  return (
    <div>
      {!currentArticle &&
        <h1>Something went wrong!</h1>
      }
      {currentArticle && (
        <div>
          <h1>{currentArticle.title}</h1>
          <h2>{currentArticle.byline}</h2>
          <p>Abstract: {currentArticle.abstract}</p>
          <a href={currentArticle.url}>Article Link</a>
          <p>Created: {currentArticle.created_date.split("T")[0]}</p>
          <p>Updated: {currentArticle.updated_date.split("T")[0]}</p>
        </div>
      )}
    </div>
  )
}
