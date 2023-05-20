const redirectHostnamePrefix = "https://www.google.com/search";

function onChromeTabCreated(tab) {
  const url = new URL(tab.pendingUrl);

  if (url.hostname !== "www.bing.com") { return; }
  if (url.search === "") { return; }

  chrome.tabs.update(tab.id, {
    url: `${redirectHostnamePrefix}${url.search}`
  })
}

chrome.tabs.onCreated.addListener((tab) => {
  try {
    onChromeTabCreated(tab);
  } catch (error) {
    console.log(error);
  }
});