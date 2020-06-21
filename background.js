console.log("bsckground running")

chrome.runtime.onMessage.addListener(receiver);
window.measurements="Could no find on page "
window.item_weight="Could no find on page "
function receiver(request,sender,sendResponse)
{
    if (request.dimensions)
    {

        // console.log("dimensions 1")
        window.measurements=request.dimensions
        if (request.fitem_weight)
        {
            window.item_weight=request.fitem_weight
        }
       
        
    }
    else if  (request.dimensions2)
    {
        // console.log("dimensions 2")
        window.measurements=request.dimensions2
        if (request.fitem_weight)
        {
            window.item_weight=request.fitem_weight
        }
        
        
    }
    else 
    {
        console.log("dimensions 4")
         window.measurements=request.dimensions3
        if (request.fitem_weight)
        {
            window.item_weight=request.fitem_weight
        }
       
    }
    // window.measurements=request
    console.log(request,"request*************************")
    // console.log(window.title)
}
