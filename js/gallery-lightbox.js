document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox img");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const closeBtn = document.querySelector(".lightbox .close");
  const prevBtn = document.querySelector(".lightbox .prev");
  const nextBtn = document.querySelector(".lightbox .next");

  let currentGroup = [];
  let currentIndex = 0;

  const images = document.querySelectorAll(".gallery-group img");
  const groupedImages = {};

  images.forEach((img, index) => {
    const group = img.dataset.group || "default";
    if (!groupedImages[group]) groupedImages[group] = [];
    groupedImages[group].push(img);

    img.addEventListener("click", () => {
      currentGroup = groupedImages[group];
      currentIndex = currentGroup.indexOf(img);
      showImage(currentGroup[currentIndex]);
      lightbox.style.display = "flex";
	  
	  // Scroll to top to ensure full visibility of the lightbox
      window.scrollTo({ top: 0, behavior: "instant" });  // or use "smooth" if you prefer
    });
  });
  function showImage(imgElement) {
    const fullSrc = imgElement.getAttribute("data-full") || imgElement.src;
    lightboxImage.src = fullSrc;
    lightboxImage.alt = imgElement.alt;
    lightboxCaption.textContent = imgElement.getAttribute("data-caption") || imgElement.alt || "";
  }

  function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentGroup.length - 1;
    if (currentIndex >= currentGroup.length) currentIndex = 0;
    showImage(currentGroup[currentIndex]);
  }

  closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));
  prevBtn.addEventListener("click", () => navigate(-1));
  nextBtn.addEventListener("click", () => navigate(1));

  // Close on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});