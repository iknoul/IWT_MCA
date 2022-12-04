  function move(event)
    {
var k=event.keyCode; 

var chr = {

    updown : function (){
            var y=0;
            if (k==38) 
                {--y;
            }else if (k==40)
                 {++y;}
            return y; 
        },

    leftright : function (){
        var x=0;
        if (k==37) 
            {--x;
        }else if (k==39) 
            {++x;}
        return x; 
            }


    };

    chrId.style.top = (chr.updown())+"px";
    chrId.style.left = (chr.leftright())+"px";

}
