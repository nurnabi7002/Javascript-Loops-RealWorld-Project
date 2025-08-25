
// Nav bar rendering via array and loop

let navMenu = [ // Data Stored as objects in an array
  { name: "Marin", link: "index.html" },
  { name: "Gojo", link: "gojo.html" },
  { name: "MarinGojo", link: "maringojo.html" },
  { name: "Cosplay", link: "marincosplay.html" }
];

let ul = document.getElementById('nav-ul'); // selecting nav ul for append li

for (const menus of navMenu) { // running loop for each of nav link in the array
  let li = document.createElement("li"); // creating new eliment each times of the data
  li.innerHTML = `<a href="${menus.link}">${menus.name}</a>`; // rendering data dynamicaly (look at the loop and array)
  ul.appendChild(li); // appending to ul
};
