export function createMenuPage(){
    const content = document.getElementById('content');
    content.innerHTML = "";
    content.className = "";

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('sideContainers');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('sideContainers');

    content.appendChild(leftContainer);
    content.appendChild(rightContainer);

    const leftBoxSoup = document.createElement('div');
    const soupHeader = document.createElement('h1');
    soupHeader.textContent = "SOUP";
    leftBoxSoup.appendChild(soupHeader);
    leftBoxSoup.classList.add('menuBox');
    leftBoxSoup.classList.add('rightCorner');

    const leftSoupMenu = document.createElement('ul');
    leftSoupMenu.innerHTML = `
        <li>Chicken Noodle Soup - $5.99</li>
        <li>Tomato Basil Soup - $4.99</li>
        <li>Minestrone Soup - $4.99</li>
    `;
    leftBoxSoup.appendChild(leftSoupMenu);

    const leftBoxPasta = document.createElement('div');
    const pastaHeader = document.createElement('h1');
    pastaHeader.textContent = "PASTA";
    leftBoxPasta.appendChild(pastaHeader);
    leftBoxPasta.classList.add('menuBox');
    leftBoxPasta.classList.add('rightCorner');

    const leftPastaMenu = document.createElement('ul');
    leftPastaMenu.innerHTML = `
        <li>Spaghetti Bolognese - $12.99</li>
        <li>Fettuccine Alfredo - $11.99</li>
        <li>Penne Arrabiata - $10.99</li>
    `;
    leftBoxPasta.appendChild(leftPastaMenu);

    leftContainer.appendChild(leftBoxSoup);
    leftContainer.appendChild(leftBoxPasta);
    
    const rightBoxPizza = document.createElement('div');
    const pizzaHeader = document.createElement('h1');
    pizzaHeader.textContent = "PIZZA";
    rightBoxPizza.appendChild(pizzaHeader);
    rightBoxPizza.classList.add('menuBox');
    rightBoxPizza.classList.add('leftCorner');

    const rightPizzaMenu = document.createElement('ul');
    rightPizzaMenu.innerHTML = `
        <li>Margherita Pizza - $9.99</li>
        <li>Pepperoni Pizza - $10.99</li>
        <li>Hawaiian Pizza - $11.99</li>
    `;
    rightBoxPizza.appendChild(rightPizzaMenu);

    const rightBoxDrink = document.createElement('div');
    const drinkHeader = document.createElement('h1');
    drinkHeader.textContent = "DRINK";
    rightBoxDrink.appendChild(drinkHeader);
    rightBoxDrink.classList.add('menuBox');
    rightBoxDrink.classList.add('leftCorner');

    const rightDrinkMenu = document.createElement('ul');
    rightDrinkMenu.innerHTML = `
        <li>Soda - $2.49</li>
        <li>Water - $1.99</li>
        <li>Wine - $6.99</li>
    `;
    rightBoxDrink.appendChild(rightDrinkMenu);

    rightContainer.appendChild(rightBoxPizza);
    rightContainer.appendChild(rightBoxDrink);

    rightContainer.classList.add('rightSideContainers');
    leftContainer.classList.add('leftSideContainers');


    content.classList.add('menuPageContent');
}