export class DragDropUtils {

  static applyDrag(arr, dragResult: any) {
    const { removedIndex, addedIndex, payload } = dragResult;

    if ( removedIndex === null && addedIndex === null ) {
        return arr;
    }

    const result = [...arr];
    let itemtoadd = payload;
    let values = [...result];
    if (removedIndex !== null) {
        values = result
                .filter(val => val.id !== payload.id)
                .map((val, idx) => {
                        val.idx = idx;
                        return val;
                    });
    }

    if (addedIndex !== null) {
        values =  [...values.slice(null, addedIndex), 
                itemtoadd, 
                ...values.slice(addedIndex)]
                .map((val, idx) => {
                    val.idx = idx
                    return val;
                });
    }

    return values;
  }

 static generateItems(count, creator) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(creator(i));
    }
    return result;
 }
}
