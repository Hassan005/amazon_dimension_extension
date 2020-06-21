// var N1=7.78,N2=8.58,N3=9.96,N4=11.35,N5=12.78;


function setup()
{
    // noCanvas();
    createCanvas(240, 40); 
  
let bgPage = chrome.extension.getBackgroundPage();
var measurements =bgPage.measurements;

var item_weight=bgPage.item_weight;
// createP(meaurements)
// console.log(title)
// var dimensions = title.replace(/\s/g,'')
// console.log(dimensions)

// var dimensions = dimensions.replace(/\s/g,'')
// console.log(dimensions)
// var fields = dimensions.split('x');
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
// FL=parseFloat(L)
// FW=parseFloat(W)
// FH=parseFloat(H)
// console.log(L)
// console.log(W)
// console.log(H)
// createElement("h3","Length")
// createP(FL)
// createElement("h3","Width")
// createP(FW)
// createElement("h3","Hight")
// createP(FH)

// createElement("h3","Volume")
// volume=FL * FW * FH
// createP(volume)
// icubicfoot=12 * 12* 12

// createElement("h3","1 cu Foot")
// createP(icubicfoot)

// usps_cost=volume /  icubicfoot

// createElement("h3","USPS Cost")
// createP(usps_cost)

// {  ************* cleaning the text from xpath ***************  }
// meaurements=parseFloat(meaurements)
var vol=""
if(measurements.includes('x')){
     vol = measurements.split('x');
    
}
else
{
    measurements=measurements
}


if(item_weight.includes('('))
{
    item_weight = item_weight.split('(');
    item_weight=item_weight[0]
}
else if (item_weight.includes('ounces'))
{
    item_weight = item_weight.split('ounces');
    item_weight=item_weight[0] 
    item_weight=parseFloat(item_weight)
    item_weight=item_weight / 16
    item_weight=item_weight + " Pounds "
}
else{
    item_weight=item_weight
}

// console.log(vol)
var length = vol[0]
var width = vol[1]
var hight = vol[2]
// console.log(length,width,hight)

L=parseFloat(length)
W=parseFloat(width)
H=parseFloat(hight)
var volume=""
if (L && W && H)
{
    createElement("h3","Length")
    createP(L)
    createElement("h3","Width")
    createP(W)
    createElement("h3","Hight")
    createP(H)

    createElement("h3","Volume")
    volume=L * W * H
}
else{
    L=measurements
    W=measurements
    H=measurements

    createElement("h3","Length")
    createP(L)
    createElement("h3","Width")
    createP(W)
    createElement("h3","Hight")
    createP(H)
}




createP(volume)
icubicfoot=12 * 12* 12

createElement("h3","1 cu Foot")
createP(icubicfoot)

usps_cost=volume /  icubicfoot

createElement("h3","USPS Cost")
usps_cost=parseFloat(usps_cost.toFixed(2))
// usps_cost=Math.round(usps_cost)
createP(usps_cost)


createElement("h3","Shiping Wight")
createP(item_weight)
// var N1=7.78,N2=8.58,N3=9.96,N4=11.35,N5=12.78;
if (usps_cost >= 0.1 &&  usps_cost <0.2)
{
    createElement("h3","National Average")
    createP("7.78 $") 
    createElement("h3","L, 1 & 2")
    createP("7.02 $")
    createElement("h3","Zone 3")
    createP("7.35 $")
    createElement("h3","Zone 4")
    createP("$7.56 $")
    createElement("h3","Zone 5")
    createP("7.80 $")
    createElement("h3","Zone 6")
    createP("7.98 $")
    createElement("h3","Zone 7")
    createP("8.15 $")
    createElement("h3","Zone 8")
    createP("8.42 $")
    createElement("h3","Zone 9")
    createP("11.40 $")
    
}
else if (usps_cost >= 0.2 &&  usps_cost <0.3)
{
    createElement("h3","National Average")
    createP("8.58 $") 

    createElement("h3","L, 1 & 2")
    createP("7.46 $")
    createElement("h3","Zone 3")
    createP("7.80 $")
    createElement("h3","Zone 4")
    createP("8.02 $")
    createElement("h3","Zone 5")
    createP("8.71 $")
    createElement("h3","Zone 6")
    createP("9.00 $")
    createElement("h3","Zone 7")
    createP("9.22 $")
    createElement("h3","Zone 8")
    createP("9.56 $")
    createElement("h3","Zone 9")
    createP("13.15 $")

}
else if (usps_cost >= 0.3 &&  usps_cost < 0.4)
{
    createElement("h3","National Average")
    createP("9.96 $") 

    createElement("h3","L, 1 & 2")
    createP("8.04 $")
    createElement("h3","Zone 3")
    createP("8.26 $")
    createElement("h3","Zone 4")
    createP("8.55 $")
    createElement("h3","Zone 5")
    createP("9.65 $")
    createElement("h3","Zone 6")
    createP("10.98 $")
    createElement("h3","Zone 7")
    createP("11.58 $")
    createElement("h3","Zone 8")
    createP("12.29 $")
    createElement("h3","Zone 9")
    createP("19.12 $")

}
else if (usps_cost >= 0.4 &&  usps_cost < 0.5)
{
    createElement("h3","National Average")
    createP("11.35 $")
    
    createElement("h3","L, 1 & 2")
    createP("8.21  $")
    createElement("h3","Zone 3")
    createP("8.57 $")
    createElement("h3","Zone 4")
    createP("8.93 $")
    createElement("h3","Zone 5")
    createP("10.31 $")
    createElement("h3","Zone 6")
    createP("12.78 $")
    createElement("h3","Zone 7")
    createP("14.02 $")
    createElement("h3","Zone 8")
    createP("16.02 $")
    createElement("h3","Zone 9")
    createP("24.28 $")

}
else if (usps_cost >= 0.5 &&  usps_cost < 0.6)
{
    createElement("h3","National Average")
    createP("12.78 $") 

    createElement("h3","L, 1 & 2")
    createP("8.34 $")
    createElement("h3","Zone 3")
    createP("8.84 $")
    createElement("h3","Zone 4")
    createP("9.42 $")
    createElement("h3","Zone 5")
    createP("11.15 $")
    createElement("h3","Zone 6")
    createP("14.98 $")
    createElement("h3","Zone 7")
    createP("16.89 $")
    createElement("h3","Zone 8")
    createP("19.24 $")
    createElement("h3","Zone 9")
    createP("29.88 $")

}
else{
    createElement("h3","National Average ")
    createP("Class not defined") 
}


}



  


