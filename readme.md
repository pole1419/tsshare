<!-- slide -->
背景
原理
概念
项目中使用
<!-- slide -->
背景
    
    编程语言分类：
        转换方式: 
            编译型: c/c++, go
            解释型: javascript，php
        类型强弱：
            强类型：go, java
            弱类型：javascript，php
        静态/动态：
            静态： go, c/c++, java
            动态： javascript，php

    javascript:
        动态、弱类型、解释型
        优点：
            随意
            let a = 0
            let b = '1'
            let e = +b  // 1
            if(a) {
                // false
            }

        缺点：
            转换规则复杂
            let b = '1'
            let d = b + 0 // '10'

            var a = true
            a == 1 && a == 2 && a == 3 // false

            null == 0 // false
            无完善提示（变量类型？ 继承关系？ 拥有属性和方法？）
            编码阶段难发现问题
            无友好跳转
            多人协作不便
            重构难度大
        
        当前类型检查：
            flow(fb)
            typescript(ms)  
<!-- slide -->


原理
<!-- slide -->
概念
    与es交叉部分: let/const, symbol, class, iterator/generator, decorator, class, modules, mixin等参照es6文档  

    js原生类型: string, number, boolean, null, undefined, object

    ts引入类型: enum, interface, tuple, any, void, never
        
    函数，泛型，联合类型，交叉类性，继承，断言
    
<!-- slide -->      
项目中使用
    tsconfig, 命令: tsc
    js中使用:
        后缀名.ts, react中.jsx应对.tsx
        api.js
    react中使用: Props, State(不需要显示readonly), eventType, Reactelement,
    redux中使用: actionTypes, actionsCreator param/return, reducer param/return, store
    声明文件

    
    