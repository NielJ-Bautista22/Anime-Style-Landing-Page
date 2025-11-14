function letterDrop(selector) {
  const textElement = document.querySelector(selector);
  const text = textElement.textContent;
  textElement.textContent = ""; // clear original

  // Wrap each character in a span
  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1}s`; 
    textElement.appendChild(span);
  });
}

letterDrop(".drop-text");
