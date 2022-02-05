const bergerIcon = $('.menu');
const burgerMenu = $('.burger-menu');
const darkBg = $('#darkBg');
const offer = $('.offer');
const burgerMenuSubItems = $('.burger-menu-sub-items')
let isSubItemClicked = false;
bergerIcon.click(toggleMenu)
darkBg.click(toggleMenu)

offer.on('click', function () {
    burgerMenuSubItems.slideToggle('fast')
    $('.fa-chevron-down').toggleClass('rotate-180')

})

function toggleMenu() {
    burgerMenu.toggleClass('burger-menu-show')
    darkBg.toggleClass('darken-bg')
}

$('.subjects>li>div').hide()
$('.subjects>li').on('click', (e) => {
    if (!isInsideOfSub(e.target, 'items-div')) {
        showUl($('.selected-subject').children('div'), $('.selected-subject').children('div').prev().find('.fa-chevron-down'))
    }
})
$('.sub>ul').hide()
$('.sub').on('click', (e) => {

    if (($(e.target).context.tagName === 'H4')) {
        showUl($(e.target.nextElementSibling), $(e.target).find('.fa-chevron-down'))
    }
    else if (($(e.target).parent().get(0).tagName === 'H4')) {
        showUl($($(e.target).parent().get(0).nextElementSibling), $(e.target).parent().find('.fa-chevron-down'))
    }
    else if (($($(e.target).parent().get(0)).hasClass('chevron'))) {
        showUl($($(e.target).parent().parent().get(0).nextElementSibling), $(e.target).parent().parent().find('.fa-chevron-down'))
    }
})

function showUl(elementToSlide, elementToRotate) {
    console.log(elementToRotate)
    elementToSlide.slideToggle('fast')
    $(elementToRotate).toggleClass('rotate-180')
}

function isInsideOfSub(target, className) {
    // this func return's true if it is inside the items div
    let hasClass = false;
    $(target).parents()
        .map((i, x) => {
            if ($(x).hasClass(className)) {
                hasClass = true;
            }
        })
    return hasClass;
}























