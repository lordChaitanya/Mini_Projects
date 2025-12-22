const board=document.querySelector(".board")

const single_block_height=30;
const single_block_width=30;

const num_block_cols= Math.floor(board.clientWidth/single_block_width);
const num_block_rows=Math.floor(board.clientHeight/single_block_height);

for(let i=0;i<num_block_rows*num_block_cols;i++){
    const block =document.createElement('div')
    block.classList.add("block")
    board.appendChild(block)
}