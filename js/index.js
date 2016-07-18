window.onload=function(){
    var imb=document.querySelectorAll(".left-nav .imb");
    var list=document.querySelectorAll(".right-content .list");
    list[0].style.display="block";
        window.onresize=function(){
            change();
        }
    change();
    function change(){
        var sx=document.documentElement.clientWidth;
        if(sx>768){
            for(var i=0;i<list.length;i++){
                imb[i].index=i;
                imb[1].style.borderBottom="1px solid #b9b9b9";
                imb[i].onclick=function(){
                    for(var j=0;j<list.length;j++){
                        list[j].style.display="none";
                        imb[j].style.borderRight="1px solid #b9b9b9";
                        imb[j].style.borderBottom="1px solid #b9b9b9";
                    }
                    list[this.index].style.display="block";
                    imb[this.index].style.borderRight="0";
                }
            }
        }else{
            for(var i=0;i<list.length;i++){
                imb[i].index=i;
                imb[0].style.borderBottom=0;
                imb[1].style.borderRight="1px solid #b9b9b9";
                imb[i].onclick=function(){
                    for(var j=0;j<list.length;j++){
                        list[j].style.display="none";
                        imb[j].style.borderBottom="1px solid #b9b9b9";
                    }
                    list[this.index].style.display="block";
                    imb[this.index].style.borderBottom="1px solid transparent";
                }
            }
        }
    }

}