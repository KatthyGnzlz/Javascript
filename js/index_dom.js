import hamburgerMenu from "./dom/menu_hamburgesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortouts } from "./dom/teclado.js";
import countdownname from "./dom/cuenta_regresiva.js";
import scrollTopButoon from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtros_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";


const d =document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdownname("countdown", "Oct 14, 2022 8:00", "Feliz Cumpleaños Zadquiel");
    scrollTopButoon(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href= "https://youtu.be/iruAep2-NdI" target = "_blank" ref = "noonener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/iruAep2-NdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href= "https://goo.gl/maps/5k8hdYRAMBbZmM1D8" target = "_blank" ref = "noonener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105573.72630587254!2d-67.01777365917383!3d10.468540317632316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af510e7186c2f%3A0xf61d6d9949905af7!2sParque%20Zool%C3%B3gico%20Caricuao!5e0!3m2!1ses!2sve!4v1665688544312!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    
});

d.addEventListener("keydown", (e) => {
    shortouts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();