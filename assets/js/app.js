let $el, leftPos, newWidth;

/* Add Magic Line markup via JavaScript, because it ain't going to work without */
$("#example-one").append("<li id='magic-line'></li>");

let $magicLine = $("#magic-line");

$magicLine
    .width($(".current_page_item").width())
    .css("left", $(".current_page_item a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

$("#example-one>li")
    .find("a")
    .hover(
        function () {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            // console.log(leftPos)
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth,
                opacity: 1
            });
        },
        function () {
            $magicLine.stop().animate({
                width: 0,
                opacity:0
            });
        }
    );

$magicLine[0].style.width='0'
////////
let section=$('section')
let currentPageItem=$('.current_page_item');
let megaMenu=$('.mega-box');
megaMenu.fadeOut(0)
currentPageItem.hover(
    function () {
        megaMenu.fadeIn(200)
        section.toggleClass('section-darken')
    },
    function (){
        megaMenu.fadeOut(200)
        section.toggleClass('section-darken')
    }
)





















