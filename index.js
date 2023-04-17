// Import stylesheets
import './style.css';

let covidBtn = document.querySelector('.get-btn');

covidBtn.addEventListener('click', () => {
  // fetch request to api

  fetch('https://corona.lmao.ninja/v2/countries')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let results = document.querySelector('.info-display');

      let template = `<h2 class='mt-4'> Covid cases <h2>`;

      data.forEach((element) => {
        template += `
            <ul class='list-group'>
                <li class='list-group-item'>Country:  ${element.country} </li>
                <li class='list-group-item'>Cases: ${element.cases} </li>
                <li class='list-group-item'>Deaths: </> ${element.deaths} </li>
            </ul>
            `;
      });
      results.innerHTML = template;
    });
});
