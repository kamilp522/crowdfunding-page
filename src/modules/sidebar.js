export const menu_icon = document.querySelector(".menu-icon");
export const sidebar = document.querySelector(".sidebar");

export const openSidebar = () => {
  sidebar.classList.toggle("active");
  menu_icon.classList.toggle("active");
};
