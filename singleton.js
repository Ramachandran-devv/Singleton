/**
 The Singleton design pattern is one of the creational patterns that ensures a class has only one instance and provides
  a global point of access to that instance.
  This pattern is useful when exactly one object is needed to coordinate actions across the system.
 */
var Singleton = /** @class */ (function () {
    // Private constructor to prevent instantiation from outside
    function Singleton() {
    }
    // Public method to provide access to the instance
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    // An example method to demonstrate the singleton behavior
    Singleton.prototype.showMessage = function () {
        console.log("Hello, I am a Singleton!");
    };
    return Singleton;
}());
// Client code
var singleton1 = Singleton.getInstance();
var singleton2 = Singleton.getInstance();
singleton1.showMessage(); // Output: Hello, I am a Singleton!
console.log(singleton1 === singleton2); // Output: true
//# sourceMappingURL=singleton.js.map