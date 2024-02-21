import {getResource} from "../services/services"
function cards() {
// cards

class MenuCard {
    constructor(imgSrc, alt, title, content, price, parentSelector = '.menu .container') {
        this.parent = document.querySelector(`${parentSelector}`),
        this.imgSrc = imgSrc,
        this.alt = alt
        this.title = title,
        this.content = content,
        this.price = price,
        this.transfer = 90
        this.changeToRUB()

    }

    changeToRUB() {
        this.price = +this.price * this.transfer
    }

    render() {
        const item = document.createElement('div')
        item.classList.add('menu__item')
        item.innerHTML = `
        <img src="${this.imgSrc}" alt="${this.alt}">
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.content}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
        `
        this.parent.append(item)
    }
}



getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price).render()
        })
    })

// axios.get('http://localhost:3000/menu')
// .then(data => {
//     data.data.forEach(({img, altimg, title, descr, price}) => {
//         new MenuCard(img, altimg, title, descr, price).render()
//     })
// })

}

export default cards