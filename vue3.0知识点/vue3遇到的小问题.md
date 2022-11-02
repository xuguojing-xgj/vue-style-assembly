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
###### vue3父子传值中数据undefined或者不是响应式

```
// 在vue3中使用Propsfined() 接收父组件的传值时 刷新页面获取数据为undefined
// 并且数据不是为响应式的 具体可看官方文档
// https://cn.vuejs.org/guide/components/props.html#one-way-data-flow (单项数据流)
// 使用计算属性进行包裹 使数据成为响应式数据

// 父组件
<father :data="FatherData"> <father>

// 子组件接收
interface Props  {
    data: Array<string>
}

const props = defineProps<Props>()

// 该 prop 变更时计算属性也会自动更新
const normalizedSize = computed(() => props.data)

```
###### vue3上传图片问题

```
// 模板信息
<el-upload :file-list="fileList" action="" list-type="picture-card" :auto-upload="false"
:on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-change="uploadChange">
    <el-icon>
        <Plus />
    </el-icon>
</el-upload>
<el-dialog v-model="imgDialogVisible" style="width:400px;">
      <img w-full style="width:100%;" :src="dialogImageUrl" alt="Preview Image" />
</el-dialog>

// js/ts 代码

// 导入
import { ref, reactive, onMounted } from 'vue'
import type { UploadFile, UploadFiles, UploadProps, UploadUserFile } from 'element-plus'
// 保存文件响应式
const fileList = ref<UploadUserFile[]>([])
// 图片放大
const imgDialogVisible = ref(false)
// 放大图片地址
const dialogImageUrl = ref('')

// 图片放大
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    imgDialogVisible.value = true
}
// 移除图片
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}
// 上传时
const uploadChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    console.log('1111111111', uploadFile);
}
```
