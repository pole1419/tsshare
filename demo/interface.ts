/* 
    作用: 描述要求字段和方法
    场景；...
 */

{
    interface A {
        name: string,
        age: number,
        isFe: boolean,
        readonly isBe: boolean,
        say: (name: string) => string
    }
    
    const b = {
        name: 'mike',
        age: 16,
        isFe: true,
        say: function (name) {
            return 'hello' + name
        }
    }
    // const a: A = b
    // a.age = 17
    // a.isBe = true
    
    // type E = Partial<A>
    // let d = {
    //     name: 'leo',
    //     age: 17,
    // }
    // let e: E = d
}