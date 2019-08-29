/* 
    作用：手动指定类型，屏蔽类型检查
    场景；临时跳过检查、对未知类型/函数使用
 */

const a = {
    name: 'mike'
}
// const b = a.age
const b = (a as any).age
console.log(b)