# div被遮挡，让一个div层浮在最上层的方法
首先将position定义为，absolute、relative或fixed。
【必须position为以上三个属性，z-index才能层级体现出来，才能起作用】
设置 style 中 z-index:auto
auto可定义为一个值(整数数字)，越大代表越置前，如可定义为： z-index:9999。
若定义为-1，代表为最底层。
如果要让div1不被div2遮挡，则将div1的z-index设置比div2大就可以了。

看个例子
```html
<div style="position: fixed;float: left;width:100px;height:100px;background-color:pink;z-index:1;">
</div>
```
![验证码演示](/DrawingBed/tech/divToplayer/divToplayer.webp)    