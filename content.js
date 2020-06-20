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


var xpath = "//th[normalize-space(text())='Package Dimensions']";
var xpath2 = "//b[normalize-space(text())='Product Dimensions:']";


var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
if (matchingElement){
    console.log( "matchingElement.nextSibling.nextSibling.textContent");
dimensions=matchingElement.nextSibling.nextSibling.textContent;
dimensions = dimensions.replace(/\s/g,'')
console.log(dimensions)
chrome.runtime.sendMessage(dimensions);

}else{//*[@id="detail-bullets"]/table/tbody/tr/td/div[2]/ul/li[1]/b
    var matchingElement2 = document.evaluate(xpath2, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    console.log( "ops");
    dimensions2=matchingElement2.nextSibling.textContent;
    // console.log(dimensions2)
    dimensions2 = dimensions2.replace(/\s/g,'')
    console.log(dimensions2)
    chrome.runtime.sendMessage(dimensions2);
}


