chrome.browserAction.onClicked.addListener(function(_tab){
    chrome.tabs.captureVisibleTab(null, null, function(uri){
        console.log('URI =>', uri);
        if(uri && window.confirm("Open this?")) chrome.tabs.create({url:uri});
    });
});

