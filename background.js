console.log("bsckground running")

chrome.runtime.onMessage.addListener(receiver);
window.measurements="Hello There"
window.item_weight=" N/A"
function receiver(request,sender,sendResponse)
{
    
    window.measurements=request
    console.log(request,"request*************************")
    // console.log(window.title)
}
