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
function showModal() {
  if(modalWrap !== null){
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
    <div class="modal fade" id="versesModal" tabindex="-1" aria-labelledby="versesModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="versesModalLabel">Default title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="list-group">
              <div class="list-group-item">
                ...
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
    showModal();
  }

  if(e.target.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-peace')){
    showModal();
  }

  if(e.target.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-grace')){
    showModal();
  }

  if(e.target.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.parentElement.classList.contains('v-prom')){
    showModal();
  }

  if(e.target.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.parentElement.classList.contains('v-heal')){
    showModal();
  }

  if(e.target.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.parentElement.classList.contains('v-hope')){
    showModal();
  }
})});