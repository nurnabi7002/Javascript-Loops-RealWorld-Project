// Marin Kitagawa and Gojo Wakana Images

let marinGojo1 = 'https://images6.alphacoders.com/122/1223949.jpg';

let marinGojo2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9QrnmNk_XnfcUbaOmmaf13e0LjTMK0wbpQ&s';

let marinGojo3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gfa8QLY3luKIsVBewULASU93dwB1dZIYNg&s';

let marinGojo4 = 'https://i.ytimg.com/vi/5V8QEvhHxVc/sddefault.jpg';

let marinGojo5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2uESm3skIhTrUfPmwX2kkO0Ig7OXmh04YQ&s';

let marinGojo6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNyDyEkaZ3048AHJo8ihrPgDuWec_jsD8ag&s';

let marinGojo7 = 'https://assets.mycast.io/actor_images/actor-marin-and-gojo-508157_large.jpg?1659999880';

let marinGojo8 = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/my-dress-up-darling-marin-gojo-shopping-trip.jpg';

let marinGojo9 = 'https://cdn.oneesports.gg/cdn-data/2023/02/Anime_MyDressUpDarling_Cosplay_Gojo_Marin.jpg';

let marinGojo10 = 'https://pbs.twimg.com/media/FO2ioKgaQAQCCk3?format=jpg&name=4096x4096';

let marinGojo11 = 'https://images7.alphacoders.com/127/1276258.jpg';

let marinGojo12 = 'https://w0.peakpx.com/wallpaper/57/706/HD-wallpaper-anime-marin-kitagawa-my-dress-up-darling-wakana-gojo.jpg';



// Rendering Marin's Images Via Loop

let marinGojoGallaryData = [marinGojo1, marinGojo2, marinGojo3, marinGojo4, marinGojo5, marinGojo6, marinGojo7, marinGojo8, marinGojo9, marinGojo10, marinGojo11, marinGojo12, ]

let marinGojoGallaryContainer = document.getElementById('marinGojoGallary');

for (const image of marinGojoGallaryData) {

  let img = document.createElement('img');
  img.classList.add('imageSize');
  img.src = image;
  img.alt = 'Marin Kitagawa Gojo Wakana';
  marinGojoGallaryContainer.appendChild(img);
};
