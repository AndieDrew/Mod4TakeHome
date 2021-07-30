import React, { useState, useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import './App.css'
import { getArticles } from "../../Util/api-calls"
import Search from '../Search/Search'
import List from '../List/List'
import Details from '../Details/Details'

export default function App() {
  const [articles, setArticles] = useState([])
  const [previousArticles, setPrevArticles] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
        getArticles()
      .then(data => {
        setArticles(data.results)
        setPrevArticles(data.results)
      })
      .catch(error => setError(error))
  }, [])

  const filterArticles = (input) => {
    if(input) {
      setArticles(articles.filter(article => article.title.toLowerCase().includes(input.toLowerCase())))
    }  else  {
      setArticles(previousArticles)
    }
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

        <Route exact path={`/:uri`}
              render={({ match }) => {
                  const uri = match.params.uri
                  const foundArticle = articles.find(article =>
                      article.uri.split('/').pop() === uri
                      )
                      if(foundArticle) {
                  return <Details foundArticle={foundArticle}/>
                      }
                  return <Redirect to='/' />
                }}
        />
      </Switch>
    </main>
  )
}
