// import { XMLHttpRequest } from "xmlhttprequest";
import { fetch } from "node-fetch";

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

export function getData(url: string) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
    });
}