// either or (union types)
var numOrStr: number | string; 
numOrStr = 1; // fine 
numOrStr = "1"; // also fine 
//numOrStr = false; // <-- not good 

// intersection 
var nameValue: { key: number } & { value: string } = { key: 0, value: "" };
nameValue.key = 1; 
nameValue.value = "test"; 

var notPossible: number & string; 
// now I can't assign anything! 

// custom types
type NameValuePair = { key: number, value: string};
var entry: NameValuePair = { key: 1, value: "foo" };

// complex example 
interface IManipulator {
    (input: string): string;
}

interface IManipulate {
    manipulate: (key: string, input: string) => string;
}

interface IManipulatorCache  {
    [key: string]: IManipulator 
}

interface IManipulatorManager extends IManipulate {
    registerManipulator: (key: string, manipulator: IManipulator) => boolean;
}

class ManipulatorManager implements IManipulatorManager {
    
    private _cache: IManipulatorCache = {};
    
    public static defaultEchoManipulator: IManipulator = (input: string) => input;
    
    public registerManipulator(key: string, manipulator: IManipulator): boolean {
        if (this._cache[key]) {
            return false;
        }
        this._cache[key] = manipulator;
    }
    
    public manipulate(key: string, input: string): string { 
        return this._cache[key] ? this._cache[key](input) 
        : ManipulatorManager.defaultEchoManipulator(input);
    }
}

var mgr: IManipulatorManager = new ManipulatorManager();
mgr.registerManipulator("reverse", (input: string) => input.split('').reverse().join(''));

console.log(mgr.manipulate("default", "This is my first test."));
console.log(mgr.manipulate("reverse", "This is my second test."));