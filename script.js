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
    card.className = "card";
    const img = document.createElement("img");
    img.src = src;
    card.appendChild(img);
    track.appendChild(card);
  });

  images.forEach(src => {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = src;
    card.appendChild(img);
    track.appendChild(card);
  });
}

populateCarousel("carousel-track-1", scenes1);
populateCarousel("carousel-track-2", scenes2);
