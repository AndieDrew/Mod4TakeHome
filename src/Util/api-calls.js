export const getArticles = () => {
  const apiKey = process.env.REACT_APP_API_KEY
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    .then(response => response.json())
  }
