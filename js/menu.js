let recoiesmenu = []
let recoipesmenu2 = []
let recoipesmenu3 = []
var countryLinks = document.querySelectorAll('.list-group-item')

for (var i = 0; i < countryLinks.length; i++) {
  countryLinks[i].addEventListener('click', function (eventInfo) {
    var countryCode = eventInfo.target.getAttribute('countryCode')
    getData(countryCode)
  })
}
// =======================================API==================================
async function getData(countryCode) {
  let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${countryCode}`);
  let data = await response.json()
  recoiesmenu = data.recipes
  recoiesmenu = data.recipes.slice(0, 9);
  displaymenu()
  console.log(data.recipes)
}
getData()
function displaymenu() {
  let menu = " "
  recoiesmenu.forEach((recipes) => {
    menu += `
          <div class="col-md-4">
      <div class="card">
        <img src=" ${recipes.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${recipes.title}</h5>
         
        </div>
      </div>
     </div>
        `
  })
  document.getElementById('MainDISH').innerHTML = menu
}

// ---------------------------------Starteers API---------------------------------
async function getstarters() {
  let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=tacos`)
  let data = await response.json()
  recoiesmenu = data.recipes
  recoiesmenu = data.recipes.slice(1, 7);
  displaystarter()
  console.log(data.recipes)
}

getstarters()

function displaystarter() {
  let menu = " "
  recoiesmenu.forEach((recipes) => {
    menu += `
          <div class="col-md-4">
      <div class="card">
        <img src=" ${recipes.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${recipes.title}</h5>
        </div>
      </div>
     </div>
        `
  })
  document.getElementById('Starters').innerHTML = menu
}

// ----------------------------------Deserts Api---------------------------------
async function getdesserts() {
  let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=cake`)
  let data = await response.json()
  recoipesmenu3 = data.recipes
  recoipesmenu3 = data.recipes.slice(0, 6);
  displaydesserts()
  console.log(data.recipes)
}
getdesserts()
function displaydesserts() {
  let menu = " "
  recoipesmenu3.forEach((recipes) => {
    menu += `
          <div class="col-md-4">
      <div class="card">
        <img src=" ${recipes.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${recipes.title}</h5>
        </div>
      </div>
     </div>
        `
  })
  document.getElementById('desserts').innerHTML = menu
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


