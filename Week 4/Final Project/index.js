const filmListEl = document.querySelector('.films--list')

async function main(event) {
    const search = event.target.value
    const films = await fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=411ac4a7&s=${search}`)
    const filmsData = await films.json()
    filmListEl.innerHTML = filmsData.Search.slice(0, 6).map(film => filmHTML(film)).join('')

}



function filmHTML(film) {
    return `<div class="film--card">
    <img src="${film.Poster}" alt="" class="film--img">
    <h3 class="film--title">${film.Title}</h3>
    <h4 class="film--year"><i class="fa-solid fa-calendar-days"></i>${film.Year}</h4>
</div>`
  }