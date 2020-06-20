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

var matchingElement = document.evaluate(package_dimensions, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (matchingElement){
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
          chrome.runtime.sendMessage(dimensions,fitem_weight);
        }
        else
        {
          // console.log("shiping weight 1******************",shiping_weight_xpath.nextSibling.textContent)
          fshiping_weight=shiping_weight_xpath.nextSibling.textContent
          chrome.runtime.sendMessage(dimensions,fshiping_weight);
        }

        // chrome.runtime.sendMessage(dimensions);
}
else
{//*[@id="detail-bullets"]/table/tbody/tr/td/div[2]/ul/li[1]/b
    var matchingElement2 = document.evaluate(product_dimensions, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log( "ops");
    dimensions2=matchingElement2.nextSibling.textContent;
    // console.log(dimensions2)
    dimensions2 = dimensions2.replace(/\s/g,'')
    console.log(dimensions2)

    //***************item_weight */

    var item_weight_xpath = document.evaluate(item_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var shiping_weight_xpath = document.evaluate(shiping_weight, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (item_weight_xpath)
    {
      // console.log("item weight ******************",item_weight_xpath.nextSibling.nextSibling.textContent)
      fitem_weight=item_weight_xpath.nextSibling.nextSibling.textContent
      chrome.runtime.sendMessage(dimensions2,fitem_weight);
    }
    else{
      // console.log("shiping weight ******************",shiping_weight_xpath.nextSibling.textContent)
      fshiping_weight=shiping_weight_xpath.nextSibling.textContent
      chrome.runtime.sendMessage(dimensions2,shiping_weight);
    }
    
    // chrome.runtime.sendMessage(dimensions2);



}


