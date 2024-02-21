function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
       // Slider
    // надо бы разобрать как это работает
    const slides = document.querySelectorAll(slide), // массив слайдов
          slider = document.querySelector(container), // оболочка всего слайдера
          prev = document.querySelector(prevArrow), // стрелка влево
          next = document.querySelector(nextArrow), // стрелка вправо
          total = document.querySelector(totalCounter), // общее кол-во слайдов
          current = document.querySelector(currentCounter), // текущий слайд
          slidesWrapper = document.querySelector(wrapper), // окно для слайдов
          width = +window.getComputedStyle(slidesWrapper).width.replace(/\D/g, ''), // получение ширины окна слайдов (без px)
          slidesField = document.querySelector(field), // все слайды друг за другом
          slidesWidth = width * (slides.length - 1) // ширина всех слайдов -1 (связано с тем, как работает свойство transform)
    
    let slideIndex = 1, // индекс слайда
        offset = 0 // положение окна слайдера

    // смещение слайдера в положение offset
    function transformX(offset) {
        slidesField.style.transform = `translateX(-${offset}px)`
    }

    // отображение точки активного слайда
    function setActiveDot() {
        dots.forEach(dot => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    }

    // добавить 0 если номер слайда меньше 10
    function addZeroCurrent() {
        slideIndex < 10 ? current.textContent = `0${slideIndex}` : current.textContent = slideIndex
    }
    addZeroCurrent()

    // добавить 0 если количество слайдов меньше 10
    slides.length < 10 ? total.textContent = `0${slides.length}` : total.textContent = slides.length

    // добавление обязательных css свойств
    slidesField.style.cssText = `
    width: ${100 * slides.length}%;
    display: flex;
    transition: 0.5s all;
    `
    slidesWrapper.style.overflow = 'hidden'
    // каждому слайду установили одинаковую ширину
    slides.forEach(slide => slide.style.width = width)

    slider.style.position = 'relative'


    // добавление точек на слайд
    const indicators = document.createElement('ol')
    const dots = []
    indicators.classList.add('carousel-indicators')
    slider.append(indicators)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.classList.add('dot')
        dot.setAttribute('data-slide-to', i + 1)
        
        if (i == 0) {
            dot.style.opacity = 1
        }
        indicators.append(dot)
        dots.push(dot)
    }



    next.addEventListener('click', () => {
        // определяем прокрутку слайдера, 
        // если слайд последний - перематываем на первый,
        // если нет - перематываем на следующий
        transformX(offset == slidesWidth ? offset = 0 : offset += width)

        slideIndex == slides.length ? slideIndex = 1 : slideIndex = +slideIndex + 1

        addZeroCurrent()

        setActiveDot()
    })

    prev.addEventListener('click', () => {

        transformX(offset == 0 ? offset = slidesWidth : offset += -width)

        slideIndex == 1 ? slideIndex = slides.length : slideIndex = +slideIndex - 1

        addZeroCurrent()

        setActiveDot()
    })


    dots.forEach(dot => {
        dot.addEventListener('click', e => {

            slideIndex = e.target.getAttribute('data-slide-to')
            
            transformX(offset = width * (slideIndex - 1))

            addZeroCurrent()

            setActiveDot()
        })
    })
}

export default slider