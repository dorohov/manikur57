$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(document.body).on("click.fecss",".page-loader.active ._czr__preloader-process-container ._czr__preloader-process-level",function(e){e.preventDefault(),$(".page-loader").data("window-can-close-it",!0).data("counter-can-close-it",!0).trigger("fecss.can-close-it")}),$(document.body).on("fecss.can-close-it",".page-loader",function(e){e.preventDefault();var a=$(this);a.data("counter-can-close-it")&&a.data("window-can-close-it")&&setTimeout(function(){a.removeClass("active").addClass("ready")},85)}),$(window).load(function(e){$(".page-loader").data("window-can-close-it",!0).trigger("fecss.can-close-it"),$(".page-loader ._czr__preloader-process-container ._czr__preloader-process-level").data("fast-page-loading",!0)}),$(function(){var e=$(".page-loader.active"),a=$("._czr__preloader-process-container ._czr__preloader-process-level",e).eq(0);if(a.size()){var o=0;a.css({width:o+"%"}).attr("data-pos",o);var r=setInterval(function(){var e=Math.random();if(e>.5&&o<100){o++,$("._azbn__preloader-percent").text(o),a.data("fast-page-loading")&&(o+=9);a.css({width:o+"%"}).attr("data-pos",o)}else o>99&&(clearInterval(r),$(".page-loader").data("counter-can-close-it",!0).trigger("fecss.can-close-it"))},40)}});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),a=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,l=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+e},l),$(".navbar-nav li").removeClass("active"),o.parent().addClass("active")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$("._iab__carousel-people .item").eq(0).addClass("active"),$("._iab__carousel-interior .item").eq(0).addClass("active"),$(".carousel").carousel({interval:5e3});var url=window.location.pathname;$('.navbar-nav a[href="'+url+'"]').parent().addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img");
$(function(){$(document.body).on("click",".navbar-collapse.collapse.in li a.scrollto",{},function(r){(screenJS.isXS()||screenJS.isSM())&&(r.preventDefault(),$(".navbar .hamburger.hamburger--arrow").trigger("click"))})});
$(document.body).on("click",".tabs-block__nav a",{},function(a){a.preventDefault();var e=$(this),t=e.attr("href");$(t).find(".tab-content .tab-pane").removeClass("active in").eq(0).addClass("active in"),$(t).find(".tabs-price__nav li.active").removeClass("active")});

