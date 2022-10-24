###### vue3 中 vue-router 跳转方式

```
import { useRouter } from 'vue-router'

const router = useRouter()

// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?userId=123
router.push({ path: 'register', query: { userId: '123' }})


```
