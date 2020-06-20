console.log("bsckground running")

chrome.runtime.onMessage.addListener(receiver);
window.measurements="Hello There"
window.item_weight=" N/A"
function receiver(request,sender,sendResponse)
{
    if (request.dimensions)
    {
        window.measurements=request.dimensions
        window.item_weight=request.fitem_weight
    }else{
        window.measurements=request.dimensions2
        window.item_weight=request.shiping_weight
    }
    // window.measurements=request
    console.log(request,"request*************************")
    // console.log(window.title)
}
