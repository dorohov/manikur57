"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isLG=function(){return e.screen.w>1199&&e.screen.w<1400},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.screenIs=function(){var s="noname";return e.isXS()?s="xs":e.isSM()?s="sm":e.isMD()?s="md":e.isLG()?s="lg":e.isXL()?s="xl":e.isXXL()?s="xxl":e.device()&&(s="device"),s},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var s="noname";return e.isPortrait()?s="portrait":e.isLandscape()&&(s="landscape"),s},e.is=function(s){return s==e.screenIs()||s==e.orientationIs()},e.onResize=function(s,a){if(s.type){var n=e.__resizefunctions[s.type];s.orientation?n[s.orientation].push(a):n.default.push(a)}},e.resizeCall=function(s){if(s.type){if(e.__resizefunctions[s.type].default)for(var a=0;a<e.__resizefunctions[s.type].default.length;a++){var n=e.__resizefunctions[s.type].default[a];n(s)}if(e.__resizefunctions[s.type][s.orientation])for(var a=0;a<e.__resizefunctions[s.type][s.orientation].length;a++){var n=e.__resizefunctions[s.type][s.orientation][a];n(s)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,s,a,n,i){console.log("Error FECSS: "+s+":"+a+":"+n+": "+JSON.stringify(e)+"\n"+JSON.stringify(i))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var s=jQuery.fn.addClass,a=jQuery.fn.removeClass,n=jQuery.fn.toggleClass;e.fn.addClass=function(){var a=s.apply(this,arguments);return e(this).trigger("changeClass",["add"]),a},e.fn.removeClass=function(){var s=a.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),s},e.fn.toggleClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),s}}(jQuery),!function(){$(window).load(function(){$("[data-toggle-nav]").click(function(){var e=$(this).data("toggle-nav");$(e).toggleClass("open-sidebar")}),$("[data-collapse-nav]").click(function(){var e=$(this).data("collapse-nav");$(e).toggleClass("open")}),$("[data-body]").click(function(){var e=$(this).data("body");$(e).toggleClass("open-navbar")})})}(),$(function(){$(document.body).on("changeClass",null,{},function(e,s){$(function(){})}),$(function(){var e="noname-browser",s=navigator.userAgent.toLowerCase();s.indexOf("msie")!=-1&&(e="msie"),s.indexOf("trident")!=-1&&(e="msie"),s.indexOf("konqueror")!=-1&&(e="konqueror"),s.indexOf("firefox")!=-1&&(e="firefox"),s.indexOf("safari")!=-1&&(e="safari"),s.indexOf("chrome")!=-1&&(e="chrome"),s.indexOf("chromium")!=-1&&(e="chromium"),s.indexOf("opera")!=-1&&(e="opera"),s.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(document.body).on("click.fecss",".page-loader.active ._czr__preloader-process-container ._czr__preloader-process-level",function(e){e.preventDefault(),$(".page-loader").data("window-can-close-it",!0).data("counter-can-close-it",!0).trigger("fecss.can-close-it")}),$(document.body).on("fecss.can-close-it",".page-loader",function(e){e.preventDefault();var s=$(this);s.data("counter-can-close-it")&&s.data("window-can-close-it")&&setTimeout(function(){s.removeClass("active").addClass("ready")},85)}),$(window).load(function(e){$(".page-loader").data("window-can-close-it",!0).trigger("fecss.can-close-it"),$(".page-loader ._czr__preloader-process-container ._czr__preloader-process-level").data("fast-page-loading",!0)}),$(function(){var e=$(".page-loader.active"),s=$("._czr__preloader-process-container ._czr__preloader-process-level",e).eq(0);if(s.size()){var a=0;s.css({width:a+"%"}).attr("data-pos",a);var n=setInterval(function(){var e=Math.random();e>.5&&a<100?(a++,$("._azbn__preloader-percent").text(a),s.data("fast-page-loading")&&(a+=9),s.css({width:a+"%"}).attr("data-pos",a)):a>99&&(clearInterval(n),$(".page-loader").data("counter-can-close-it",!0).trigger("fecss.can-close-it"))},40)}}),$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var s=$(this),a=$(s.attr("href")).eq(0),n=parseInt(s.attr("data-scrollto-diff"))||0,i=parseInt(s.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+n},i),$(".navbar-nav li").removeClass("active"),s.parent().addClass("active")}),$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$("._iab__carousel-people .item").eq(0).addClass("active"),$("._iab__carousel-interior .item").eq(0).addClass("active"),$(".carousel").carousel({interval:5e3});var e=window.location.pathname;$('.navbar-nav a[href="'+e+'"]').parent().addClass("active"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").parent().addClass("table-responsive"),$(".text-block img").parent().addClass("_tb__img"),$(function(){$(document.body).on("click",".navbar-collapse.collapse.in li a.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM())&&(e.preventDefault(),$(".navbar .hamburger.hamburger--arrow").trigger("click"))})}),$(document.body).on("click",".tabs-block__nav a",{},function(e){e.preventDefault();var s=$(this),a=s.attr("href");$(a).find(".tab-content .tab-pane").removeClass("active in").eq(0).addClass("active in"),$(a).find(".tabs-price__nav li.active").removeClass("active")}),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},a="window-width",n="window-height",i=$(window).outerWidth(!0),t=$(window).outerHeight(!0),o=$("html body").eq(0);i<e.xs.max&&(o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),a="window-width-xs"),i>e.sm.min&&i<e.sm.max&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),a="window-width-sm"),i>e.md.min&&i<e.md.max&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-lg")&&o.removeClass("window-width-lg"),a="window-width-md"),i>e.lg.min&&(o.hasClass("window-width-xs")&&o.removeClass("window-width-xs"),o.hasClass("window-width-sm")&&o.removeClass("window-width-sm"),o.hasClass("window-width-md")&&o.removeClass("window-width-md"),a="window-width-lg"),t<s.xs.max&&(o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),n="window-height-xs"),t>s.sm.min&&t<s.sm.max&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),n="window-height-sm"),t>s.md.min&&t<s.md.max&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-lg")&&o.removeClass("window-height-lg"),n="window-height-md"),t>s.lg.min&&(o.hasClass("window-height-xs")&&o.removeClass("window-height-xs"),o.hasClass("window-height-sm")&&o.removeClass("window-height-sm"),o.hasClass("window-height-md")&&o.removeClass("window-height-md"),n="window-height-lg"),$("html body").eq(0).addClass(a).addClass(n)});$(window).height(),$(window).width(),$(".navbar-site").outerHeight(!0),$(".header-site").outerHeight(!0),$(".heading-site").outerHeight(!0),$(".news-item__preview").outerWidth(!0),$(".news-block").outerHeight(!0),$(".footer-site").outerHeight(!0);!function(){var e=$(".navbar-collapse"),s=e.parent(),a="body-index"==s.attr("id")?1:0;screenJS.device()?a||(e.prependTo($(document.body)),$(".icon-logo-full").prependTo($(".navbar-collapse-inner")).wrap('<a class="navbar-collapse__logo scrollto" href="#body-index"></a>')):a&&(e.prependTo($(".navbar-collapse-cols")),$(".icon-logo-full").prependTo($(".navbar-brand")),$(".navbar-collapse__logo.scrollto").empty().remove())}()}).trigger("resize"),$(window).on("scroll",function(e){var s=$(document).scrollTop(),a=$(".navbar-site.scroll");a.hasClass("scroll-navbar")?s<500&&a.removeClass("scroll-navbar"):s>500&&a.addClass("scroll-navbar"),a.hasClass("opacity")?s<200&&a.removeClass("opacity"):s>200&&a.addClass("opacity"),a.hasClass("fixed")?s<400&&a.removeClass("fixed"):s>400&&a.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});