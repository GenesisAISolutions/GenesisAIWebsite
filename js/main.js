// Dynamic gradient scroll
document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight ? scrollTop / docHeight : 0;

  const startColor = [255, 255, 255];  // white
  const endColor = [6, 149, 157];      // #06959d

  const interpolated = startColor.map((start, i) => {
    return Math.round(start + (endColor[i] - start) * scrollPercent);
  });

  if (
    document.body.classList.contains("contact-page") ||
    document.body.classList.contains("privacy-page") ||
    document.body.classList.contains("services-page") ||
    document.body.classList.contains("about-page")
  ) {
    document.body.style.background = `rgb(${interpolated.join(",")})`;
  }
});

// Video transition with fade effect
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("introVideo");
  const videoSection = document.getElementById("intro-video-section");
  const heroSection = document.getElementById("hero-section");

  if (video && videoSection && heroSection) {
    console.log("Video and Hero found");

    video.addEventListener("ended", () => {
      console.log("Video ended, fading...");

      // Add fade-out to video
      videoSection.classList.add("fade-out");

      // After fade-out, show hero
      setTimeout(() => {
        videoSection.style.display = "none";
        heroSection.classList.remove("d-none");
        heroSection.classList.add("fade-in");
      }, 1000); // Match fade duration
    });
  }
});
