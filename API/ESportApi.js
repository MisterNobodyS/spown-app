const API_TOKEN = "cb2d4740d7235cd9b8189151218c130a"

export function getFilmsFromApiWithSearchedText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.error(error))
}