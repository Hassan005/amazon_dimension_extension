const { type } = require("os");

dimensions=`7.3x4.6x3.5inches`
// console.log(dimensions)

// console.log(typeof(dimensions))

// var dimensions = dimensions.replace(/\s/g,'')
// console.log(dimensions)
// var volume = dimensions.split('x');
// L=fields[0]
// console.log(L)
// L = L.split(':');
// L=L[1]
// console.log(L)
// W=fields[1]
// fields2=fields[2]
// console.log(fields2)
// var H = fields2.split(';');
// H=H[0]
// L=parseFloat(L)
// W=parseFloat(W)
// H=parseFloat(H)
// console.log(L)
// console.log(W)
// console.log(H)
// console.log(typeof(H))

{ // ************* cleaning the text from xpath *************** // }

var vol = dimensions.split('x');
// console.log(vol)
var length = vol[0]
var width = vol[1]
var hight = vol[2]
// console.log(length,width,hight)

L=parseFloat(length)
W=parseFloat(width)
H=parseFloat(hight)
item_weight=" 3 pounds "


if(item_weight.includes('('))
{
    item_weight = item_weight.split('(');
    console.log(item_weight[0])
}

else{
    // item_weight = item_weight.split('(');
console.log("Nope")
}

usps_cost=0.55355
console.log(parseFloat(3.16159.toFixed(1)))
item_weight = item_weight.split('(');
item_weight=item_weight[0] + " Pounds "
}

