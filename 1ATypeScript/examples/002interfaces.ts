var objectWithIdentifier: { id: number } = { id: 1};

interface IHaveAnIdentifier {
    id: number;
}

interface IHaveOneToo {
    id: number;
}

interface IHaveAnOptionalDescription {
    desc?: string;
}

interface IHaveIdAndMaybeDescription extends IHaveAnIdentifier, IHaveAnOptionalDescription {

}

function showId(obj: IHaveAnIdentifier): void {
    console.log(obj.id);
}

function showDesc(obj: IHaveAnOptionalDescription): void {
    if (obj.desc) {
        console.log(obj.desc);
    }
}
var myObject: IHaveOneToo = { id : 1 };
showId(myObject);
showId(<IHaveAnIdentifier>{id: 1});
var myObjectWithDescription: IHaveIdAndMaybeDescription = {
    id: 1,
    desc: "Rock it!"
};
showDesc(myObject);
showDesc(myObjectWithDescription);

interface IXnPlusOne {
    (r: number, xn: number): number; 
}

var bifurcation: IXnPlusOne = function (r, x) {
    return r*x*(1.0-x);
}

var r:number = 3, x:number = 0.5, idx: number = 0;
for (idx = 0; idx < 10; idx+=1) {
    x = bifurcation(r, x);
    console.log(x);
}

interface IXnPlusOneWithCounter extends IXnPlusOne {
    counter: number; 
}

var bifurcWithCnt: IXnPlusOneWithCounter = <IXnPlusOneWithCounter>function(r, x) {
    bifurcWithCnt.counter += 1; 
    return r*x*(1.0-x);
}

bifurcWithCnt.counter = 0;

var r:number = 3.1, x:number = 0.5, idx: number = 0;
for (idx = 0; idx < 10; idx+=1) {
    x = bifurcWithCnt(r, x);
    console.log(bifurcWithCnt.counter + " = " + x);
}

