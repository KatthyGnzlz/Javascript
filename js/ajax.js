/* **********     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest - #jonmircha     ********** */
(() => {
    // instancia
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    

    // asignacion de eventos
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        // console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {
            
            // console.log("éxito");
            // console.log( xhr.responseText);
            // $xhr.innerHTML = xhr.responseText; 
            let json = JSON.parse(xhr.responseText);
            // console.log(json);  
            
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} --${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
            
        } else {
            // console.log("error");
            let message = xhr.statusText || "Ocurrió un error.";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        // console.log("Este mensaje cargará de cualquier forma");
    });

    
    // abre la peticion
        //  peticion  al servidor
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
        // peticion local
    // xhr.open("GET", "assets/users.json");

    // enviar la peticion
    xhr.send();

})();

/* **********     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha     ********** */

(() => {
    // instancia
    const $fetch = document.getElementById("fetch"), 
        $fragment = document.createDocumentFragment();

    // peticiones
        // peticion local
    // fetch("assets/users.json")
        // peticion al servidor
    fetch("https://jsonplaceholder.typicode.com/users")
        // .then((resp) =>{
        //     console.log(resp);
        //     return resp.ok ? resp.json() : Promise.reject(resp);
        // })
        .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
        .then((json) => {
            // console.log(json);
            // $fetch.innerHTML = json;
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);

        })
        .catch((err) => {
            // console.log("Estamos en el catch", err);
            let message = err.statusText || "Ocurrió un error.";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            // console.log(
            //   "Esto se ejecutará independientemente del resultado de la Promesa Fetch."
            // );
        }
    );
})();

/* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha     ********** */

(() => {
    // instancia
    const $fetchAsync = document.getElementById("fetch-async"), 
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let resp = await fetch("https://jsonplaceholder.typicode.com/users")
                json = await resp.json();
            // console.log(resp, json);

            // if (!resp.ok) {
            //     throw new Error ("Ocurrió un Error al solicitar los Datos");
            // }
            if (!resp.ok) {
                throw  ({ status: resp.status, statusText: resp.statusText });
            }

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        } catch (err) {
            console.log("estoy en el catch,", err);
            let message = err.statusText || "Ocurrió un error.";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;

        } finally {
            // console.log("Esto se ejecutará independientemente del try... catch");
        }
    }    
        
    getData();
})();

/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */

(() => {
    // instancia
    const $axios = document.getElementById("axios"), 
        $fragment = document.createDocumentFragment();

    axios
    .get("assets/users.json")
        // .get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            // console.log(resp);
            let json = resp.data;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
            
        })
        .catch((err) => {

            // console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error.";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;

        })
        .finally(() => {
            // console.log("Esto se ejecutará independientemente del resultado Axios");
        });
        
})();


/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */

(() => {
    // instancia
    const $axiosAsync = document.getElementById("axios-async"), 
        $fragment = document.createDocumentFragment();
         
    async function getData() {
        try {
            let resp = await axios.get("https://jsonplaceholder.typicode.com/users")
                json = await resp.data;
            
            // console.log(resp, json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);

        } catch (err) {
            // console.log(err.response);
            
            let message = err.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`; 
        } finally {
            // console.log("Esto se ejecutará independientemente del try... catch");
        }
    }    

    getData();
})();

