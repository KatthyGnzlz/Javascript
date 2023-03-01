const d = document,
    n = navigator;

export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge:0
        };

    const success = (position) => {
        let coords = position.coords;
        $id.innerHTML = `
        <p> Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisíon: <b>${coords.accuracy}</b> metros.</li>
        </ul>
        <a href= "https://wwww.google.com/maps/place/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
        // console.log(position);
    };    

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}.</mark></p>`;
        console.log(`Error ${err.code}: ${err.message} `);
    };

    n.geolocation.getCurrentPosition(success, error, options);


}