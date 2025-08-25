// Gojo Wakana Image (Alone)

let gojoImg1 = 'https://i.namu.wiki/i/GVD7zBQQekIZobfR6usA5tkozodvcjhpgTnpJNBE2oijiSmd5QA98Fu6hUQuaFg89EGEYYnDvjQsa3nGNWVbiw.webp';

let gojoImg2 = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/02/Gojo-nervous.jpg';

let gojoImg3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCo0nmov0ivsSM42pqDMOGYVwE0n8FedCgA&s';

let gojoImg4 = 'https://i.pinimg.com/736x/f9/cd/e0/f9cde01437b314a213e5a3bf6556d60e.jpg';

let gojoImg5 = 'https://images4.alphacoders.com/121/1219981.jpg';

let gojoImg6 = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Gojo-with-flowers.jpg';

let gojoImg7 = 'https://pm1.aminoapps.com/8248/9bbfd433a8d50ee5b3efa1c5107ab5ac9b388af2r1-720-986v2_hq.jpg';

let gojoImg8 = 'https://beyondthehobby.shop/cdn/shop/files/D05FD6D2-897E-4BEB-B98B-AC2955B34F76.jpg?v=1737703515';

let gojoImg9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv93ZJXBuE6eYZrXLw8Uiwg9cQCOWvsY9cLQ&s';

let gojoImg10 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScG7zm4jgbTEEIU2ITzVz1jHyPUiGH1JDI-hM2RTJpSpXkCNNigWaiFCoEACEt8lzOHVI&usqp=CAU';

let gojoImg11 = 'https://i.pinimg.com/236x/4d/ef/e2/4defe2ee35637e932471855fe5e0bbae.jpg';

let gojoImg12 = 'https://pm1.aminoapps.com/8288/6bf85dcebb4a60a29167408c94729231db643d4dr1-537-994v2_00.jpg';





        // Rendering Gojo's Images Via Loop

let gojoGallaryData = [gojoImg1, gojoImg2, gojoImg3, gojoImg4, gojoImg5, gojoImg6, gojoImg7, gojoImg8, gojoImg9, gojoImg10, gojoImg11, gojoImg12];

let gojoGallaryContainer = document.getElementById('gojoGallary');

for (const image of gojoGallaryData) {

  let img = document.createElement('img');
  img.classList.add('imageSize');
  img.src = image;
  img.alt = 'Gojo Wakana';
  gojoGallaryContainer.appendChild(img);
};