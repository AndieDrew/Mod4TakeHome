export const getArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2nkaf71wIvRqwjKb8y8gaCCl1qzcnna4')
    .then(response => response.json())
  }
