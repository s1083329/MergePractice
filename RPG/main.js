let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain,imgMain,imgEnemy;
$(document).ready(function(){
    mapArray=[0,1,1,0,0,0,3,1,2,];
    ctx=$("#myCanvas")[0].getContext("2d");
imgMain=new Image();
imgMain.src="RPG/images/spriteSheet.png";
currentImgMainX = 0;
currentImgMainY = 0;
imgMain.onload = function(){
    ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
};
imgMountain = new Image();
imgMountain.src="RPG/images/material.jpg";
imgEnemy = new Image();
imgEnemy.src="RPG/images/f5c0-hsmkfyp1898887-removebg-preview.png";
imgMountain.onload = function(){
    imgEnemy.onload = function(){
        for(let x in mapArray){
            if(mapArray[x] == 1){ctx.drawImage(imgMountain,0,0,50,70,x%3*200,Math.floor(x/3)*200,200,200);//左.右
            }
            else if(mapArray[x] == 3)
            {
                ctx.drawImage(imgEnemy,-150,45,700,600,x%3*200,Math.floor(x/3)*200,200,200);
            }
        }
    }
};
});
$(document).keydown(function(event){
    let targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;

    event.preventDefault();

    switch(event.code){
        case "ArrowLeft":
            targetImgMainX = currentImgMainX - 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;

        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 200;
            cutImagePositionX = 355;
            break;

        case "ArrowRight":
            targetImgMainX = currentImgMainX + 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;

        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY + 200;
            cutImagePositionX = 0;
            break;
        
        default:
            return;
    }

    if (targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY <= 400 && targetImgMainY>=0)
    {
        targetBlock = targetImgMainX/200 + targetImgMainY/200*3;
    }
    else
    {
        targetBlock = -1;
    }

    ctx.clearRect(currentImgMainX, currentImgMainY, 200, 200);

    if (targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3)
    {

    }
    else
    {
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }

    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130,currentImgMainX, currentImgMainY, 200, 200);

    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("撞牆了ㄚ~~");
            break;

        case 1:
            $("#talkBox").text("ㄚ~~~有怪獸");
            break;

        case 2:
            $("#talkBox").text("抵達終點");
            break;

        case 3:
            $("#talkBox").text("汪");
            break;
            
    }
});