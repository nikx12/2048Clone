let grid;

function setup(){
    // createCanvas(300,300)
    grid=[[0,0,0,0], [0,0,0,0], [0,0,0,0],[0,0,0,0] ];
    console.table(grid);
    addNumber();
    addNumber();
}

function addNumber(){
  //  let x, y;
    let options=[];
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(grid[i][j]===0){
                options.push({x:i,y:j});
                // console.log(options)
            }
        }
    }
    if(options.length>0){
        let spot= Math.random(options);
        console.log(spot)
        let r = Math.random(1);
        console.log(r);
       // console.log(grid[spot.x]) issue is here
        grid[spot.x][spot.y] = (r> 0.4)? 2:4;
    }
}

setup();