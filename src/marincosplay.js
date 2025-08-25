// Marin Dressup Cosplay Images

let marinCosplayImg1 = 'https://comicbook.com/wp-content/uploads/sites/4/2022/03/a41022d8-e89d-447b-8364-2461e58f9d42.jpg?w=1024';

let marinCosplayImg2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPAiZQyDG-i6t9-i9wnnEcekHENJI3nxPtQ&s';

let marinCosplayImg3 = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/my-dress-up-darling-cosplay-event-photo-3.jpg';

let marinCosplayImg4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EqgqERT_VEK_xLdfvNriUrkL9EY8IDPwNA&s';

let marinCosplayImg5 = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/marin-fails-her-first-cosplay-picture-in-my-dress-up-darling.jpg?q=50&fit=crop&w=825&dpr=1.5';






// Rendering Marin's Images Via Loop

let marinCosplayGallaryData = [marinCosplayImg1, marinCosplayImg2, marinCosplayImg3, marinCosplayImg4, marinCosplayImg5];


let marincosplayGallaryContainer = document.getElementById('marinCosplayGallary');

for (const image of marinCosplayGallaryData) {

    let img = document.createElement('img');
    img.classList.add('imageSize');
    img.src = image;
    img.alt = 'Marin Kitagawa';
    marincosplayGallaryContainer.appendChild(img);
};


