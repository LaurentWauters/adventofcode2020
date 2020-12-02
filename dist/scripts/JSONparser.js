"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
// import { XMLHttpRequest } from "xmlhttprequest";
var node_fetch_1 = require("node-fetch");
// export var getJSON = function(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'text';
//     xhr.onload = function() {
//       var status = xhr.status;
//       if (status === 200) {
//         callback(null, xhr.response);
//       } else {
//         callback(status, xhr.response);
//       }
//     };
//     xhr.send();
// };
function getData(url) {
    return node_fetch_1.fetch(url)
        .then(function (response) { return response.text(); })
        .then(function (data) {
        console.log(data);
    });
}
exports.getData = getData;
