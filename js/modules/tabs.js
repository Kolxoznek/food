function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // Tabs

    const tabContent = document.querySelectorAll(tabsContentSelector)
    const tabWrapper = document.querySelector(tabsParentSelector)
    const tabs = tabWrapper.querySelectorAll(tabsSelector)
    
    function resetActiveTab() {
        tabContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })
    
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add(activeClass)
        tabContent[i].classList.remove('hide')
        tabContent[i].classList.add('show','fade')
    }
    
    resetActiveTab()
    showTabContent()
    
    tabWrapper.addEventListener('click', e => {
        if (e.target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if(item == e.target) {
                    resetActiveTab()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs