# PHP arrayRand()与shuffle()
### arrayRand()
(PHP 4,PHP 5,PHP 7,PHP 8)
`array_rand()`    从数组中随机取出一个或多个随机键
*************
```php
/*
*array 输入的数组
*num 指定要取出的单元数量
*/
array_rand(arrray $array, int $num = 1): int|string|array
```
从数组中取出一个或多个随机的单元，并放回随机条目且对应的键（一个或多个）。它使用了伪随机数产生算法，所以不适合密码学场景。
*************
如果只取出一个，`array_rand()` 返回随机单元的键名。 否则就返回包含随机键名的数组。 完成后，就可以根据随机的键获取数组的随机值。 如果返回的是包含随机键名的数组，数组单元的顺序按照键名在原数组中的顺序排列。 取出数量如果超过 `array` 的长度，就会导致 `E_WARNING` 错误，并返回 `NULL`。
*************
```php
<?php

//索引数组
$Matrix = array("Neo","Morpheus","Trinity","Smith","Oracle","Tank");
//关联数组
$Matrix2=array("1"=>"Neo","2"=>"Morpheus","3"=>"Trinity","4"=>"Smith","5"=>"Oracle","6"=>"Tank");


//索引数组取一个
$randMatrix1 = array_rand($Matrix);
var_dump($randMatrix1);//只取一个，返回索引
echo "<br>";
var_dump($Matrix[$randMatrix1]);//索引对应的值


echo "<br>";

//关联数组取一个
$randMatrix2 = array_rand($Matrix2);
var_dump($randMatrix2);//只取一个，返回键名
echo "<br>";
var_dump($Matrix2[$randMatrix2]);//索引对应的值



echo "<br>";
echo "-----------------------";
echo "<br>";

//索引数组取两个
$randMatrix12 = array_rand($Matrix,2);
var_dump($randMatrix12);//取两个，返回
echo "<br>";
var_dump($Matrix2[$randMatrix12[0]]);
var_dump($Matrix2[$randMatrix12[1]]);

echo "<br>";


//关联数组取两个
$randMatrix22 = array_rand($Matrix2,2);
var_dump($randMatrix22);//取两个，返回键名
echo "<br>";
var_dump($Matrix2[$randMatrix22[0]]);
var_dump($Matrix2[$randMatrix22[1]]);
```
成功的例子

但是也经常失败

报错也很明显，数组越界，`array_rand()`有可能会取出根本不在数组中的索引
###shuffle()
(PHP 4, PHP 5, PHP 7, PHP 8)
`shuffle` 打乱数组
*************
```php
/*
*array 待操作的数组
*/
shuffle(array &$array): bool
```
本函数打乱（随机排列单元的顺序）一个数组。 它使用的是伪随机数产生器，并不适合密码学的场合。

注意:

如果两个成员完全相同，那么它们在排序数组中的相对顺序是未定义的。
*************
成功时返回 true， 或者在失败时返回 false。
*************
```php
<?php

//索引数组
$Matrix = array("Neo","Morpheus","Trinity","Smith","Oracle","Tank");
//关联数组
$Matrix2=array("1"=>"Neo","2"=>"Morpheus","3"=>"Trinity","4"=>"Smith","5"=>"Oracle","6"=>"Tank");


//索引数组
if(shuffle($Matrix))
{
    echo "<pre>";
    var_dump($Matrix);
}
//关联数组
if(shuffle($Matrix2))
{
    var_dump($Matrix2);
}
```