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
      heading: 'Versos Sobre el Amor',
      verse1Name: 'Romanos 5:8',
      verse1Content: 'Mas Dios muestra su amor para con nosotros, en que siendo a??n pecadores, Cristo murio por nosotros.',
      verse2Name: '1 Juan 3:18',
      verse2Content: 'Hijitos mios, no amenamos de palabra ni de lengua, sino de hecho y en verdad.',
      verse3Name: 'Proverbios 10-12',
      verse3Content: 'El odio despierta rencillas; Pero el amor cubrir?? todas las faltas.',
      verse4Name: '1 Juan 3:1',
      verse4Content: 'Mirad cu??l amor nos ha dado el Padre, para que seamos llamados hijos de Dios; por esto el mundo no nos conoce, porque no le conoci?? a ??l.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.classList.contains('v-peace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-peace')){
    const verses = {
      heading: 'Versos Sobre La Paz',
      verse1Name: 'Salmos 4:8',
      verse1Content: 'En paz me acostar??, y asimismo dormir??; Porque solo t??, Jehov??, me haces vivir confiado.',
      verse2Name: 'Juan 16:33',
      verse2Content: 'Estas cosas os he hablado para que en m?? teng??is paz. En el mundo tendr??is aflicci??n; pero confiad, yo he vencido al mundo.',
      verse3Name: 'Isaias 53:4-6',
      verse3Content: '4 Ciertamente llev?? ??l nuestras enfermedades, y sufri?? nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. 5 Mas ??l herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre ??l, y por su llaga fuimos nosotros curados. 6 Todos nosotros nos descarriamos como ovejas, cada cual se apart?? por su camino; mas Jehov?? carg?? en ??l el pecado de todos nosotros.',
      verse4Name: '',
      verse4Content: '',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.classList.contains('v-grace') || e.target.parentElement.parentElement.parentElement.classList.contains('v-grace')){
    const verses = {
      heading: 'Vers??culos Sobre La Gracia',
      verse1Name: 'Efesios 2:8-9',
      verse1Content: '8 Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; 9 no por obras, para que nadie se glor??e.',
      verse2Name: '1 Corintios 15:10',
      verse2Content: 'Pero por la gracia de Dios soy lo que soy; y su gracia no ha sido en vano para conmigo, antes he trabajado m??s que todos ellos; pero no yo, sino la gracia de Dios conmigo.',
      verse3Name: '2 Corintios 12:9-10',
      verse3Content: '9 Y me ha dicho: B??state mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriar?? m??s bien en mis debilidades, para que repose sobre m?? el poder de Cristo. 10 Por lo cual, por amor a Cristo me gozo en las debilidades, en afrentas, en necesidades, en persecuciones, en angustias; porque cuando soy d??bil, entonces soy fuerte.',
      verse4Name: '',
      verse4Content: '',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.classList.contains('v-prom') || e.target.parentElement.parentElement.parentElement.classList.contains('v-prom')){
    const verses = {
      heading: 'Vers??culos Sobre Promesas',
      verse1Name: 'Josue 1:9',
      verse1Content: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehov?? tu Dios estar?? contigo en dondequiera que vayas.',
      verse2Name: 'Juan 10:27-29',
      verse2Content: '27 Mis ovejas oyen mi voz, y yo las conozco, y me siguen, 28 y yo les doy vida eterna; y no perecer??n jam??s, ni nadie las arrebatar?? de mi mano. 29 Mi Padre que me las dio, es mayor que todos, y nadie las puede arrebatar de la mano de mi Padre',
      verse3Name: 'Mateo 7:7-11',
      verse3Content: '7 Pedid, y se os dar??; buscad, y hallar??is; llamad, y se os abrir??. 8 Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrir??. 9 ??Qu?? hombre hay de vosotros, que si su hijo le pide pan, le dar?? una piedra? 10 ??O si le pide un pescado, le dar?? una serpiente? 11 Pues si vosotros, siendo malos, sab??is dar buenas d??divas a vuestros hijos, ??cu??nto m??s vuestro Padre que est?? en los cielos dar?? buenas cosas a los que le pidan?',
      verse4Name: '',
      verse4Content: '',  
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.classList.contains('v-heal') || e.target.parentElement.parentElement.parentElement.classList.contains('v-heal')){
    const verses = {
      heading: 'Vers??culos Sobre La Sanaci??n',
      verse1Name: 'Isaiah 53:5',
      verse1Content: 'Mas ??l herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre ??l, y por su llaga fuimos nosotros curados.',
      verse2Name: 'Juan 14:27',
      verse2Content: 'La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro coraz??n, ni tenga miedo.',
      verse3Name: 'Salmos 30:2',
      verse3Content: 'Jehov?? Dios m??o, A ti clam??, y me sanaste.',
      verse4Name: 'Proverbios 4:20-24',
      verse4Content: 'Hijo m??o, est?? atento a mis palabras; Inclina tu o??do a mis razones. 21 No se aparten de tus ojos; Gu??rdalas en medio de tu coraz??n; 22 Porque son vida a los que las hallan, Y medicina a todo su cuerpo. 23 Sobre toda cosa guardada, guarda tu coraz??n; Porque de ??l mana la vida. 24 Aparta de ti la perversidad de la boca, Y aleja de ti la iniquidad de los labios.',
    }
    showModal(verses);
  }

  if(e.target.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.classList.contains('v-hope') || e.target.parentElement.parentElement.parentElement.classList.contains('v-hope')){
    const verses = {
      heading: 'Versos Sobre La Esperanza',
      verse1Name: '1 Tesalonicenses 1:3',
      verse1Content: 'acord??ndonos sin cesar delante del Dios y Padre nuestro de la obra de vuestra fe, del trabajo de vuestro amor y de vuestra constancia en la esperanza en nuestro Se??or Jesucristo',
      verse2Name: 'Isaias 40:31',
      verse2Content: 'pero los que esperan a Jehov?? tendr??n nuevas fuerzas; levantar??n alas como las ??guilas; correr??n, y no se cansar??n; caminar??n, y no se fatigar??n',
      verse3Name: 'Salmos 33:18',
      verse3Content: 'He aqu?? el ojo de Jehov?? sobre los que le temen, Sobre los que esperan en su misericordia,',
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
