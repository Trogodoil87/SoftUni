function createSortedList() {
    let arr = [];
    let size = arr.length;
    let obj = {
        add: (ele) => {
            arr.push(ele);
        },
        remove: (index) => {
            let number = arr[index];
            if (number) {
                arr.splice(index, 1);
            }
        },
        get: (index) => {
            let number = arr[index];
            if (number) {
                let i = arr.indexOf(number);
                return arr[i];
            }
        },
        size
    };

    return obj;
}
let list = createSortedList(); 

list.add(5); 

list.add(6); 

list.add(7); 

console.log(list.get(1));  

list.remove(1); 

console.log(list.get(1)); 

console.log(list.size);