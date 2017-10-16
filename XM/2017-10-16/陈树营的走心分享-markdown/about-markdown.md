title: Markdown简易语法  
date: 2017-10-15 16:00:00

---

# Markdown学习笔记

# 目录
> 1. Markdown是什么？
> 2. 谁创造了它？
> 3. 为什么要使用它？
> 4. 谁在用？
> 5. 怎么使用？
> 6. 尝试一下

# 内容
## 1. Markdown是什么？
Markdown是一种轻量级「**标记语言**」，它的目标是实现「**易读易写**」。  
可以简单理解成为，用markdown语法编写的内容转换成html的「**工具**」。

## 2. 谁创造了它？
它由[**Aaron Swartz**](http://www.aaronsw.com/)和**John Gruber**共同设计。

![Aaron Swartz](https://github.com/chen-s-y/mv20170724/blob/master/2017-10-13-markdown/about-markdown/Aaron%20Swartz.jpg)

**Aaron Swartz**于*2013年1月11日*自杀,有着**开挂**一般人生经历的程序员。维基百科对他的[介绍](http://zh.wikipedia.org/wiki/%E4%BA%9A%E4%BC%A6%C2%B7%E6%96%AF%E6%B2%83%E8%8C%A8)是：**软件工程师、作家、政治组织者、互联网活动家、维基百科人**。    

![John Gruber](https://github.com/chen-s-y/mv20170724/blob/master/2017-10-13-markdown/about-markdown/John%20Gruber.jpg)

**John Gruber**，知名独立博主，Markdown创始人，UI设计师，苹果狂热粉。相比于Markdown创始人这个头衔，Gruber更出名的是对苹果的狂热，和由狂热外化出来的[Daring Fireball](https://daringfireball.net/)博客（一个每年可以赚取 50 万美元的博客）。博客上还提供下载一些由 Gruber 自己开发的软件。最初 Gruber 只是利用空闲时间打理，但从 2006 年 4 月开始，运作这个博客成了 Gruber 的全职工作，并通过收取会费、投放广告、售卖 T 恤等方式获得收入。

## 3. 为什么要使用它？
+ 它是易读（看起开舒服）、易写（语法简单）、易更改**纯文本**。处处体现着**极简主义**的影子。
+ 兼容HTML，可以转换为HTML格式发布。
+ 跨平台使用。
+ 越来越多的网站支持Markdown。
+ 更方便清晰的组织你的电子邮件。（Markdown-here, Airmail）
+ 摆脱Word（我不是认真的）。

## 4. 谁在用？
Markdown的使用者：
+ GitHub
+ 简书
+ Stack Overflow
+ Apollo
+ Moodle
+ Reddit
+ gitee
+ coding
+ 公司内部文档，等等

## 5. 怎么使用？
- 标题
- 加粗，斜体，高亮
- 段落
- 列表
- 图片，链接
- 引用
- 代码
- 代码区块
- 表格

### 标题
使用`#` 可表示1-6级标题, 即：
``` bash
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题
```
效果：
> # 一级标题   
> ## 二级标题   
> ### 三级标题   
> #### 四级标题   
> ##### 五级标题   
> ###### 六级标题

### 斜体，加粗
```
    *斜体*, 或 _斜体_
    **加粗**, 或 __加粗__
    ~~删除线~~
```
效果：
> *斜体* 或 _斜体_  
> **加粗** 或 __加粗__  
> ~~删除线~~

``` 
    分割线
    使用三个或者以上 * - _
```
效果：
> ---


### 段落
段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用**两个以上**空格加上回车（引用中换行省略回车）。

### 列表
使用`+`、或`-`标记无序列表，使用`1.`数字标记有序列表，如：
``` bash
    1. 第一节
        + 第一节第一课
        + 第一节第二课
    2. 第二节
    3. 第三节
        - 第三节第一课
        - 第三节第二课
        - 第三节第三课
            - 第三节第三课第一段
            - 第三节第三课第二段
    4. 第四节
    5. 第五节
```
效果：  
1. 第一节
    + 第一节第一课
    + 第一节第二课
2. 第二节
3. 第三节
    - 第三节第一课
    - 第三节第二课
    - 第三节第三课
        - 第三节第三课第一段
        - 第三节第三课第二段
4. 第四节
5. 第五节

### 图片，链接
+ 链接语法：[]()
+ 图片语法：![]()

``` bash
    [百度](http://www.baidu.com/ "链接描述(可省略)")  
    ![图片描述](http://dcs.conac.cn/image/red.png "描述(可省略)")
```
效果：
> 链接: [百度](http://www.baidu.com/ "百度")  
> 图片: ![党政机关](http://dcs.conac.cn/image/red.png "党政机关")

高级用法
``` bash
    [*无效链接*][null-link]
    [有效链接][csy-link]
    I get 10times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].

    注意： 链接必须另起一行(即：不能在同一个段落中)
    [csy-link]: http://www.baidu.com/ "鼠标滑入的时候, 显示该字段"
    [null-link]: chrome://not-a-link
    [1]: http://google.com/        "Google"
    [2]: http://search.yahoo.com/  "Yahoo Search"
    [3]: http://search.msn.com/    "MSN Search"

    ![Alt text][id]
    [id]: url/to/image  "Optional title attribute"

    ![](http://img3.douban.com/mpic/s1108264.jpg "title text")
```
效果：
> [*无效链接*][null-link]  
> [有效链接][csy-link]  
> I get 10 times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].  
>
> [null-link]: chrome://not-a-link
> [csy-link]: http://baidu.com/ "鼠标滑入的时候, 显示该字段"
> [1]: http://google.com/        "Google"
> [2]: http://search.yahoo.com/  "Yahoo Search"
> [3]: http://search.msn.com/    "MSN Search"
> 注意： 链接必须另起一行(即：不能在同一个段落中)

### 引用
使用 > 符号，进行引用
``` bash
    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > 
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.
    > > id sem consectetuer libero luctus adipiscing.
```
效果：
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
> > id sem consectetuer libero luctus adipiscing.

### 代码
如果要标记一小段行内代码，你可以用 ` 反引号把它包起来，例如：
``` bash
    Use the `printf()` function.
```
效果：
> Use the `printf()` function.

### 代码区块
1. 只要简单地缩进 4 个空格或是 1 个制表符就可以

2. 将源码直接进行展示，可在开始的 ``` 后面加上代码语种名称
``` javascript
    var str = "hello world!";
    alert(str);
```

### 表格
用`|`表示表格纵向边界，表头和内容用`-`隔开，用`:`进行对齐设置，两边都有表示居中，默认左对齐。

学号(右对齐) | 姓名(左对齐) | 成绩(居中)
---: | :--- | :---:
001 | 张三 | 60
02 | 阿尔及利亚 | 898998
909090 | 李四 | 90
9 | 李大 | 90


## 6. 尝试一下
### Markdown 免费编辑器

- [GitHub Atom][11]
- [vscode][22]

Windows 平台

- [MarkdownPad][12]
- [MarkPad][13]

Linux 平台

- [ReText][14]

Mac 平台

- [Mou][15] 国人贡献的，口碑很好

在线编辑器

- [Markable.in][16]
- [Dillinger.io][17]

浏览器插件

- [MaDe][18] (Chrome)
- `stackedit`(Chrome)
- `markdown-here`(Chrome)

高级应用(Sublime Text 3 + MarkdownEditing 教程)

- [Sublime Text 3][19]
- [MarkdownEditing][20]
- [教程][21]

[11]: https://atom.io/
[12]: http://markdownpad.com/
[13]: http://code52.org/DownmarkerWPF/
[14]: http://sourceforge.net/p/retext/home/ReText/
[15]: http://mouapp.com/
[16]: http://markable.in/
[17]: http://dillinger.io/
[18]: https://chrome.google.com/webstore/detail/oknndfeeopgpibecfjljjfanledpbkog
[19]: http://www.sublimetext.com/3
[20]: http://ttscoff.github.com/MarkdownEditing/
[21]: http://lucifr.com/2012/07/12/markdownediting-for-sublime-text-2/
[22]: https://code.visualstudio.com/



来源:  
* [Markdown 简明教程](http://www.jianshu.com/p/7bd23251da0a) -Gnat  
* [github/younghz](https://github.com/younghz/Markdown)  
* [Markdown语法](http://product.pconline.com.cn/itbk/bkxt/1707/9684244.html)  
* [Markdown常用语法说明](http://www.jianshu.com/p/e989689a331d)  
