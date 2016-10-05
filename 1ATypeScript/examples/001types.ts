var x: number = 2;
console.log("x = " + x);

var str: string = "Hello, World.";
console.log("str = " + str);

var checked: boolean = false;
console.log("checked = " + checked);

var list: number[] = [1,2,3];
console.log("list = " + list);

enum Interest { Bored = 42, Interested, Neutral };
var myInterest: Interest = Interest.Interested; 
console.log("Interest Level = " + Interest[myInterest]);

function returnsNada(): void {

}

function returnsWhatever(): any {
    if (Math.random() < 0.5) {
        return "1";
    }
    return 1; 
}

var result = returnsWhatever();
