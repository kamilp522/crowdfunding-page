import * as sidebar_module from "./modules/sidebar";
import * as progress_bar_module from "./modules/progress_bar";

sidebar_module.menu_icon.addEventListener("click", sidebar_module.openSidebar);
progress_bar_module.setProgressBar();
