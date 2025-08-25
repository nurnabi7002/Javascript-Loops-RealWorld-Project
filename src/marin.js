// Marin Kitagawa Image (Alone)

let marinImg1 = 'https://staticg.sportskeeda.com/editor/2025/08/ed5f9-17554367030773-1920.jpg?w=640';

let marinImg2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXHyOo1S54D5uP3TRENKhvqYxwTmhlR385w&s';

let marinImg3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNwq6yW9isobpuJoSyv2TM2fY8UNs-GaECQ&s';

let marinImg4 = 'https://media.tenor.com/VECBCh2LMPYAAAAe/marin-kitagawa.png';

let marinImg5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXynEH6qxkbT_IwRSOgScYsLtRIyCGBc9eGg&s';

let marinImg6 = 'https://media.tenor.com/Hku63sv5KjAAAAAe/marin-kitagawa.png';

let marinImg7 = 'https://cdn.rafled.com/anime-icons/images/2710c69767681e1bdca6eef9b109c71d10881812de09d3107d3b34be477260bf.jpg';

let marinImg8 = 'https://e1.pxfuel.com/desktop-wallpaper/388/160/desktop-wallpaper-marin-kitagawa-iphone-kitagawa-marin-phone-thumbnail.jpg';

let marinImg9 = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Marin-happy-in-class.jpg';

let marinImg10 = 'https://media.tenor.com/u4B9pJgdrlIAAAAe/marin-kitagawa-sono-bisque-doll.png';

let marinImg11 = 'https://images.steamusercontent.com/ugc/1813262964233134515/AE4488FA74FF5893DFFCC3B3011780215D3CE0A0/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';

let marinImg12 = 'https://i.ebayimg.com/images/g/KckAAOSwcRxmbKnZ/s-l225.png';





// Rendering Marin's Images Via Loop

let marinGallaryData = [marinImg1, marinImg2, marinImg3, marinImg4, marinImg5, marinImg6, marinImg7, marinImg8, marinImg9, marinImg10, marinImg11, marinImg12];


let marinGallaryContainer = document.getElementById('marinGallary');

for (const image of marinGallaryData) {

  let img = document.createElement('img');
  img.classList.add('imageSize');
  img.src = image;
  img.alt = 'Marin Kitagawa';
  marinGallaryContainer.appendChild(img);
};



