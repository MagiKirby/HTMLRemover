var app = {};

app.version = function () {return chrome.runtime.getManifest().version};
app.homepage = function () {return chrome.runtime.getManifest().homepage_url};

app.tab = {
  "open": function (url) {chrome.tabs.create({"url": url, "active": true})},
  "updated": function (callback) {chrome.tabs.onUpdated.addListener(callback)},
  "inject": function (options) {
    chrome.tabs.executeScript(options, function () {
      var tmp = chrome.runtime.lastError;
    });
  }
};

if (!navigator.webdriver) {
  chrome.runtime.setUninstallURL(app.homepage() + "?v=" + app.version() + "&type=uninstall", function () {});
  chrome.runtime.onInstalled.addListener(function (e) {
    chrome.management.getSelf(function (result) {
      if (result.installType === "normal") {
        window.setTimeout(function () {
          var previous = e.previousVersion !== undefined && e.previousVersion !== app.version();
          var doupdate = previous && parseInt((Date.now() - config.welcome.lastupdate) / (24 * 3600 * 1000)) > 45;
          if (e.reason === "install" || (e.reason === "update" && doupdate)) {
            var parameter = (e.previousVersion ? "&p=" + e.previousVersion : '') + "&type=" + e.reason;
            app.tab.open(app.homepage() + "?v=" + app.version() + parameter);
            config.welcome.lastupdate = Date.now();
          }
        }, 3000);
      }
    });
  });
}

app.button = {
  "clicked": function (callback) {chrome.browserAction.onClicked.addListener(callback)},
  "update": function () {
    chrome.browserAction.setTitle({"title": "Remove HTML Elements :: " + config.addon.state});
    chrome.browserAction.setIcon({
      "path": {
        '16': "../../data/icons/" + (config.addon.state ? config.addon.state + '/' : '') + '16.png',
        '32': "../../data/icons/" + (config.addon.state ? config.addon.state + '/' : '') + '32.png',
        '48': "../../data/icons/" + (config.addon.state ? config.addon.state + '/' : '') + '48.png',
        '64': "../../data/icons/" + (config.addon.state ? config.addon.state + '/' : '') + '64.png'
      }
    });
  }
};

app.storage = (function () {
  var objs = {};
  window.setTimeout(function () {
    chrome.storage.local.get(null, function (o) {
      objs = o;
      var script = document.createElement("script");
      script.src = "../common.js";
      document.body.appendChild(script);
    });
  }, 300);
  /*  */
  return {
    "read": function (id) {return objs[id]},
    "write": function (id, data) {
      var tmp = {};
      tmp[id] = data;
      objs[id] = data;
      chrome.storage.local.set(tmp, function () {});
    }
  }
})();

app.content_script = (function () {
  var tmp = {};
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    for (var id in tmp) {
      if (tmp[id] && (typeof tmp[id] === "function")) {
        if (request.path === "page-to-background") {
          if (request.method === id) {
            if (sender.tab) request.data.tabId = sender.tab.id;
            tmp[id](request.data);
          }
        }
      }
    }
  });
  /*  */
  return {
    "receive": function (id, callback) {tmp[id] = callback},
    "send": function (id, data, tabId) {
      if (tabId) {
        chrome.tabs.sendMessage(tabId, {"path": "background-to-page", "method": id, "data": data});
      }
    }
  }
})();