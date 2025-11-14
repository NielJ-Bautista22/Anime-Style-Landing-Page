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

function scrollAnimation(selector, showClass) { 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(showClass);
                observer.unobserve(entry.target); 

            }
        });
    });
    const hiddenElements = document.querySelectorAll(selector);
    hiddenElements.forEach((el) => observer.observe(el));
}

scrollAnimation(".hidden", "show");
