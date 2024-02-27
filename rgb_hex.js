let color = prompt('Enter a color: ');
const RGB = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let toRGB = (color) => {
    let red = (findIndex(hex,color[1])*16) + (findIndex(hex,color[2])); 
    let green = (findIndex(hex,color[3])*16) + (findIndex(hex,color[4]));
    let blue = (findIndex(hex,color[5])*16) + (findIndex(hex,color[6]));
    

    console.log(`Hex: ${color} = RGB: (${red}, ${green}, ${blue})`)
}
let toHex = (color) => {
    let colors = color.split(',');
    let tempHex = []
    for(i=0;i<colors.length;i++){
        let num1 = Math.floor(colors[i]/16);
        let num2 = colors[i]%16;
        tempHex.push(hex[num1]);
        tempHex.push(hex[num2]);

    }  
    
    console.log(`RGB:(${color} = Hex: #${tempHex[0]}${tempHex[1]}${tempHex[2]}${tempHex[3]}${tempHex[4]}${tempHex[5]})`) 
}

let findIndex = (arr, num) => {
    for (i=0; i < arr.length; i++){
        if(arr[i] == num){
            return i;
        }
    }
}


if(color[0] == '#'){
    toRGB(color);
}else{
    toHex(color);
}