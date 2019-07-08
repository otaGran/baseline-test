'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectSameElements = [];
    for(let i = 0;i<collectionA.length;i++){
        for(let j = 0;j<collectionB[0].length;j++){
            if(collectionA[i]===collectionB[0][j]){

                collectSameElements.push(collectionA[i]);
                console.log(collectionA[i]);
            }

        }
    }

    return collectSameElements;
 }
