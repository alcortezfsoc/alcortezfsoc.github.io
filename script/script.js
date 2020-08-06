const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "Direct Downloads",
            [
                ["LibGen [Multi Lang]", "http://gen.lib.rus.ec/"],
                ["Sci-Hub [Multi Lang]", "https://sci-hub.st/"],
                ["Trantor [Multi Lang]", "https://trantor.is/"],
                ["Internet Archive [Multi Lang]", "https://archive.org/details/books"],
                ["Ebiblioteca [Spanish]", "http://ebiblioteca.org/"],
                ["Open Directory Library [Italian]", "https://dwnlg.tel/book-n/"]
            ]
        ],
        
        [
            "Torrents",
            [
                ["epublibre [Spanish]", "https://epublibre.org/"],
                
            ]
        ],
         
        [
            "Reading Online",
            [
                ["Read Any Book [English]", "https://readanybook.com/"],
                            
            ]
        ],
        [
            "Telegram bots",
            [
                ["@BookDownloadBot [English]", "https://t.me/BookDownloadBot"],
                ["@LibrosGratisBot [Spanish]", "https://t.me/LibrosGratisBot"],
                
            ]
            ],
        [
            "Open Calibre Directories",
            [
                ["Calishot [English]", "https://calishot-eng-1.herokuapp.com/index-eng/summary"],
                ["Calishot [Non-Eng]", "https://calishot-non-eng-1.herokuapp.com/index/summary"],
                
            ]
            ],
            [
            "IRC Channels",
            [
                ["Getting books from IRC Channels [Guide]", "https://www.reddit.com/r/Piracy/comments/2oftbu/guide_the_idiot_proof_guide_to_downloading_ebooks/"],

            ]
        ]
        ]
   }

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
