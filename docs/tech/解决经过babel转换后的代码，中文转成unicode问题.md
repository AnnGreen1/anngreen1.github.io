# 解决经过babel转换后的代码，中文转成unicode问题
解决方法：
添加bable配置
```json
{
  "generatorOpts" {
    "jsescOption": {
      "minimal": true
    }
  }
}
```
参考：[https://github.com/yunxifd/babel-intl/issues/1](https://github.com/yunxifd/babel-intl/issues/1)