

// NUOVO ESERCIZIO

//_______________________________________________________________________________________________________________________________________

// creo un array dei membri

let team = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        image: 'our-team-img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        image: 'our-team-img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        image: 'our team-img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        image: 'our team-img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        image: 'our team-img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        image: 'our team-img/barbara-ramos-graphic-designer.jpg'
    }
]


const cardContainerEl = document.getElementById('card-container');

for(let i = 0; i < team.length; i++) {

    
    let newCardEl = document.createElement('div');
    newCardEl.classList.add('card');
    cardContainerEl.append(newCardEl);

    let teamMember = team[i];




    let nameEl = document.createElement('div');
    nameEl.classList.add('name');
    nameEl.innerText = teamMember.name;

    let positionEl = document.createElement('div');
    positionEl.classList.add('position');
    positionEl.innerText = teamMember.position;

    let imageEl = document.createElement('img');
    imageEl.classList.add('image');
    imageEl.src = 'img/' + teamMember.image;


    newCardEl.append(imageEl);
    newCardEl.append(nameEl);
    newCardEl.append(positionEl);
}

