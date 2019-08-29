/* 
    作用: 最简单的类型限制
    场景；变量、参数类型
 */

{
    let a: string
    let b: number = 10
    function fn(params: string): string {
        return params
    }

    a = 'hello world'
    // a = 1
    b = 1
    // b = false
    fn(a)
    // fn(b)
}