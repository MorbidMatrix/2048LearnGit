function moveLeft() {
    var flag=false;
    var cntner=[],cnt;

    for(var i=0;i<4;i++){
        var j=0,pos=false,sign;
        //judge if this col is full of 0s
        for(j=0;j<4;j++)
            if(board[i][j]!=0){
                pos=true;
                break;
            }
        if(!pos)continue;

        //judge if this col is alright to go
        //first check combine
        pos=false;
        j=0;
        while(j<4&&board[i][j]!=0){
            if(board[i][j]==board[i][j+1]){
                j+=2;
                pos=flag=true;
            }else j++;
        }
        //to see if it can still move
        for(j=3;j>=0;j--)
            if(board[i][j]!=0){
                sign=j;
                break;
            }
        for(j=0;j<=sign;j++)
            if(board[i][j]==0){
                pos=true;
                break;
            }
        if(!pos)continue;
        flag=true;

        //mainMove
        cnt=-1;
        for(j=0;j<4;j++)if(board[i][j]!=0)cntner[++cnt]=board[i][j],moveAnimation(i,j,i,cnt);
        for(j=0;j<=cnt;j++)board[i][j]=cntner[j];
        for(j=cnt+1;j<4;j++)board[i][j]=0;

        //combine
        j=0;
        while(j<4&&board[i][j]!=0){
            if(board[i][j]==board[i][j+1]){
                board[i][j]*=2;
                board[i][j+1]=0;
                score+=board[i][j];
                j+=2;
            }else j++;
        }

        //move again
        cnt=-1;
        for(j=0;j<4;j++)if(board[i][j]!=0)cntner[++cnt]=board[i][j];
        for(j=0;j<=cnt;j++)board[i][j]=cntner[j];
        for(j=cnt+1;j<4;j++)board[i][j]=0;
    }

    $("#score").text(score);
    return flag;
}

function moveRight() {
    var flag=false;
    var cntner=[],cnt;

    for(var i=0;i<4;i++){
        var j=0,pos=false,sign;
        //judge if this col is full of 0s
        for(j=0;j<4;j++)
            if(board[i][j]!=0){
                pos=true;
                break;
            }
        if(!pos)continue;

        //judge if this col is alright to go
        //first check combine
        pos=false;
        j=3;
        while(j>=0&&board[i][j]!=0){
            if(board[i][j]==board[i][j-1]){
                j-=2;
                pos=flag=true;
            }else j--;
        }
        //to see if it can still move
        for(j=0;j<=3;j++)
            if(board[i][j]!=0){
                sign=j;
                break;
            }
        for(j=3;j>=sign;j--)
            if(board[i][j]==0){
                pos=true;
                break;
            }
        if(!pos)continue;
        flag=true;

        //mainMove
        cnt=4;
        for(j=3;j>=0;j--)if(board[i][j]!=0)cntner[--cnt]=board[i][j],moveAnimation(i,j,i,cnt);
        for(j=3;j>=cnt;j--)board[i][j]=cntner[j];
        for(j=cnt-1;j>=0;j--)board[i][j]=0;

        //combine
        j=3;
        while(j>=0&&board[i][j]!=0){
            if(board[i][j]==board[i][j-1]){
                board[i][j]*=2;
                board[i][j-1]=0;
                score+=board[i][j];
                j-=2;
            }else j--;
        }

        //move again
        cnt=4;
        for(j=3;j>=0;j--)if(board[i][j]!=0)cntner[--cnt]=board[i][j];
        for(j=3;j>=cnt;j--)board[i][j]=cntner[j];
        for(j=cnt-1;j>=0;j--)board[i][j]=0;
    }

    $("#score").text(score);
    return flag;
}

function moveUp() {
    var flag=false;
    var cntner=[],cnt;

    for(var i=0;i<4;i++){
        var j=0,pos=false,sign;
        //judge if this col is full of 0s
        for(j=0;j<4;j++)
            if(board[j][i]!=0){
                pos=true;
                break;
            }
        if(!pos)continue;

        //judge if this col is alright to go
        //first check combine
        pos=false;
        j=0;
        while(j<4&&board[j][i]!=0){
            if(board[j][i]==board[j+1][i]){
                j+=2;
                pos=flag=true;
            }else j++;
        }
        //to see if it can still move
        for(j=3;j>=0;j--)
            if(board[j][i]!=0){
                sign=j;
                break;
            }
        for(j=0;j<=sign;j++)
            if(board[j][i]==0){
                pos=true;
                break;
            }
        if(!pos)continue;
        flag=true;

        //mainMove
        cnt=-1;
        for(j=0;j<4;j++)if(board[j][i]!=0)cntner[++cnt]=board[j][i],moveAnimation(j,i,cnt,i);
        for(j=0;j<=cnt;j++)board[j][i]=cntner[j];
        for(j=cnt+1;j<4;j++)board[j][i]=0;

        //combine
        j=0;
        while(j<4&&board[j][i]!=0){
            if(board[j][i]==board[j+1][i]){
                board[j][i]*=2;
                board[j+1][i]=0;
                score+=board[j][i];
                j+=2;
            }else j++;
        }

        //move again
        cnt=-1;
        for(j=0;j<4;j++)if(board[j][i]!=0)cntner[++cnt]=board[j][i];
        for(j=0;j<=cnt;j++)board[j][i]=cntner[j];
        for(j=cnt+1;j<4;j++)board[j][i]=0;
    }

    $("#score").text(score);
    return flag;
}

function moveDown() {
    var flag=false;
    var cntner=[],cnt;

    for(var i=0;i<4;i++){
        var j=0,pos=false,sign;
        //judge if this col is full of 0s
        for(j=0;j<4;j++)
            if(board[j][i]!=0){
                pos=true;
                break;
            }
        if(!pos)continue;

        //judge if this col is alright to go
        //first check combine
        pos=false;
        j=3;
        while(j>=0&&board[j][i]!=0){
            if(board[j][i]==board[j-1][i]){
                j-=2;
                pos=flag=true;
            }else j--;
        }
        //to see if it can still move
        for(j=0;j<=3;j++)
            if(board[j][i]!=0){
                sign=j;
                break;
            }
        for(j=3;j>=sign;j--)
            if(board[j][i]==0){
                pos=true;
                break;
            }
        if(!pos)continue;
        flag=true;

        //mainMove
        cnt=4;
        for(j=3;j>=0;j--)if(board[j][i]!=0)cntner[--cnt]=board[j][i],moveAnimation(j,i,cnt,i);
        for(j=3;j>=cnt;j--)board[j][i]=cntner[j];
        for(j=cnt-1;j>=0;j--)board[j][i]=0;

        //combine
        j=3;
        while(j>=0&&board[j][i]!=0){
            if(board[j][i]==board[j-1][i]){
                board[j][i]*=2;
                board[j-1][i]=0;
                score+=board[j][i];
                j-=2;
            }else j--;
        }

        //move again
        cnt=4;
        for(j=3;j>=0;j--)if(board[j][i]!=0)cntner[--cnt]=board[j][i];
        for(j=3;j>=cnt;j--)board[j][i]=cntner[j];
        for(j=cnt-1;j>=0;j--)board[j][i]=0;
    }

    $("#score").text(score);
    return flag;
}

function isGameOver() {
    for(var i=0;i<4;i++)
        for(var j=0;j<4;j++){
            if(board[i][j]==0)return false;
            if(beside(i,j))return false;
        }
    return true;
}

//if (x,y) is same sided then return true;verse visa
function beside(x,y) {
    if(x+1<4)
        if(board[x][y]==board[x+1][y])return true;
    if(y+1<4)
        if(board[x][y]==board[x][y+1])return true;
    if(x-1>=0)
        if(board[x][y]==board[x-1][y])return true;
    if(y-1>=0)
        if(board[x][y]==board[x][y-1])return true;
}

function getBackgroundColor(feat) {
    switch (feat) {
        case 2:return "#eee4da";
        case 4:return "#ede0c8";
        case 8:return "#f2b179";
        case 16:return "#f59563";
        case 32:return "#f67c5f";
        case 64:return "#f65e3b";
        case 128:return "#edcf72";
        case 256:return "#edcc61";
        case 512:return "#9c0";
        case 1024:return "#33b5e5";
        case 2048:return "#09c";
        case 4096:return "#a6c";
        case 8192:return "#93c";
        case "*":return "#555454";
    }
}

function getNumberColor(feat) {
    if(feat==2||feat==4)return "rgb(119,110,101)";
    else return "white";
}

function genarateOneGrid(tick) {
    var x=Math.floor(Math.random()*4);
    var y=Math.floor(Math.random()*4);
    var times=0;
    while(times<100&&board[x][y]!=0){
        x=Math.floor(Math.random()*4);
        y=Math.floor(Math.random()*4);
        times++;
    }
    if(times==100){
        for(var i=0;i<4;i++)
            for(var j=0;j<4;j++)
                if(board[i][j]==0)
                    x=i,y=j;
    }
    if(arguments.length==0){
        if(Math.random()<0.7)board[x][y]=2;
        else board[x][y]=4;
    }else board[x][y]=tick;
    showNumberWithAnimation(x,y,board[x][y]);
}