interface IHasId {
    id: number;
}

class MyClass implements IHasId {
    id: number;
    description: string; 
}

function nonGenericEcho(item: IHasId): IHasId {
    console.log("Id is " + item.id);
    return item;
}

function genericEcho<T extends IHasId>(item: T): T {
    console.log("Id is " + item.id);
    return item;
}

var myInstance = new MyClass();
myInstance.id = 2;
myInstance.description = "This is my description.";

var nonGeneric = nonGenericEcho(myInstance);
//console.log(nonGeneric.description); // <-- issue, type is IHasId so no description

var generic = genericEcho(myInstance);
console.log(generic.description); // <-- works fine 

interface IPredicate<T> {
    (obj: T): boolean; 
}

var myList: {key: number, value: string}[] = [];

myList.push({key: 1, value: "foo"});
myList.push({key: 2, value: "bar"});

function findFirst<T>(list: T[], predicate: IPredicate<T>): T {
    var idx: number;
    for (idx = 0; idx < list.length; idx+=1) {
        if (predicate(list[idx])) {
            return list[idx];
        }
    }
    return null;
} 

var result2 = findFirst(myList, item => item.key === 1);
console.log("Found result with value: " + result2.value);