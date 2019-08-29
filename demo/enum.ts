/* 
    作用：更语意化、精确范围的变量
    场景；...
 */

{
    enum Status {
        err = -1,
        succ,
        overload,
    }

    const res = {
        code: Status.succ,
        msg: 'ok'
    }



    enum A {
        a,
        b,
        c,
    }

    enum B {
        a = 'a',
        b = 'b',
        c = 'c',
    }



    function fn(param: A): void {
        console.log(param)
    }

    let foo = A.a
    let bar = 'hello'

    fn(foo)
    // fn(bar)
}