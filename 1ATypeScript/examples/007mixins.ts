// mixes prototypes together 
var mixin = (target: any, bases: any[]) => {
    bases.forEach(base => {
        Object.getOwnPropertyNames(base.prototype)
            .forEach(name => {
                if (name !== "constructor") { 
                    console.log("Mixing " + name);
                    target.prototype[name] = base.prototype[name];
                }
            })
    })
};

// aspect for dumping properties
class Dumpable {
    dump(): string {
        var result: string = '', key: string,
            prefix = '';
        for(key in this) {
            let segment = key + '=' + this[key];
            result = result + prefix + segment;
            prefix = ',';        
        }
        return result;
    }
}

// aspect for logging 
class Loggable {
    log(msg: string): void {
        console.log(msg);
    }
}

// class that uses the dump and log aspects 
class Contact implements Dumpable, Loggable {
    dump: () => string;
    log: (msg: string) => void;     
    constructor(public firstName: string, public lastName: string) {
        if (this.log) {
            this.log("Ctor called with " + firstName + " and " + lastName);
        }
    }
}

// now show the mixing 
console.log("Non mixed");
var nonMixedContact = new Contact('Jeremy', 'Likness');
console.log(nonMixedContact.dump); // undefined

console.log("Mixing...")
mixin(Contact, [Dumpable, Loggable]);

console.log("Mixed");
var mixedContact = new Contact('Jeremy', 'Likness');
console.log(mixedContact.dump());

// mixins with decorators 
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    var originalMethod = descriptor.value; // save a reference to the original method

    descriptor.value = function(...args: any[]) {
        console.log("The method args are: " + JSON.stringify(args)); // pre
        var result = originalMethod.apply(this, args);               // run and store the result
        console.log("The return value is: " + result);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}

class Person {
    constructor(public firstName: string, public lastName: string) {
        
    }
    
    @log
    showFullNameWithPrefix(prefix: string): string {
        return prefix + " " + this.firstName + " " + this.lastName;
    }
}

var person = new Person("Jeremy", "Likness");
console.log("Hello, " + person.showFullNameWithPrefix("Mr."));

// decorator that takes a parameter
function logToSource(logFn: (msg: string) => void) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        var originalMethod = descriptor.value; // save a reference to the original method
        descriptor.value = function(...args: any[]) {
            logFn("The method args are: " + JSON.stringify(args)); // pre
            var result = originalMethod.apply(this, args); // run and store the result
            logFn("The return value is: " + result); // post
            return result; // return the result of the original method
        };
    };
}

class SpecialPerson {
    constructor(public firstName: string, public lastName: string) {
        
    }
    
    @logToSource(console.log)
    showFullNameWithPrefix(prefix: string): string {
        return prefix + " " + this.firstName + " " + this.lastName;
    }
}

var specialPerson = new SpecialPerson("Doreen", "Likness");
console.log("Hello, " + specialPerson.showFullNameWithPrefix("Mrs."));
