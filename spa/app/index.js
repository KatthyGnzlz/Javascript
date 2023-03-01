import api from "./helpers/wp_api.js";
import { App } from "./App.js";
// impor

document.addEventListener( "DOMContentLoaded", App );
window.addEventListener( "hashchange", ( e ) => {
    api.page = 1; 

    App();
});









