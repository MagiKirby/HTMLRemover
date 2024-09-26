//         //Define all checkboxes on the website
//         //const checkbox = document.querySelector("#id-checkbox");
//         //checkbox.addEventListener("click", checkboxClick, false);
//         //function checkboxClick(event) {
//         //  let warn = "preventDefault() won't let you check this!<br>";
//         //  document.getElementById("output-box").innerHTML += warn;
//         //  event.preventDefault();
//         //}
//         
//         //List of all the elements that are of <a> elements in document
//         //const all_A_Tags = document.querySelectorAll("a");
//         
//         
//         
//         
//         
//         if (background === undefined) {
//           var background = (function () {
//             var tmp = {};
//             chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//               for (var id in tmp) {
//                 if (tmp[id] && (typeof tmp[id] === "function")) {
//                   if (request.path == "background-to-page") {
//                     if (request.method === id) tmp[id](request.data);
//                   }
//                 }
//               }
//             });
//             /*  */
//             return {
//               "receive": function (id, callback) {tmp[id] = callback},
//               "send": function (id, data) {chrome.runtime.sendMessage({"path": "page-to-background", "method": id, "data": data})}
//             }
//           })();
//           
//           var config = {
//             "element": {
//               "archive": [],
//               "current": null,
//               "previous": null,
//               "color": "transparent",
//               "cursor": chrome.runtime.getURL("data/content_script/icons/remove.svg")
//             },
//             "click": function (e) {
//               e.nativeEvent.stopImmediatePropagation();
//               if (!this.myDiv.contains(e.target)) {
//                 this.hideChild();
//                 e.nativeEvent.stopImmediatePropagation();
//               }
//         e.preventDefault();
//         e.stopPropagation();     
//         e.stopImmediatePropagation();
//         //return false;
//                                                                                 //e.preventDefault();
//                                                                                 //e.stopPropagation();
//               if (e.target === config.element.current) 
//               {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 /*  */
//                 window.setTimeout(function () {e.target.style.display = "none"}, 10);
//                 config.element.archive.push({
//                   "element": e.target,
//                   "display": window.getComputedStyle(e.target).display
//                 });
//               }
//         	  
//         																									  if (e.target.tagName === 'A')//&& lock == true)
//         																									  {
//         																										  console.log("This is a debug message from my Firefox extension.");
//         																										  e.preventDefault();
//         																										  e.stopPropagation();
//         																									  }
//                                                             if (e.target.tagName === 'IFRAME')//&& lock == true)
//         																									  {
//         																										  console.log("This is a debug message from my Firefox extension.");
//         																										  e.preventDefault();
//         																										  e.stopPropagation();
//         																									  }
//             },
//             "mousedown": function (e) {
//               if (e.target.tagName === 'A') {
//                 e.preventDefault();
//                 e.stopPropagation();
//               }
//             },
//             "keydown": function (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         e.stopImmediatePropagation();
//         e.nativeEvent.stopImmediatePropagation();
//         
//         var link = document.querySelector('a[jsname="UWckNb"]');
//         link.target = '_blank';
//         link.click();
//         
//         if (e.target.tagName === 'A') {
//           e.preventDefault();
//           e.stopPropagation();
//           e.stopImmediatePropagation();
//           return false;
//         }
//         		
//               var key = e.which || e.keyCode;
//               var ctrl = e.ctrlKey ? e.ctrlKey : key === 17;
//               /*  */
//               if (key === 27) background.send("store", {"state": "OFF"});
//               if (ctrl && key === 90) {
//                 var old = config.element.archive.pop();
//                 if (old) old.element.style.display = old.display;
//               }
//             },
//             "mouseover": function (e) {
//         //e.preventDefault();
//         //e.stopPropagation();
//         		
//         		
//               config.element.current = e.target;
//               /*  */
//               if (config.element.current) 
//               {
//                 if (config.element.current !== config.element.previous) 
//                 {
//                   if (config.element.previous) config.element.previous.style.backgroundColor = config.element.color;
//                   config.element.color = window.getComputedStyle(config.element.current).backgroundColor;
//                   config.element.current.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
//                   config.element.previous = config.element.current;
//                 }
//               }
//             },
//             "state": function (e) {
//         //e.preventDefault();
//         //e.stopPropagation();
//         		
//         		
//               if (e.state === "ON") 
//               {
//                 window.addEventListener("click", config.click, false);
//                 // document.addEventListener("keydown", config.keydown, false);
//                 // document.addEventListener("mouseover", config.mouseover, false);
//                 // document.body.style.cursor = "url('" + config.element.cursor + "'), auto";
//                 window.addEventListener("keydown", config.keydown, false);
//                 window.addEventListener("mouseover", config.mouseover, false);
//                 window.body.style.cursor = "url('" + config.element.cursor + "'), auto";
//                 document.addEventListener("click", config.click, false);
//                 document.addEventListener("keydown", config.keydown, false);
//                 document.addEventListener("mouseover", config.mouseover, false);
//                 document.body.style.cursor = "url('" + config.element.cursor + "'), auto";
//         
//                 
//                 checkbox.addEventListener("click", function(event)
//                 {
//                   //let warn = "preventDefault() won't let you check this!<br>";
//                   //document.getElementById("output-box").innerHTML += warn;
//                   event.preventDefault();
//                 }, false);
//         
//                 //document.addEventListener('click', function(e) 
//                 //{
//                 //  
//                 //  e.preventDefault();
//                 //  e.stopPropagation();
//                 //  
//                 //}, true);
//               } 
//               else 
//               {
//                 document.body.style.cursor = "default";
//                 window.removeEventListener("click", config.click, false);
//                 document.removeEventListener("keydown", config.keydown, false);
//                 document.removeEventListener("mouseover", config.mouseover, false);
//                 if (config.element.previous) config.element.previous.style.backgroundColor = config.element.color;
//         
//                 //window.removeEventListener("click", config.click, false);
//                 //document.removeEventListener("click", config.click, false);
//         
//                 document.removeEventListener('click', config.clickHandler, true);
//         
//                 //window.removeEventListener('click', function(e) {
//                 //  e.preventDefault();
//                 //  e.stopPropagation();
//                 //}, false);
//         
//         
//                 
//               }
//             }
//           };
//         }
//         
//         background.send("state", {});
//         background.receive("state", config.state);
//         
//         
//         // document.addEventListener('click', function(e) {
//         //   e.preventDefault();
//         //   e.stopPropagation();
//         // }, true);
//         
//         
//         //https://stackoverflow.com/questions/10219073/html-how-to-prevent-the-browser-from-opening-the-link-specified-in-href






if (background === undefined) {
  var background = (function () {
    var tmp = {};
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {     //Overall, this code sets up a listener for messages sent from the background script to the content script, allowing the content script to receive and respond to messages from the background script.
      for (var id in tmp) {
        if (tmp[id] && (typeof tmp[id] === "function")) {
          if (request.path == "background-to-page") {
            if (request.method === id) tmp[id](request.data);
          }
        }
      }
    });
    /*  */
    return {
      "receive": function (id, callback) {tmp[id] = callback},
      "send": function (id, data) {chrome.runtime.sendMessage({"path": "page-to-background", "method": id, "data": data})}
    }
  })();
  
  var config = {
                                    //"logCursor": function () {
                                    //  document.addEventListener("mousemove", function (event) {
                                    //    var target = event.target;
                                    //    var cursor = window.getComputedStyle(target).getPropertyValue("cursor");
                                    //    console.log("Current cursor: " + cursor);});},






    "element": {
      "archive": [],
      "current": null,
      "previous": null,
      "color": "transparent",
      "cursor": chrome.runtime.getURL("data/content_script/icons/remove.svg"),
      "addNoHoverCursor": function () {document.body.classList.add("no-hover-cursor");}
    },
    "click": function (e) {
      if (e.target === config.element.current) {
        e.preventDefault();
        e.stopPropagation();
        /*  */
        window.setTimeout(function () {e.target.style.display = "none"}, 100);
        config.element.archive.push({
          "element": e.target,
          "display": window.getComputedStyle(e.target).display
        });
      }
      //
      //
      //
      //
      //
      if (e.target === config.element.current) {
        e.preventDefault();
        e.stopPropagation();
        /*  */
        window.setTimeout(function () {e.target.style.display = "none"}, 100);
        config.element.archive.push({
          "element": e.target,
          "display": window.getComputedStyle(e.target).display
        });
      }
      //
      //
      //
//         																									if (e.target.tagName === 'A')//&& lock == true)
//         																									  {
//         																										  console.log("This is a debug message from my Firefox extension.");
//         																										  e.preventDefault();
//         																										  e.stopPropagation();
//         																									  }
//                                                             if (e.target.tagName === 'IFRAME')//&& lock == true)
//         																									  {
//         																										  console.log("This is a debug message from my Firefox extension.");
//         																										  e.preventDefault();
//         																										  e.stopPropagation();
//         																									  }
      //
      //
      //
      //
    },
    "keydown": function (e) {
      var key = e.which || e.keyCode;
      var ctrl = e.ctrlKey ? e.ctrlKey : key === 17;
      /*  */
      if (key === 27) background.send("store", {"state": "OFF"});
      if (ctrl && key === 90) {
        var old = config.element.archive.pop();
        if (old) old.element.style.display = old.display;
      }
    },
    "mouseover": function (e) {
      //document.body.style.cursor = "url('" + config.element.cursor + "'), auto";
      config.element.current = e.target;
      /*  */
      if (config.element.current) {
        if (config.element.current !== config.element.previous) {
          if (config.element.previous) config.element.previous.style.backgroundColor = config.element.color;
          config.element.color = window.getComputedStyle(config.element.current).backgroundColor;
          config.element.current.style.backgroundColor = "rgba(188, 0, 255, 0.3)";    //The ORIGINAL Red highlight//"rgba(255, 0, 0, 0.5)";
          config.element.previous = config.element.current;
        }
      }
    },
    //



    //"mousemove": function (e) {
    //  var originalCursor = document.body.style.cursor;
    //  document.body.style.cursor = "url('" + config.element.cursor + "'), auto";
    //  console.log("in mousemove   " + document.body.style.cursor);
    //  // To restore the original cursor style later:
    //  // document.body.style.cursor = originalCursor;
    //},




    //
    "state": function (e) {
      if (e.state === "ON") {
        console.log("Current cursor image:  " );
        //config.addNoHoverCursor();
        //document.addEventListener("mousemove", config.mousemove, false);


        //document.addEventListener("mouseover", config.addNoHoverCursor(), true);
        //I changed the event listener to use the capture phase by setting the third parameter of addEventListener to true. This ensures that the click event is captured before it reaches its target elements.
        //Basically true==event captured during the capture phase......false==captured during the bubbling phase (bubbling phase is bubbles up )
        //True    -  event starts at the root of the DOM tree and propagates DOWN to the target element. moves from the highest ancestor down to the target element.
        //False   -  event starts at the target element and bubbles UP through its ancestors in the DOM tree. moves from the target element up to the highest ancestor.
        //
        //set it to true, you're intercepting the event before it reaches the target element, allowing you to capture and handle the event at an earlier stage in the event propagation process.
        window.addEventListener("click", config.click, true);
        document.addEventListener("keydown", config.keydown, false);
        document.addEventListener("mouseover", config.mouseover, false);
        document.body.style.cursor = "url('" + config.element.cursor + "'), auto";
      } else {
        document.body.style.cursor = "default";
        //window.removeEventListener("click", config.click, false);
        window.removeEventListener("click", config.click, true);
        document.removeEventListener("keydown", config.keydown, false);
        document.removeEventListener("mouseover", config.mouseover, false);
        if (config.element.previous) config.element.previous.style.backgroundColor = config.element.color;
      }
    }
    //,
    //
    //
    //"addNoHoverCursor": function () {
    //  var originalCursor = document.body.style.cursor;
    //  document.body.style.cursor = "url('" + config.element.cursor + "'), auto";
    //  
    //  // To restore the original cursor style later:
    //  // document.body.style.cursor = originalCursor;
    //}
    //
    //


  };
}

background.send("state", {});
background.receive("state", config.state);