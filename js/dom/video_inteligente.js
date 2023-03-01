const d = document,
    W = window;

export default function smartVideo () {
    const $videos = d.querySelectorAll("video[data-smart-video]");

    const cb =  (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            W.addEventListener("visibilitychange", (e)=> {
                d.visibilityState === "visible" 
                    ? entry.target.play()
                    : entry.target.pause()
            });
        });

    };


    const observer =  new IntersectionObserver(cb, { threshold: 0.5 });

    $videos.forEach( (el) => observer.observe(el) );

};