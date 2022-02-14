// Map

mapboxgl.accessToken = 'pk.eyJ1IjoicmF5aGFubTE3IiwiYSI6ImNreGd6ZWZwdDFwNXMydW80NDFtZ2Q3ZTYifQ.kOuZDy24ylkR_kqPtTPcbA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-80.24514899994466, 25.862621647436086],
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
              <div class="list-group-item">
                <h5>${verses.verse2Name}</h5>
                <p>${verses.verse2Content}</p>
              </div>
              <div class="list-group-item">
                <h5>${verses.verse3Name}</h5>
                <p>${verses.verse3Content}</p>
              </div>
              <div class="list-group-item">
                <h5>${verses.verse4Name}</h5>
                <p>${verses.verse4Content}</p>
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
      verse1Name: 'Romanos 5:8',
      verse1Content: 'Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murio por nosotros.',
      verse2Name: '1 Juan 3:18',
      verse2Content: 'Hijitos mios, no amenamos de palabra ni de lengua, sino de hecho y en verdad.',
      verse3Name: 'Proverbios 10-12',
      verse3Content: 'El odio despierta rencillas; Pero el amor cubrirá todas las faltas.',
      verse4Name: '1 Juan 3:1',
      verse4Content: 'Mirad cuál amor nos ha dado el Padre, para que seamos llamados hijos de Dios; por esto el mundo no nos conoce, porque no le conoció a él.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-peace')){
    const verses = {
      heading: 'Verses About Peace',
      verse1Name: 'Salmos 4:8',
      verse1Content: 'En paz me acostaré, y asimismo dormiré; Porque solo tú, Jehová, me haces vivir confiado.',
      verse2Name: 'Juan 16:33',
      verse2Content: 'Estas cosas os he hablado para que en mí tengáis paz. En el mundo tendréis aflicción; pero confiad, yo he vencido al mundo.',
      verse3Name: 'Isaias 53:4-6',
      verse3Content: '4 Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. 5 Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados. 6 Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros.',
      verse4Name: '',
      verse4Content: '',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-grace')){
    const verses = {
      heading: 'Verses About Grace',
      verse1Name: 'Efesios 2:8-9',
      verse1Content: '8 Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; 9 no por obras, para que nadie se gloríe.',
      verse2Name: '1 Corintios 15:10',
      verse2Content: 'Pero por la gracia de Dios soy lo que soy; y su gracia no ha sido en vano para conmigo, antes he trabajado más que todos ellos; pero no yo, sino la gracia de Dios conmigo.',
      verse3Name: '2 Corintios 12:9-10',
      verse3Content: '9 Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo. 10 Por lo cual, por amor a Cristo me gozo en las debilidades, en afrentas, en necesidades, en persecuciones, en angustias; porque cuando soy débil, entonces soy fuerte.',
      verse4Name: '',
      verse4Content: '',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.parentElement.classList.contains('v-prom')){
    const verses = {
      heading: 'Verses About Promises',
      verse1Name: 'Josue 1:9',
      verse1Content: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.',
      verse2Name: 'Juan 10:27-29',
      verse2Content: '27 Mis ovejas oyen mi voz, y yo las conozco, y me siguen, 28 y yo les doy vida eterna; y no perecerán jamás, ni nadie las arrebatará de mi mano. 29 Mi Padre que me las dio, es mayor que todos, y nadie las puede arrebatar de la mano de mi Padre',
      verse3Name: 'Mateo 7:7-11',
      verse3Content: '7 Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. 8 Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrirá. 9 ¿Qué hombre hay de vosotros, que si su hijo le pide pan, le dará una piedra? 10 ¿O si le pide un pescado, le dará una serpiente? 11 Pues si vosotros, siendo malos, sabéis dar buenas dádivas a vuestros hijos, ¿cuánto más vuestro Padre que está en los cielos dará buenas cosas a los que le pidan?',
      verse4Name: '',
      verse4Content: '',  
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.parentElement.classList.contains('v-heal')){
    const verses = {
      heading: 'Verses About Healing',
      verse1Name: 'Isaiah 53:5',
      verse1Content: 'Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.',
      verse2Name: 'Juan 14:27',
      verse2Content: 'La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.',
      verse3Name: 'Salmos 30:2',
      verse3Content: 'Jehová Dios mío, A ti clamé, y me sanaste.',
      verse4Name: 'Proverbios 4:20-24',
      verse4Content: 'Hijo mío, está atento a mis palabras; Inclina tu oído a mis razones. 21 No se aparten de tus ojos; Guárdalas en medio de tu corazón; 22 Porque son vida a los que las hallan, Y medicina a todo su cuerpo. 23 Sobre toda cosa guardada, guarda tu corazón; Porque de él mana la vida. 24 Aparta de ti la perversidad de la boca, Y aleja de ti la iniquidad de los labios.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.parentElement.classList.contains('v-hope')){
    const verses = {
      heading: 'Verses About Hope',
      verse1Name: '1 Tesalonicenses 1:3',
      verse1Content: 'acordándonos sin cesar delante del Dios y Padre nuestro de la obra de vuestra fe, del trabajo de vuestro amor y de vuestra constancia en la esperanza en nuestro Señor Jesucristo',
      verse2Name: 'Isaias 40:31',
      verse2Content: 'pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán',
      verse3Name: 'Salmos 33:18',
      verse3Content: 'He aquí el ojo de Jehová sobre los que le temen, Sobre los que esperan en su misericordia,',
      verse4Name: '',
      verse4Content: '',
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
