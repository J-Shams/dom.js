let box = document.querySelector('.box');

let names = ['Safiullo', 'Shams', 'Lutfullo'];
let jobs = ['15 age','17 age','17 age'];

for (let i = 0; i < 3; i++) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = 'https://yt3.ggpht.com/a/AATXAJyk2VmL7NqghohEuPMG3VqdQrP66-UTq98FIQ=s900-c-k-c0xffffffff-no-rj-mo';
    img.style.width = "100%";
    img.style.height = "300px";


    let name = document.createElement('p');
    name.textContent = names[i]; 

    let job = document.createElement('p');
    job.innerHTML = jobs[i];

    card.append(img);
    card.append(name, job); 
    box.append(card);
}

let cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 0 30px rgba(33,33,33,.2)';
    });
    card.addEventListener('mouseout', function() {
        this.style.boxShadow = ''; 
    });
});
