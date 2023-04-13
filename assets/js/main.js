/*MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede */

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

console.log(team);

for( let i = 0; i < team.length; i++ ){

  console.log( team[i] );

  let singoloOggetto = team[i]

  document.querySelector(".row").innerHTML += `
      <div class="col-4 mb-3 d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
        <img src="assets/img/${singoloOggetto.image}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${singoloOggetto.name}</h5>
          <p class="card-text">${singoloOggetto.role}</p>
        </div>
      </div>  
      </div>
`

//------------------------Milestone 2---------------------//
  //  for( let key in singoloOggetto ){
  //    console.log(key);
  //    console.log( singoloOggetto[key] );
  //    document.querySelector(".row").innerHTML += `<p>${singoloOggetto[key]}</p>`
  //  }
}