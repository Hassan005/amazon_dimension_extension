console.log("bsckground running")

chrome.runtime.onMessage.addListener(receiver);
window.measurements="Hello There"
function receiver(request,sender,sendResponse)
{
    
    window.measurements=request
    // console.log(window.title)
}
