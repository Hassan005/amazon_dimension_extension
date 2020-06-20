// var N1=7.78,N2=8.58,N3=9.96,N4=11.35,N5=12.78;


function setup()
{
    noCanvas();
  
let bgPage = chrome.extension.getBackgroundPage();
var meaurements =bgPage.measurements;
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

var vol = meaurements.split('x');
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

createElement("h3","Length")
createP(L)
createElement("h3","Width")
createP(W)
createElement("h3","Hight")
createP(H)


createElement("h3","Volume")
volume=L * W * H
createP(volume)
icubicfoot=12 * 12* 12

createElement("h3","1 cu Foot")
createP(icubicfoot)

usps_cost=volume /  icubicfoot

createElement("h3","USPS Cost")
usps_cost=parseFloat(usps_cost.toFixed(1))
// usps_cost=Math.round(usps_cost)
createP(usps_cost)


createElement("h3","Shiping Wight")
createP(item_weight)
// var N1=7.78,N2=8.58,N3=9.96,N4=11.35,N5=12.78;
if (usps_cost >= 0.1 &&  usps_cost <=0.2)
{
    createElement("h3","National Average")
    createP("7.78 $") 

}
if (usps_cost >= 0.2 &&  usps_cost <=0.3)
{
    createElement("h3","National Average")
    createP("8.58 $") 

}
if (usps_cost >= 0.3 &&  usps_cost <= 0.4)
{
    createElement("h3","National Average")
    createP("9.96 $") 

}
if (usps_cost >= 0.4 &&  usps_cost <= 0.5)
{
    createElement("h3","National Average")
    createP("11.35 $") 

}
if (usps_cost >= 0.5 &&  usps_cost <= 0.6)
{
    createElement("h3","National Average")
    createP("12.78 $") 

}


}



  


