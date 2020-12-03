import { XMLHttpRequest } from "xmlhttprequest";
//import { fetch } from "node-fetch";

export var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.useCredentials = true;
    xhr.session = "53616c7465645f5ffc3ad3c53a817c1fb02f4deb8753f207c5f61e008a27583e68c6d3ec9a88fc510587a49fc541ea95";
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// export function getData(url: string) {
//     return fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             console.log(data);
//     });
// }