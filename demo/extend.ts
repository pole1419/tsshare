/* 
    作用: ...
    场景；...
 */

{
    interface A {
        name: string
    }
    interface B {
        age: number
    }
    interface C extends A, B {
        say: (name: string) => number
    }
    let c: C = {
        name: 'mike',
        age: 18,
        say: function (name) {
            return name.length
        }
    }
}