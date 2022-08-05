import data from './data.json' assert {type: 'json'};
let chart = document.getElementById('chart');

data.map(item => {
    let barContainer = document.createElement('div');
    barContainer.classList.add('bar__container');
    let day = document.createElement('p');
    day.innerHTML = item.day;
    day.style.marginTop = '12px';
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${Math.floor(item.amount * 3)}px`;
    bar.style.backgroundColor = (item.day === 'wed') ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
    let priceTag = document.createElement('div');
    priceTag.classList.add('price__tag');
    priceTag.innerHTML = `$${item.amount}`;
    bar.addEventListener('mouseover', () => {
        priceTag.style.visibility = 'visible';
    });
    bar.addEventListener('mouseout', () => {	
        priceTag.style.visibility = 'hidden';
    });
    barContainer.appendChild(priceTag);
    barContainer.appendChild(bar);
    barContainer.appendChild(day);
    chart.appendChild(barContainer);
});


