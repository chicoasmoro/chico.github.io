document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery li img");

  // Create the overlay elements
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "image-overlay");
  overlay.style.display = "none";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.zIndex = "1000";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";

  const overlayImage = document.createElement("img");
  overlayImage.setAttribute("id", "overlay-image");
  overlayImage.style.maxWidth = "90%";
  overlayImage.style.maxHeight = "90%";
  overlayImage.style.borderRadius = "10px";
  overlayImage.style.boxShadow = "0 8px 12px rgba(255, 255, 255, 0.5)";

  // Close the overlay when clicked
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  // Append overlay elements to the body
  overlay.appendChild(overlayImage);
  document.body.appendChild(overlay);

  // Add click event to all gallery images
  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      overlayImage.src = img.src; // Set the overlay image source
      overlay.style.display = "flex"; // Show the overlay
    });
  });
});
