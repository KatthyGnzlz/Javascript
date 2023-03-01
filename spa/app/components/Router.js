import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js';
import { ContactForm } from './ContactForm.js';
import { Post } from './Post.js';
import { PostCard } from './PostCard.js';
import { SearchCard } from './SearchCard.js';



export async function Router() {

    const d = document,
        w = window,
        $main = d.getElementById( "main" );
        
    let { hash } = location;

    console.log( hash );
    $main.innerHTML = null;


    if ( !hash || hash === "#/" ) {
       
        // $main.innerHTML = "<h2>Sección del Home</h2>";

        await ajax({

            url: api.POSTS,

            cbSuccess: ( posts ) => {
                // console.log( main );
                let html = "";

                posts.forEach( ( post ) => {
                    html += PostCard( post );
                    $main.innerHTML = html;
                }); 

            },

        });

    } else if ( hash.includes( "#/search" ) ) {
        
        // $main.innerHTML = "<h2>Sección del Buscador</h2>";
        let query = localStorage.getItem( "wpSearch" );

        if ( !query ) {
        
            d.querySelector( ".loader" ).style.display = "none";

            return false;

        }
        
        await ajax({
            url: `${ api.SEARCH }${ query }`,

            cbSuccess: ( search ) => {
                console.log( search );

                let html = "";

                if ( search.length === 0 ) {
                    
                    html = `
                        <p class= "error">
                            No existe resultados de búsqueda para el término
                            <mark>${ query }</mark>
                        </p> 
                    `;

                } else {

                    search.forEach( ( post ) => ( html += SearchCard( post ) ) );
                    
                }

                $main.innerHTML = html;

            }

        });


    } else if ( hash === "#/contacto" ) {
        
        // $main.innerHTML = "<h2>Sección del Contacto</h2>";

        $main.appendChild( ContactForm() ); 
        

        

    } else {
        
        // $main.innerHTML = 
        //     "<h2>Aqui cargará el contenido de el Post previamente seleccionado</h2>";

           
        await ajax({

            url: `${ api.POST }/${ localStorage.getItem( "wpPostsId" ) }`,

            cbSuccess: ( post ) => {
                // console.log( post );
                
                $main.innerHTML = Post( post );
               
            },

        });

    }
    
    d.querySelector( ".loader" ).style.display = "none";

    



};

