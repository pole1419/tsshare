/* 
    作用: ...
    场景；...
 */

{
    interface A {
        name: string,
    }
    interface B {
        age: number,
    }
    interface C {
        say: (name: string) => number
    }

    type Param = A & B & C

    function fn(param: Param): void {
        console.log(param)
    }
    fn({
        name: 'leo',
        age: 18,
        say: function (name) {
            return name.length
        }
    })
}

