web components study
---

### 渐进增强
* v0.1 init repo, build basic scanfolder
* v0.2 done alert web components basic feature
* v0.3 add alert components btn and callback
* v0.4 remove the hard code in css files, use js to config
* v0.5 adjust API params format: pass a object as param
* v0.6 custom a title
* v0.7 custom close button and callback
* v0.8 custom different kinds of sikn
* v0.9 custom alert btn text
* v0.10 implement a modal dialog
* v0.11 make dialog drag'n'drop
* v0.12 use observe pattern to custom event
* v0.13 custom event II
* v0.14 chain function
* v0.15 define a widget abstract class
* v0.16 refactor widget class


### key point

* 自定义事件

> 
  1. 本质： 观察者模式
  2. 优点： 跳出原生事件的限制，提高封装的抽象性

* js 类库分2种

>
  1. utility.js: 与UI无关的，如ajax、cookie、drag等
  2. widget.js: 与UI有关的，如calendar、rich text box、animation等

