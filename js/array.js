let color={
    colorName:"green",
    colorHexValue:"#978464",
    colorRgbValue:"rgb(200,0,20)",
    colorHslValue:"hsl(0,100%,50%)",
}

// console.log(color);


// let colors=['red','blue','green']

// let red = ['#985495', 'rgb(200,0,20)','hsl(0,100%,50%)' ];
// let blue = ['#985495', 'rgb(200,0,20)','hsl(0,100%,50%)' ];
// let green = ['#985495', 'rgb(200,0,20)','hsl(0,100%,50%)' ];

// console.log(colors);

let colors = [
    {
        name: 'reddddddd',
        HexValue: "#978464",
        RgbValue: "rgb(200,0,20)"
    },
    {
        name: 'blue',
        HexValue: "#978464",
        RgbValue: "rgb(200,0,20)"
    },
    {
        name: 'green',
        HexValue: "#978464",
        RgbValue: "rgb(200,0,20)"
    }
];


colors[0].name = 'red';
console.log(colors);


colors.forEach(color => {
    console.log(color.name);
});


console.log(colors[0].name);


