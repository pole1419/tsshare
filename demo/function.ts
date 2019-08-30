/* 
    作用: ...
    场景；...
 */

{
    function foo(a: string, b: number, c?: boolean): number {
        return a.length + b
    }

    // foo('hello', 3)
    // foo('hello', 3, false)
    // foo('hello', 3, 3)
    // foo('hello', 'hello')

    interface Bar {
        (a: string, b: number, c?: boolean): number
    }

    let bar: Bar = foo

}
