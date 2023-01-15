let svg1 = Snap("#argsvg1");
let ampoule = svg1.select('#ampoule2');
let rays = svg1.selectAll(".rays2");
let svg1path = $('.rays2').get(0);
let svg1pathLen = svg1path.getTotalLength();

ampoule.attr({fill: "none"});
rays.attr({"stroke-dasharray": svg1pathLen, "stroke-dashoffset": svg1pathLen});$('#argsvg1').hover(function () {
            rays.animate({"stroke-dashoffset": 0}, 150);
        },  ()=> {
            rays.animate({"stroke-dashoffset": svg1pathLen}, 150);
        });