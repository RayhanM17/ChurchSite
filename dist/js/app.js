// Map

mapboxgl.accessToken = 'pk.eyJ1IjoicmF5aGFubTE3IiwiYSI6ImNreGd6ZWZwdDFwNXMydW80NDFtZ2Q3ZTYifQ.kOuZDy24ylkR_kqPtTPcbA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.060982, 42.35725],
  zoom:18
});

// Modal

var modalWrap = null;
function showModal(verses) {
  if(modalWrap !== null){
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade" id="versesModal" tabindex="-1" aria-labelledby="versesModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="versesModalLabel">${verses.heading}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="list-group">
              <div class="list-group-item">
                <h5>${verses.verse1Name}</h5>
                <p>${verses.verse1Content}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.append(modalWrap);

  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}

var cards = document.querySelectorAll('.card');

cards.forEach(card => {card.addEventListener('click', e => {

  if(e.target.parentElement.classList.contains('v-love') || e.target.parentElement.parentElement.classList.contains('v-love') || e.target.parentElement.parentElement.parentElement.classList.contains('v-love')){
    const verses = {
      heading: 'Verses About Love',
      verse1Name: 'John 3:16 ESV',
      verse1Content: '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-peace')){
    const verses = {
      heading: 'Verses About Peace',
      verse1Name: 'John 3:16 ESV',
      verse1Content: '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-grace')){
    const verses = {
      heading: 'Verses About Grace',
      verse1Name: 'John 3:16 ESV',
      verse1Content: '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.parentElement.classList.contains('v-prom')){
    const verses = {
      heading: 'Verses About Promises',
      verse1Name: 'John 3:16 ESV',
      verse1Content: '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.parentElement.classList.contains('v-heal')){
    const verses = {
      heading: 'Verses About Healing',
      verse1Name: 'John 3:16 ESV',
      verse1Content: '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.parentElement.classList.contains('v-hope')){
    const verses = {
      heading: 'Verses About Hope',
      verse1Name: 'John 3:16 ESV',
      verse1Content: '“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    }
    showModal(verses);
  }
})});

// navbar
// $("#navbarSupportedContent a:not(.dropdown-toggle)").click(function() {
//  $("#navbarSupportedContent").collapse("hide");
// });

// var nav = document.getElementById('main-nav');
// var versesNavLink = document.querySelector('.v-link');
// versesNavLink.addEventListener('click', (e) => {
//   e.stopPropagation();
//   var bsOffCanvas = new bootstrap.Collapse(nav);
//   bsOffCanvas.toggle('false');
// })
