export function createHomepage(){
    const content = document.getElementById('content');
    content.innerHTML = "";
    content.className = "";

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our ';

    const nameHeadline = document.createElement('span');
    nameHeadline.textContent = 'Trattoria';
    nameHeadline.classList.add('name-highlight');

    headline.appendChild(nameHeadline);
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Premium and authentic Italian cuisine';
    description.style.color = "white";

    content.appendChild(description);

    const bookTableBtn = document.createElement('button');
    bookTableBtn.textContent = 'Book table';

    content.appendChild(bookTableBtn);

    content.classList.add('homePageContent');
}