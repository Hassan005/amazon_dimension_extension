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
nu="324"
if ( nu.substring)
{
    console.log("avet")
    dimensions=dimensions
} 
}









// var text= document.getElementById("productTitle").textContent
// console.log(text)

// document.getElementById("text").innerText  =text;



// function getElementByXpath(path)
//  {
//     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//   }
//   text=getElementByXpath('//*[@id="detail-bullets"]/table/tbody/tr/td/div/ul/li[1]')
//   console.log( text.textContent);

//   if (text)
{
    // chrome.runtime.sendMessage(text.textContent);
    // console.log( text.textContent);
   }


var package_dimensions = "//th[normalize-space(text())='Package Dimensions']";
var product_dimensions = "//b[normalize-space(text())='Product Dimensions:']";
var item_weight = "//th[normalize-space(text())='Item Weight']";
var shiping_weight = "//b[normalize-space(text())='Shipping Weight:']";
var product_dimensions_span = "//span[normalize-space(text())='Package Dimensions:']";


var matchingElement = document.evaluate(package_dimensions, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var item_weight_xpath = document.evaluate(item_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var shiping_weight_xpath = document.evaluate(shiping_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var matchingElement2 = document.evaluate(product_dimensions, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var matching_element_product_dimensions_span = document.evaluate(product_dimensions_span, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (matchingElement)
{
    console.log( "matchingElement.nextSibling.nextSibling.textContent");
dimensions=matchingElement.nextSibling.nextSibling.textContent;
dimensions = dimensions.replace(/\s/g,'')
console.log(dimensions)


// **************item weight*************8

var item_weight_xpath = document.evaluate(item_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var shiping_weight_xpath = document.evaluate(shiping_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (item_weight_xpath)
        {
          // console.log("item weight 1******************",item_weight_xpath.nextSibling.nextSibling.textContent)
          fitem_weight=item_weight_xpath.nextSibling.nextSibling.textContent
          // chrome.runtime.sendMessage(dimensions,fitem_weight);

          chrome.runtime.sendMessage({"dimensions":dimensions,"fitem_weight":fitem_weight});
          
        }
        else if (shiping_weight_xpath)
        {
          // console.log("shiping weight 1******************",shiping_weight_xpath.nextSibling.textContent)
          fshiping_weight=shiping_weight_xpath.nextSibling.textContent
          // chrome.runtime.sendMessage(dimensions,fshiping_weight);
          chrome.runtime.sendMessage({"dimensions":dimensions,"fitem_weight":fshiping_weight});
        }
        else{
          fshiping_weight="Could not find on page"
          fshiping_weight="Could not find on page"
          
        }

        // chrome.runtime.sendMessage(dimensions);
}
else if (matchingElement2)
{
  //*[@id="detail-bullets"]/table/tbody/tr/td/div[2]/ul/li[1]/b

    
      console.log( "ops");
      console.log(matchingElement2)
      dimensions2=matchingElement2.nextSibling.textContent;
      // console.log(dimensions2)
      dimensions2 = dimensions2.replace(/\s/g,'')
      console.log(dimensions2)
  
    

    //***************item_weight */

    // var item_weight_xpath = document.evaluate(item_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    // var shiping_weight_xpath = document.evaluate(shiping_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (item_weight_xpath)
    {
      // console.log("item weight ******************",item_weight_xpath.nextSibling.nextSibling.textContent)
      fitem_weight=item_weight_xpath.nextSibling.nextSibling.textContent
      // chrome.runtime.sendMessage(dimensions2,fitem_weight);
      chrome.runtime.sendMessage({"dimensions2":dimensions2,"fitem_weight":fitem_weight});
      console.log("1")
    }
    else if( shiping_weight_xpath  )
    {
      console.log("2.l")
      fshiping_weight=shiping_weight_xpath.nextSibling.textContent
      chrome.runtime.sendMessage({"dimensions2":dimensions2,"shiping_weight":fshiping_weight});
    }

      // console.log("shiping weight ******************",shiping_weight_xpath.nextSibling.textContent)
    
  
      // chrome.runtime.sendMessage({"dimensions2":dimensions2,"shiping_weight":fshiping_weight});
      // chrome.runtime.sendMessage(dimensions2,shiping_weight);
      
    
    
    // chrome.runtime.sendMessage(dimensions2);



}
else if (matching_element_product_dimensions_span){

  dimensions3=matching_element_product_dimensions_span.nextSibling.nextSibling.textContent;
  dimensions3 = dimensions3.replace(/\s/g,'')
  console.log("dimensions3")
  console.log(dimensions3)

  if (item_weight_xpath)
    {
      // console.log("item weight ******************",item_weight_xpath.nextSibling.nextSibling.textContent)
      fitem_weight=item_weight_xpath.nextSibling.nextSibling.textContent
      // chrome.runtime.sendMessage(dimensions2,fitem_weight);
      chrome.runtime.sendMessage({"dimensions3":dimensions3,"fitem_weight":fitem_weight});
    }
   
      // console.log("shiping weight ******************",shiping_weight_xpath.nextSibling.textContent)
     else if( shiping_weight_xpath  )
     {
        fshiping_weight=shiping_weight_xpath.nextSibling.textContent
        chrome.runtime.sendMessage({"dimensions3":dimensions3,"shiping_weight":fshiping_weight});
      }
      else{
       
        chrome.runtime.sendMessage({"dimensions3":dimensions3,});
      }
     
      // chrome.runtime.sendMessage(dimensions2,shiping_weight);
      // chrome.runtime.sendMessage({"dimensions3":dimensions3,"shiping_weight":fshiping_weight});
    
}
// else if()


else if( shiping_weight_xpath  )
    {
    dimensions3="Could not find on page"
    console.log("i ran now")
    fshiping_weight=shiping_weight_xpath.nextSibling.textContent
    console.log(fshiping_weight)
    chrome.runtime.sendMessage({"dimensions3":dimensions3,"shiping_weight":fshiping_weight});
    }


