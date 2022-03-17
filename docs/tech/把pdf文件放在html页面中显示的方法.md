# 把pdf文件放在html页面中显示的方法
方法一
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<!--body和object标签的样式可以自己调一下-->
<body style="margin:0px;overflow:-Scroll;overflow-y:hidden;">
    <object data="file_name.pdf" type="application/pdf" style="margin:0px;width:100%;height:800px;">
        <a href='http://get.adobe.com/cn/reader'>Adobe Reader.pdf </a>
    </object>
</body>

</html>
```
方法二
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<!--body和object标签的样式可以自己调一下-->
<body style="margin:0px;overflow:-Scroll;overflow-y:hidden;">
    <embed width="100%" height="800px" style="margin:0px;" name="plugin" src="file_name.pdf" type="application/pdf" />
</body>

</html>
```
以上两种方法都去掉了body的margin，禁用了滚动条
参考[https://blog.csdn.net/lanxe/article/details/7705649](https://blog.csdn.net/lanxe/article/details/7705649)