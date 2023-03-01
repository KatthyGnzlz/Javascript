const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            randow = Math.floor(Math.random()*$players.length),
            winner = $players[randow];

            // console.log($players, randow, winner);
        return `El ganador es: ${winner.textContent}`;
    }; 

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let result =  getWinner(selector);
            alert(result);
            // console.log(result);
        };
    });

    // const getWinnerComment = (selector) => {
    //     const $players = d.querySelectorAll(selector),
    //         randow = Math.floor(Math.random()*$players.length),
    //         winner = $players[randow];

    //     return `El ganador es: ${winner.textContent}`;
    // }; 

    // getWinnerComment("ytd-comment-thread-renderer #author-text span");
}
