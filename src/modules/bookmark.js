export const bookmark = document.querySelector(".bookmark");
export const bookmark_span = document.querySelector(".bookmark span");

export const markBookmark = (e) => {
  e.preventDefault();
  bookmark.classList.toggle("active");
  if (bookmark.classList.contains("active"))
    bookmark_span.textContent = "Bookmarked";
  else if (!bookmark.classList.contains("active"))
    bookmark_span.textContent = "Bookmark";
};
