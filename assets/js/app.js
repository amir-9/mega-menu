// noinspection JSJQueryEfficiency
let megaMenu = $('.mega-box');
let $el, leftPos, newWidth;
let firstLi=false;
let isInsideOfMm = false;

/* Add Magic Line markup via JavaScript, because it ain't going to work without */
$("#example-one").append("<li id='magic-line'></li>");

let $magicLine = $("#magic-line");

$magicLine
    .width($(".current_page_item").width())
    .css("left", $(".current_page_item a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());


$(".current_page_item").hover(
    function () {
        firstLi = true
    },
    function () {
        firstLi = false
    }
)
megaMenu.hover(
    function () {
        isInsideOfMm=true
    },
    function () {
        isInsideOfMm=false
    }
)

$("#example-one>li")
    .find("a")
    .hover(
        function () {
            if (!firstLi && !isInsideOfMm) {
                $el = $(this);
                leftPos = $el.position().left - 8;
                newWidth = $el.parent().width();
                $magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth,
                    opacity: 1
                });
            } else if(firstLi && !isInsideOfMm){
                console.log('hereeeeeeeeeeeeeee')
                $el = $(this);
                leftPos = '820px';
                newWidth = $el.parent().width();
                $magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth,
                    opacity: 1
                });
            }
        },
        function () {
            $magicLine.stop().animate({
                width: 0,
                opacity: 0
            });
        }
    );

$magicLine[0].style.width = '0'
////////
let section = $('section')
let currentPageItem = $('.current_page_item');

megaMenu.fadeOut(0)
currentPageItem.hover(
    function () {
        megaMenu.fadeIn(200)
        section.toggleClass('section-darken')
    },
    function () {
        megaMenu.fadeOut(200)
        section.toggleClass('section-darken')
    }
)
let megaMenuSubjects = $('.subjects>li')
let megaMenuSubjectsChildren = $('.subjects-children>li')
Array.from(megaMenuSubjectsChildren).forEach((item) => {
    if (item.className === 'digital') {
        item.style.display = ''
    } else {
        item.style.display = 'none'
    }
})
megaMenuSubjects.hover(
    function () {
        // console.log(this.className)
        Array.from(megaMenuSubjectsChildren).forEach((item) => {
            if (item.className === this.className) {
                item.style.display = ''
            } else {
                item.style.display = 'none'
            }
        })
    },
    function () {

    }
)





















