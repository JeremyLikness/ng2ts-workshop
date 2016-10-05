// see the difference in "this" using lambdas 
var app = () => {

    this.x = 12; 

    function iterations() {
        var idx: number;
        for (idx = 0; idx < 10; idx += 1) {
            this.x += 1;
            console.log("iterations_x: " + this.x);
            setTimeout(function () {
                console.log("iterations: " + this.x);
            }, 0);
        }
    }

    var lambda = () => {
        var idx: number;
        for (idx = 0; idx < 10; idx += 1) {
            this.x += 1;
            console.log("lambda_x: " + this.x);
            setTimeout(() => 
            console.log("lambda: " + this.x), 0);
        }
    }

    iterations();
    lambda();
};
app();

setTimeout(() => {
    // see the parameter list completion feature
    var longList = (first: number, ...list: string[]) => {
        console.log("Parms: " + list.length);
        console.log("Joined: " + list.join(","));
    }

    longList(1);
    longList(1, "1", "2", "3");
    
    // function overloads - for the signature
    function echo(x: number): number;
    function echo(x: string): void;
    function echo(x: any): number {
        if (typeof x == "number") {
            console.log("The number is " + x);
            return x;
        }
        console.log("The string is " + x);
        return;
    }

    var res = echo(2);
    echo("Hello");
}, 0);


