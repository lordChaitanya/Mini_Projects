const board=document.querySelector(".board")

const single_block_height=80;
const single_block_width=80;

const num_block_cols= Math.floor(board.clientWidth/single_block_width);
const num_block_rows=Math.floor(board.clientHeight/single_block_height);

const blocks=[]

const snake =[{
    x:1,
    y:3
},{
    x:1,
    y:4
},{
    x:1,
    y:5
}]

let direction = "down";

for(let row=0;row<num_block_rows;row++){
    for(let col=0;col<num_block_cols;col++){
        const block=document.createElement('div')
        block.classList.add("block")
        board.appendChild(block)
        block.innerText=`${row},${col}`
        blocks[`${row},${col}`]=block
    }

}


function render(){
    snake.forEach(segment=>{
        blocks[`${segment.x},${segment.y}`].classList.add("fill")

    })

}
setInterval(()=>{
    let head=null;
if(direction==="left"){
    head= {x:snake[0].x, y:snake[0].y -1
}
}

else if(direction==="right"){
    head= {x:snake[0].x, y:snake[0].y +1
}
}
else if(direction==="up"){
    head= {x:snake[0].x -1, y:snake[0].y 
}
}   
else if(direction==="down"){
    head= {x:snake[0].x +1, y:snake[0].y 
}
}




snake.forEach(segment=>{
    blocks[`${segment.x},${segment.y}`].classList.remove("fill")    

})
snake.unshift(head)
snake.pop()


    render()
},400)

addEventListener("keydown",(e)=>{
    if(e.key==="ArrowLeft" && direction!=="right"){
        direction="left"
    }
    if(e.key==="ArrowRight" && direction!=="left"){
        direction="right"
    }
    if(e.key==="ArrowUp" && direction!=="down"){
        direction="up"
    }
    if(e.key==="ArrowDown" && direction!=="up"){
        direction="down"
    }
})