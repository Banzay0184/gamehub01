class Top {

    handlerOpenTop() {
        const myGamePage = document.querySelector('#myGame')
        myGamePage.classList.add('hide')
        const searchPages = document.querySelector('#search')
        searchPages.classList.add('hide')
        const gameInfoPage = document.querySelector('#gameInfo')
        gameInfoPage.classList.add('hide')
        const topPage = document.querySelector('#top')
        topPage.classList.remove('hide')

    }

    constructor() {
        this.classNameActive = 'btnactive';
        this.labelAdd = 'Add';
        this.labelRemov = 'Del';
    }

    render() {

        const gameStore = localStorageUtil.getGames()
        let htmlData = ''

        DATA.forEach((element) => {
            let activeClass = '';
            let activeText = '';

            if (gameStore.indexOf(element.id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = '' + this.classNameActive;
                activeText = this.labelRemov;
            }

            htmlData += `
            <div class="card-game">
                <img class='card-game-img' src=${element.img} alt="${element.id}"/>
                <div class='star'>
                    <img src='./img/star-svgrepo-com.svg' alt="${element.id}"/>
                </div>
                
                <h1 class="count">Reviews count: ${element.reviews}</h1>
                <h1 class='card-game-text'>${element.title}</h1>
            </div>
            `
        });
        const htmltop = `
            <div class="container">
                <h1 class="text">Top</h1>
                <div class="cards-game">
                    ${htmlData}
                </div>
            </div>
            `;

        ROOT_TOP.innerHTML = htmltop;
    }
}

const topPage = new Top();
topPage.render();

