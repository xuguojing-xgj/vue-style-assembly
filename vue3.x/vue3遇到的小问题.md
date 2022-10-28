###### form表单 rules 校验规则 
- prop 需要跟 v-model 绑定的值一样 否则就会警告 fieldValue: 为 undefined
```
{
checkboxs: Array(1)
  checkboxs: Array(1): 
    {message: '请选择组织类型', fieldValue: undefined, field: 'checkboxs'}
      length: 1
      [[Prototype]]: Array(0)
      [[Prototype]]: Object
}
```

###### 在vue3中使用 canvas 生成随机验证码
- 在canvas标签 使用ref获取不到dom标签时 查看否有 v-if 判断在 dom 树上将标签删除
```
报错信息 大致为 ... getContext
```
- 使用 toDataURL 获取 canvas 随机生成图片地址

###### v-dialog 弹层改变handler头部背景颜色

```
   :deep(.el-dialog__header) {
       background-color: #F5F5F5;
       margin: 0;
       span {
               font-size: 14px;
               font-weight: bolder;
            }
    }
   :deep(.el-dialog__body) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       div {
           margin-top: 10px;
       }
   }
```
