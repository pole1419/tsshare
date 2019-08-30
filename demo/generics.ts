/* 
    作用: 类型参数
    场景；类型参数
 */

{
    function fn1(a: string): string {
        return a
    }

    function fn2(a: number): number {
        return a
    }

    function fn3(a: any): any {
        return a
    }

    function fn4<T>(a: T): T {
        return a
    }

    function fn5(a: string): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a)
            }, 3000)
        })
    }

    (async function() {
        const foo = fn5('hello world')
        foo.then(d => {
            console.log(d)
        })
    })()
}