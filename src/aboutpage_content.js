export function createAboutPage(){
    const content = document.getElementById('content');
    content.innerHTML = "";
    content.className = "";

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = "About Us";

    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = "Welcome to Trattoria Italiana, where passion for authentic Italian cuisine meets unparalleled hospitality. Nestled in the heart of [Your City], our restaurant offers a culinary journey to Italy's diverse regions, bringing you the finest flavors and freshest ingredients. At Trattoria Italiana, we pride ourselves on crafting traditional dishes with a modern twist, curated by our talented chefs who are dedicated to preserving the essence of Italian gastronomy. From homemade pasta and wood-fired pizzas to succulent seafood and mouthwatering desserts, each dish is a celebration of Italian culinary heritage. But it's not just about the food; it's about creating unforgettable dining experiences. Our warm and inviting atmosphere, attentive service, and commitment to excellence ensure that every visit to Trattoria Italiana is a memorable occasion. Whether you're savoring a romantic dinner for two, hosting a special event, or simply enjoying a casual meal with family and friends, we invite you to join us and experience why Trattoria Italiana is the best Italian restaurant in town.";

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "Contact Us";

    const contactParagraph = document.createElement('p');
    contactParagraph.innerHTML = "Address: 123 Main Street, Napoli, Italy<br>Email: example@example.com<br>Phone: +1 (123) 456-7890";

    aboutContainer.appendChild(aboutHeading);
    aboutContainer.appendChild(aboutParagraph);
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactParagraph);

    content.appendChild(aboutContainer);
    content.appendChild(contactContainer);

}