const d = document;
const ls = localStorage;


export default function darkTheme (btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");


    // console.log($selectors);

    let moon = "🌚";
    let sun = "🌞";

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark)); 
        $themeBtn.textContext = moon;
        ls.setItem("theme", "light")
    };

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark)); 
        $themeBtn.textContext = sun;
        ls.setItem("theme", "dark")
    };

    d.addEventListener ("click", (e) => {

        if (e.target.matches(btn)) {
            // console.log($themeBtn.textContext);
            if ($themeBtn.textContext === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });
    
    d.addEventListener("DOMContentLoaded", (e) => {
        
        if(ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
        }

        if(ls.getItem("theme") === "light") {
            lightMode();
        }

        if(ls.getItem("theme") === "dark") {
            darkMode();
        }
    })


};