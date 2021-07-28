import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import './App.css'
import { getArticles } from "../../Util/api-calls"
import Search from '../Search/Search'
import List from '../List/List'
import Details from '../Details/Details'

export default function App() {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getArticles()
    .then(data => {
      setArticles(data.results)
    })
    .catch(error => setError(error))
  }, [])

  const filterArticles = (input) => {
    setArticles(articles.filter(article => article.title.toLowerCase().includes(input.toLowerCase())))
    
  }

  return (
    <main>
    {error && <h1>Something went wrong!</h1>}
      <Switch>
        <Route
          exact path="/"
          render={() => (
            !error &&
              <div>
                <Search filter={filterArticles} />
                <List articles={articles} />
              </div>
            )}
          />

        <Route path={`/:uri`}
              render={() => (
                  <Details articles={articles}/>
                )}
        />
      </Switch>
    </main>
  )
}
