

// export function calculateNum(array: any) {
//     for(var i = 0; i < array.length; i++) {
//         for(var j = 1; j < array.length; j++) {
//             if (i + j == 2020) {
//                 return i * j;
//             }
//         }
//     }
// }

export function calculateNum(array: any) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 1; j < array.length; j++) {
            for(var k = 2; k < array.length; k++) {
                if (array[i] + array[j] + array[k] == 2020) {
                    return array[i] * array[j] * array[k];
                }
            }
        }
    }
}
