# 如何查看office的剩余激活时间
1、找到office安装的目录全盘检索`OSPP.VBS`的位置，基本都在如下位置
```
C:\Program Files\Microsoft Office\Office16
```
2、打开cmd,`cd`命令进入该路径
3、执行以下命令
```
cscript   OSPP.VBS   /dstatus
```
![](/DrawingBed/collection/如何查看office的剩余激活时间/查看office的剩余激活时间.webp)