# Markdown入门(一)  

## 00 &nbsp; Markdown  
Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（英语：John Gruber）。 它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

## 01 &nbsp; 环境  
例如[vscode](https://code.visualstudio.com/)、[Typora](https://www.typora.io/)、[Draft](https://draftin.com/)、Byword等，这里不进行比较，直接推荐使用vscode，因为写前端代码用vscode很多，所以开始就选择了vscode。   

vscode安装Markdown Preview Enhanced插件启用，新建一个Markdown文件，后缀 .md,之后就可以写笔记了。   

## 02 &nbsp; 基本语法  
#### 标题  
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
```markdown 
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
``` 
preview 
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题


#### 字体   
```markdown  
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```  
preview  
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___


#### 代码    
![adfa][link1]  
preview
```JavaScript  
$(document).ready(function () {
    alert('AnnGreen');
});  
```

#### 链接       
```markdown 
[AnnGreen的简书主页](https://www.jianshu.com/u/3677ca70057e)
```  
preview  
[AnnGreen的简书主页](https://www.jianshu.com/u/3677ca70057e)

#### 空格  
```markdown 
手动输入空格 （&nbsp;）。注意！此时的分号为英文分号   

使用全角空格。即：在全角输入状态下直接使用空格键
```   

#### 图片  
1、使用url或者某个本机路径(缺点：路径出问题就不行了)
```markdown 
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")   
```  
例子
```markdown
![我的头像](https://upload.jianshu.io/users/upload_avatars/26478343/ae5b2fc7-e4c8-4f1d-a945-be197fec1d43.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300/format/webp)
```   
效果     

![我的头像](https://upload.jianshu.io/users/upload_avatars/26478343/ae5b2fc7-e4c8-4f1d-a945-be197fec1d43.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300/format/webp)   
2、使用base64编码内嵌到md文档中   
使用工具([OKtools](https://oktools.net/image2base64)、[工具123](http://www.gjw123.com/tools-ImageToBase64)或者其他都行)把图片转成base64编码   
```markdown  
![属性文本](变量名)  
```  
然后再文档底部写清变量名对应的base64编码值  
```markdown 
[变量名]:base64编码值
```
例子就不写了，一个图片的base64的编码值太长了
##03 &nbsp; 导出     
vscode中安装了插件的话，直接再右侧预览页面右键，可以导出为html、pdf等，自由选择。  

## 04 &nbsp; 一些有用的参考 
[markdown中文指南](https://www.markdown.xyz/basic-syntax/)















[link1]:data:image/png;base64,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