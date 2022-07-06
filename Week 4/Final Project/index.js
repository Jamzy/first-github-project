const filmListEl = document.querySelector('.films--list')
const spinnerWrapper = document.querySelector('.spinner__wrapper')

async function main(event) {
    spinnerWrapper.classList += ' films--loading'
    
    setTimeout(() => {
        
    }, 2000);
    const search = event.target.value
    const films = await fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=411ac4a7&s=${search}`)


    const filmsData = await films.json()
    filmListEl.innerHTML = filmsData.Search.slice(0, 9).map(film => filmHTML(film)).join('')
    spinnerWrapper.classList.remove('films--loading')

}



function filmHTML(film) {
    return `<div class="film--card">
    <img src="${film.Poster}" alt="" class="film--img">
    <h3 class="film--title">${film.Title}</h3>
    <h4 class="film--year"><i class="fa-solid fa-calendar-days"></i>${film.Year}</h4>
</div>`
  }