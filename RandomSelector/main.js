//window.onload=function(){

//};
/*$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("H1").text("Hello");
        //$("H1").text($("li:last").text());
        //$("H1").text($("li").eq(1).text());
    });
});*/
$(document).ready(function(){
    $("input").click(function(){
       let numberOfListItem=$("#choices li").length;
       let randomChildNumber=Math.floor(Math.random()*numberOfListItem);
       $("h1").text($("#choices li").eq(randomChildNumber).text());
       //$("img").attr("src","https://memeprod.s3.ap-northeast-1.amazonaws.com/user-wtf/1577448565218.jpg")
       $("img").attr("src",pictures[randomChildNumber]);
    });
});
