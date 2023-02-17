const frames = document.querySelectorAll('.frames');
const framesContainers = document.querySelectorAll('.containers');

console.log(framesContainers)


function modifyNeighborEvent(arrayForEach,propsCssBefore,valuePropsBefore,propsCssAfter,valuePropsAfter,event){
    return arrayForEach.forEach((el,idx)=>{
        el.setAttribute('clicked',false)
        console.log(arrayForEach[idx].getAttribute("clicked"))
        if(event === "mouseenter"){
            el.addEventListener(event,function(){
                if (idx != 0){
                    arrayForEach[idx-1].style[propsCssBefore] = valuePropsBefore;
                }
                if(idx != arrayForEach.length -1){
                    arrayForEach[idx+1].style[propsCssAfter] = valuePropsAfter;
                }
            })
        }
        if(event === "mouseout"){
            el.addEventListener(event,function(){
                if (idx != 0){
                    arrayForEach[idx-1].style[propsCssBefore] = 'inherit';
                }
                if(idx != arrayForEach.length -1){
                    arrayForEach[idx+1].style[propsCssAfter] = 'inherit';
                }

            })
        }
        if(event === "click"){
            arrayForEach.forEach(element=>{
                element.style[propsCssAfter] = "inherit";
                element.style[propsCssBefore] = "inherit";
            })
            el.addEventListener(event,function(){
                arrayForEach.forEach(e=>{
                    e.setAttribute("clicked",false)
                })    
                el.setAttribute("clicked",true);
                if (idx != 0){
                    arrayForEach[idx-1].style[propsCssBefore] = valuePropsBefore;
                }
                if(idx != arrayForEach.length -1){
                    arrayForEach[idx+1].style[propsCssAfter] = valuePropsAfter;
                }
                let valueMargin = -idx*100;
                console.log(valueMargin);
                framesContainers[0].style.marginLeft = valueMargin + '%';
            })
        }
    })
}

modifyNeighborEvent(frames,'border-top-right-radius','20px','border-top-left-radius','20px','mouseenter')
modifyNeighborEvent(frames,'border-top-right-radius','20px','border-top-left-radius','20px','mouseout')
modifyNeighborEvent(frames,'border-top-right-radius','20px','border-top-left-radius','20px','click')