var board=[];
var score=0;

function newGame() {
    init();//init
    //random init
    if(Math.random()<0.75)genarateOneGrid(2),genarateOneGrid(2);
    else genarateOneGrid(2),genarateOneGrid(4);
}

function init() {
    var cell;
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++){
            cell=document.getElementById("cell"+i+j);
            cell.style.left=(j*120+20)+"px";
            cell.style.top=(i*120+20)+"px";
        }

    for(var i=-1;i<5;i++){
        board[i]=[];
        for(var j=-1;j<5;j++){
            board[i][j]=0;
        }
    }

    score=0;
    $("#score").text(score);
    updateBoard();
}

function updateBoard() {
    /*var container=document.getElementById("board");
    var childs=container.childNodes;
    for(var i=0;i<childs.length;i++)
        if(childs[i].="numberCell")*/
    //jQuery慕了
    $(".numberCell").remove();
    var str="<div class='numberCell' id='";
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++){
            $("#board").append(str+"ncell"+i+j+"'></div>");
            var elem=$("#ncell"+i+j);
            if(board[i][j]==0){
                elem.css("width","0");
                elem.css("height","0");
                elem.css("left",(j*120+70)+"px");
                elem.css("top",(i*120+70)+"px");
            }else{
                elem.css("width","100px");
                elem.css("height","100px");
                elem.css("left",(j*120+20)+"px");
                elem.css("top",(i*120+20)+"px");
                elem.css("background-color",getBackgroundColor(board[i][j]));
                elem.css("color",getNumberColor(board[i][j]));
                elem.text(board[i][j]);
            }
        }

}

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37: {//left
            if(moveLeft()){
                updateBoard();
                //setTimeout("updateBoard()",200);
                genarateOneGrid();
                if(isGameOver()){
                    setTimeout("window.alert('Game over!')",300);
                }
            }
            break;
        }
        case 38: {//up
            if(moveUp()){
                updateBoard();
                //setTimeout("updateBoard()",200);
                genarateOneGrid();
                if(isGameOver()){
                    setTimeout("window.alert('Game over!')",300);
                }
            }
            break;
        }
        case 39: {//right
            if(moveRight()){
                updateBoard();
                //setTimeout("updateBoard()",200);
                genarateOneGrid();
                if(isGameOver()){
                    setTimeout("window.alert('Game over!')",300);
                }
            }
            break;
        }
        case 40: {//down
            if(moveDown()){
                updateBoard();
                //setTimeout("updateBoard()",200);
                genarateOneGrid();
                if(isGameOver()){
                    setTimeout("window.alert('Game over!')",300);
                }
            }
            break;
        }
        default:break;
    }
})