interface INgController {
    ctrlName: string;
    save: (params:{ key: string, value: number }[]) => 
        void;
}

class Controller implements INgController {

    constructor(private seed: number) {}
    
    get ctrlName(): string {
        return "Controller" + this.seed;
    } 

    save(params:{ key: string, value: number }[]): void {
        var idx: number;
        for (idx = 0; idx < params.length; idx+=1) {
            console.log(params[idx].key + " = " + params[idx].value);
        }
    }
}

function debugController(ctrl: Controller): void {
    console.log(ctrl.ctrlName);
    ctrl.save([{key: "foo", value: 1}, {key: "bar", value: 2}]);
}

var myCtrl = new Controller(5);
debugController(myCtrl);

module MyModule {
    class InternalClass {
        internal(): string {
            return 'Internal';
        }
    }

    export class MyClass {
        echo(msg: string): string {
            return msg;
        }
    }

    var internalClass = new InternalClass();
    console.log(internalClass.internal());

    var myClass = new MyClass();
    console.log(myClass.echo("echo this!"));
    
}

var exportedClass = new MyModule.MyClass();
console.log(exportedClass.echo("Outside!"));