import api from "./wp_api.js";
import { ajax } from "./ajax.js";
import { SearchCard } from "../components/SearchCard.js";
import { PostCard } from "../components/PostCard.js";


export async function InfiniteScroll ( ) {
    
    const d =  document,
        w = window;

    let query = localStorage.getItem( "wpSearch" ),
        apiURL,
        Component;// HOC Higher Order Component (Componente de orden Superior) - https://es.reactjs.org/docs/higher-order-components.html

    w.addEventListener( "scroll", async ( e ) => {

        let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
            { hash } = w.location;
      
        // console.log( scrollTop, clientHeight, scrollHeight ) 
        // hacer el scroll infinito
        if ( scrollTop + clientHeight >= scrollHeight ) {
            
            // console.log( "cargar mas posts" );
            api.page++;                
            
            if ( !hash || hash === "#/" ) {
                
                apiURL = `${ api.POSTS }&page=${ api.page }`;
                Component = PostCard; 

            } else if ( hash.includes( "#/search" ) ) {
                
                apiURL = `${ api.SEARCH }${ query }&page=${ api.page }`;
                Component = SearchCard;

            } else {
                return false;
            }

            d.querySelector( ".loader" ).style.display = "block";
            
            await ajax({
                url: apiURL,

                cbSuccess: ( posts ) => {
                    // console.log( posts );
                    let html = "";
                    posts.forEach( ( post )  => html += Component( post ) );
                    d.getElementById( "main" ).insertAdjacentHTML( "beforeend", html );
                    d.querySelector( ".loader" ).style.display = "none";
                    
                },  
            });
        }

        

    });



};