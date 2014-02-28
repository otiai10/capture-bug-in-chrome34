# Problem
Using Google Chrome `34.0.1847.11 (Official Build 253056) beta`,
'chrome.tabs.captureVisibleTab` may return unexpected image uri.

This extension is to check the above problem.

# Set up this extension

1. clone this repo
2. enable developer mode in `chrome://extension`
3. import this repo as a (unpackaged) chrome extension

# Results

| Version of Chrome | Got Image URI | Download URL |
|:-----------------:|:-------------:|:------------:|
| 33.0.1750.117 (Official Build 252094)     | `data:image/jpeg;base64,/9j/4AAQS...` | https://www.google.com/intl/en/chrome/browser/beta.html |
| 34.0.1847.11 (Official Build 253056) beta | `undefined` | https://www.google.com/intl/en/chrome/browser/ |
