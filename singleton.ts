/**
 The Singleton design pattern is one of the creational patterns that ensures a class has only one instance and provides
  a global point of access to that instance.
  This pattern is useful when exactly one object is needed to coordinate actions across the system.
 */
  class Singleton {
    // The single instance of the class
    private static instance: Singleton;

    // Private constructor to prevent instantiation from outside
    private constructor() {}

    // Public method to provide access to the instance
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // An example method to demonstrate the singleton behavior
    public showMessage(): void {
        console.log("Hello, I am a Singleton!");
    }
}

// Client code
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.showMessage(); // Output: Hello, I am a Singleton!

console.log(singleton1 === singleton2); // Output: true
