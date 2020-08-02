function showNumberWithAnimation(i,j,tick) {
    var elem=$("#ncell"+i+j);
    elem.css("background-color",getBackgroundColor(board[i][j]));
    elem.css("color",getNumberColor(board[i][j]));
    elem.text(tick);
    elem.animate({width:"100px",height:"100px",left:(j*120+20)+"px",top:(i*120+20)+"px"},200);
}

function moveAnimation(fromx,fromy,tox,toy) {
    //var elem=$("#ncell"+fromx+fromy);
    //elem.animate({left:(toy*120+20)+"px",top:(tox*120+20)+"px"},200);
}