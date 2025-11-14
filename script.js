const background = {
  1: ["static/bg (1).png", ],  
  2: ["static/bg (2).png", ],  
  3: ["static/bg (3).png", ] 
};


const scenes1 = [
  "static/scenes/scenes (1).jpg",
  "static/scenes/scenes (1).png",
  "static/scenes/scenes (2).jpg",
  "static/scenes/download (3).jpg",
  "static/scenes/scenes (3).png",
  "static/scenes/scenes (4).png",
  "static/scenes/scenes (4).jpg",
  "static/scenes/scenes (5).jpg",
  "static/scenes/scenes (6).jpg",
  "static/scenes/scenes (7).jpg",

];

const scenes2 = [
  "static/scenes/scenes (8).jpg",
  "static/scenes/download (1).jpg",
  "static/scenes/scenes (9).jpg",
  "static/scenes/scenes (9).webp",
  "static/scenes/scenes (10).webp",
  "static/scenes/scenes (11).webp",
  "static/scenes/scenes (12).webp",
  "static/scenes/scenes (13).webp",
  "static/scenes/scenes (14).webp",
  "static/scenes/scenes (15).webp"
];

function populateCarousel(trackId, images) {
  const track = document.getElementById(trackId);

  images.forEach(src => {
    const card = document.createElement("div");
    card.className = "card hidden-car";
    const img = document.createElement("img");
    img.src = src;
    card.appendChild(img);
    track.appendChild(card);
  });

  images.forEach(src => {
    const card = document.createElement("div");
    card.className = "card hidden-car";
    const img = document.createElement("img");
    img.src = src;
    card.appendChild(img);
    track.appendChild(card);
  });
}

populateCarousel("carousel-track-1", scenes1);
populateCarousel("carousel-track-2", scenes2);


const heroOptions = {
  1: { 
    subject: "static/hero/subject (1).png",
    class: "image1",
    background: "static/hero/bg (2).png"
  },
  2: { 
    subject: "static/hero/subject (2).png",
    class: "image2",
    background: "static/hero/bg (1).png"
  }
};

const keys = Object.keys(heroOptions);         
const randomKey = keys[Math.floor(Math.random() * keys.length)]; // "1" or "2"
const chosen = heroOptions[randomKey];           // the paired values for that key

console.log(chosen);

/* elements from your supplied HTML */
const heroSection = document.getElementById("hero-bg");
const heroSubject = document.getElementById("hero-subject");

/* apply background and subject image */
heroSection.src = chosen.background;
heroSubject.src = chosen.subject;

heroSubject.classList.remove(...keys.map(k => heroOptions[k].class)); // remove any existing image classes
heroSubject.classList.add(chosen.class);