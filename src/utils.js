export const noteGallery = document.querySelector(".note-gallery");

export function moveToTop(element, container) {
  if (!element) {
    console.debug("moveToTop() requires element, that exists, passed", element);
    return;
  }

  if (!container) {
    console.debug(
      "moveToTop() requires container, that exists, passed",
      container,
    );
    return;
  }

  container.insertBefore(element, null);
}
