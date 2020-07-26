

chrome.tabs.onCreated.addListener((tab) => {
  newUrl = new URL(tab.pendingUrl);

  //Check if the newly created tab directs to bing and has a search parameter
  if (newUrl.hostname !== "www.bing.com" && newUrl.search === "") {
    return null;
  }

  //Change domain to google.com with the search parameter
  chrome.tabs.update(tab.id, {url: `https://www.google.com/search${new URL(tab.pendingUrl).search}`});
});