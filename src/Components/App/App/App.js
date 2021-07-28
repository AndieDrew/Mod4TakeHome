import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import './App.css'
import { getArticles } from "../../Util/api-calls"
import List from './List/List'

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

  console.log('second', articles)

  return (
    <div>
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <div>
              <List articles={articles}/>
            </div>
            )}
          />

        // Route Details view
        
        </Switch>
    </div>
  )
}
