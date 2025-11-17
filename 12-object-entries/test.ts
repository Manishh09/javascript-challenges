interface A {
    test();
    print();
}

interface B {
    verify();
    print();
}


/**
 * Executes specific methods on the provided object based on its type.
 * 
 * @param obj - The object which can be of type A or B. The function checks for the presence of specific properties and calls the corresponding methods if they exist.
 * 
 * @remarks
 * - If the object has a `test` property, it calls the `test` method.
 * - If the object has a `verify` property, it calls the `verify` method.
 */
function testFunction(obj: A | B) {

    if('test' in obj) {
        obj.test();
    }

    if('verify' in obj) {
        obj.verify();
    }


}
// https://medium.com/career-drill/5-most-asked-typescript-questions-b6896ea97727