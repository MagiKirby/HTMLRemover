//This code 

//The core object defines a page property with a send method that sends a message to the content script with the current state of the extension.
//The app.tab.updated method is used to listen for updates to the active tab, and if the tab is active and its status is "loading", the state of the extension is set to "OFF" and the extension button is updated.
//The app.button.clicked method is used to listen for clicks on the extension button, and when the button is clicked, the state of the extension is toggled between "ON" and "OFF", the content script is injected into the active tab, and the extension button is updated.
//The app.content_script.receive method is used to listen for messages from the content script with the current state of the extension, and when a message is received, the state of the extension is updated and the extension button is updated.
//The config.addon.state property is initially set to "OFF", and the extension button is updated after a 300ms delay.
//The app.content_script.receive method is used to listen for messages from the content script with the current state of the extension, and when a message is received, the core.page.send method is called to send the current state of the extension to the content script.


var core = {
  "page": {
    "send": function (e) {
      if (e && e.tabId) {
        app.content_script.send("state", {
          "state": config.addon.state
        }, e.tabId);
      }
    }
  }
};

app.tab.updated(function (tabId, changeInfo, tab) {
  if (tab.active && changeInfo.status === "loading") {
    config.addon.state = "OFF";
    app.button.update();
  }
});

app.button.clicked(function () {
  config.addon.state = config.addon.state === "ON" ? "OFF" : "ON";
  app.tab.inject({"file": "/data/content_script/inject.js"});
  app.button.update();
});

app.content_script.receive("store", function (e) {
  config.addon.state = e.state;
  app.button.update();
  core.page.send(e);
});

config.addon.state = "OFF";
window.setTimeout(app.button.update, 300);
app.content_script.receive("state", core.page.send);
