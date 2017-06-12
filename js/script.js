// My Script 

$("document").ready(function(){

    var a=[-1,-1,-1,-1,-1,-1,-1,-1,-1]; // person => X (0/even) and computer => O (1/odd)
    var turn=0;
    var game=1;
    var Ch=["X","O"]; // person => X (0/even) and computer => O (1/odd)


    function check(){
        // return => 0 for no result and => 1 for You Won and => 2 for You Loss

        //diagonal check
        if((a[0]==a[4] && a[0]==a[8] && a[0]==0) || (a[2]==a[4] && a[2]==a[6] && a[2]==0))
            return 1;
        else if((a[0]==a[4] && a[0]==a[8] && a[0]==1) || (a[2]==a[4] && a[2]==a[6] && a[2]==1))
            return 2;

        // horizontal check
        if((a[0]==a[1] && a[1]==a[2] && a[0]==0) || (a[3]==a[4] && a[4]==a[5] && a[3]==0) || (a[6]==a[7] && a[7]==a[8] && a[6]==0))
            return 1;
        else if((a[0]==a[1] && a[1]==a[2] && a[0]==1) || (a[3]==a[4] && a[4]==a[5] && a[3]==1) || (a[6]==a[7] && a[7]==a[8] && a[6]==1))
            return 2;

        //vertical check
        if((a[0]==a[3] && a[3]==a[6] && a[0]==0) || (a[1]==a[4] && a[4]==a[7] && a[1]==0) || (a[2]==a[5] && a[5]==a[8] && a[2]==0))
            return 1;
        if((a[0]==a[3] && a[3]==a[6] && a[0]==1) || (a[1]==a[4] && a[4]==a[7] && a[1]==1) || (a[2]==a[5] && a[5]==a[8] && a[2]==1))
            return 2;
        return 0;
    }

    function dis(i){
        var b="#b"+i;
        if(a[i] == -1 && game){
            a[i]=turn&1;
            $(b).children().html(Ch[(turn&1)]);
            turn=turn+1;
            $(b).children().css("display","inherit");
            var r=check();
            console.log("=>");
            console.log(a[0]+","+a[1]+","+a[2]);
            console.log(a[3]+","+a[4]+","+a[5]);
            console.log(a[6]+","+a[7]+","+a[8]);
            console.log("result "+r+" and turn "+turn);
            if(r!=0 || turn==9){
                if(r==1)
                    $('#statement').html("You Won");
                else if(r==2)
                    $('#statement').html("I Won");
                else if(turn==9)
                    $('#statement').html("Match Draw");
                game=0;
                $('#statement').css("display","block");
                window.location.href="#statement";
            }
            return 1;
        }
        return 0;
    }
    
    
    $('#b0').click(function(){ 
        if(dis(0)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b1').click(function(){ 
        if(dis(1)==1)
            window.setTimeout(computer,500); 
    });
    
    $('#b2').click(function(){ 
        if(dis(2)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b3').click(function(){ 
        if(dis(3)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b4').click(function(){ 
        if(dis(4)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b5').click(function(){ 
        if(dis(5)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b6').click(function(){ 
        if(dis(6)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b7').click(function(){ 
        if(dis(7)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#b8').click(function(){ 
        if(dis(8)==1) 
            window.setTimeout(computer,500); 
    });
    
    $('#replay').click(function(){
        window.location.href="index.html";
    });


    function computer(){

        var cnt=[0,0,0,0,0,0,0,0,0],p=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
        // attack
        for(var i=0;i<9;i++){
            if(a[i]==1){
                cnt[Math.floor(i/3)]=cnt[Math.floor(i/3)]+1;
                cnt[3+i%3]=cnt[3+i%3]+1;
                if(i%4==0)
                    cnt[6]=cnt[6]+1;
                if(i==2 || i==4 || i==6)
                    cnt[7]=cnt[7]+1;
            }
            else if(a[i]==-1){
                p[Math.floor(i/3)]=i;
                p[3+i%3]=i;
                if(i%4==0)
                    p[6]=i;
                if(i==2 || i==4 || i==6)
                    p[7]=i;
            }
        }
        for(var i=0;i<8;i++){
            if(cnt[i]==2 && p[i]!=-1){
                dis(p[i]);
                return;
            }
            p[i]=-1;cnt[i]=0;
        }
        // defend
        for(var i=0;i<9;i++){
            if(a[i]==0){
                cnt[Math.floor(i/3)]=cnt[Math.floor(i/3)]+1;
                cnt[3+i%3]=cnt[3+i%3]+1;
                if(i%4==0)
                    cnt[6]=cnt[6]+1;
                if(i==2 || i==4 || i==6)
                    cnt[7]=cnt[7]+1;
            }
            else if(a[i]==-1){
                p[Math.floor(i/3)]=i;
                p[3+i%3]=i;
                if(i%4==0)
                    p[6]=i;
                if(i==2 || i==4 || i==6)
                    p[7]=i;
            }
        }
        for(var i=0;i<8;i++){
            if(cnt[i]==2 && p[i]!=-1){
                dis(p[i]);
                return;
            }
            p[i]=-1;cnt[i]=0;
        }
        if(a[4]==-1){
            dis(4);
            return;
        }
        if(turn==1){
            dis(0);
            return;
        }
        if(turn==3){
            if(a[4]==0){
                dis(2);
                return;
            }
            p[0]=p[1]=-1;
            var j=0;
            for(var i=0;i<9;i++){
                if(a[i]==0){
                    p[j]=i;j++;
                }
            }
            if((p[0]==3 && p[1]==5) || (p[0]==2 && p[1]==7)){
                dis(0);
                return;
            }
            if(p[0]+p[1]==8){
                dis(1);
                return;
            }
            if(p[0]==0 || p[0]==1){
                if(p[1]==5 || p[1]==8){
                    dis(2);
                    return;
                }
                else if(p[1]==3 || p[1]==6){
                    dis(0);
                    return;
                }
                else{
                    dis(6);
                    return;
                }
            }
            else if(p[0]==1 || p[0]==2){
                if(p[1]==3 || p[1]==6){
                    dis(0);
                    return;
                }
                else{
                    dis(8);
                    return;
                }
            }
            else if(p[0]==3){
                dis(6);
                return;
            }
            dis(8);
            return;
        }
        for(var i=0;i<9;i++){
            if(a[i]==-1){
                dis(i);
                return;
            }
        }
    }

 
});