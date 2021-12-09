let Darkmode = false;

export function SetDarkMode(){
    let texts = document.getElementsByClassName("textColor");
    let bgs = document.getElementsByClassName("bgColor");
    if (!Darkmode){
        for(let i=0;i<texts.length;i++){
            texts[i].style.color='rgb(255,255,255)'
        }
        for(let i=0;i<bgs.length;i++){
            bgs[i].style.backgroundColor='rgb(0,0,0)'
        }
        Darkmode=true;
    }else{
        for(let i=0;i<texts.length;i++){
            texts[i].style.color='rgb(0,0,0)'
        }
        for(let i=0;i<bgs.length;i++){
            bgs[i].style.backgroundColor='rgb(255,255,255)'
        }
        Darkmode=false;
    }

    return Darkmode;
}

export function getDarkMode(){
    return Darkmode;
}