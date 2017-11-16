1. react 运行原理

*2. 声明 react 的组件
    继承了 React.Component 的类就是一个组件
    至少有一个 render 方法
        这个方法应该 return 一份 jsx 的对象,
        这就是这个组件的样子
        
*3. jsx 语法
    回去复习今天的 jsx 的语法 , 写到下面
    begin here...
    	相邻的jsx元素必须
    	自己声明的组件要大写开头，内置组价小写开头
    	jsx本身可以是一个表达式
    	在jsx里面使用{}表示表达式
    	标签之间的内容就叫children,如果是类的组件的标签,它的children通过实例(this)的props.children拿到
    	关键词要转成另一种形式:class->ckassName
    	for->htmlFor,应该是驼峰式的
    	
4. 把 jsx 渲染到页面
    reactDOM.render
    
5. virtual DOM 的概念 怎么来的

6. this.props.children

7.webpack 打包 css 文化
	把css打包到js文件里面,一般是在开发阶段css的打包方式
	把css打包成一个单独的css文件
	
8.关于 cs-loader
	引入css文件的使用这个loader处理它
	遇到url或@import帮你去引入里面的资源,引入资源的过程中,根据资源的类型在使用相应的loader去处理
	
9.关于 file-loader
	处理资源(字体、图片、视频)
	转换出一个路径,把资源搬到输出目录

*10*.props:react的属性
	传递属性:<Content a="8"></Content>
	拿到:this.props
	
11.state
	组件有内部状态:this.state = {}
	通过this.setState()来改变组件的内部状态,这个时候页面会更新,因为组件的render执行了,得到了一份新的jsx的结构
	父组件的render执行了,子组件的render也会执行
	改变页面状态，应该通过setState更新
	
关于 webpack
    html-webpack-plugin 自动创建 html 文件
    clean-webpack-plugin 清理某一个文件夹在打包之前


预告
    react 更新视图
    react 组件之间的交流
    使用 webpack 打包图片
    使用 webpack 打包 css
