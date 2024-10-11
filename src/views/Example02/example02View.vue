<script lang="ts" setup>
import type { User } from '@/type' // 引入自定义类型
import { reactive } from 'vue'

const user: User = {
  name: 'AAA',
  insertTime: '2046-04-1120:24:59',
  address: '916'
}
const userAsync: User = {
  name: 'BBB',
  insertTime: '2046-04-1120:24:59',
  address: '956'
}
// ***************
let userReactive = reactive(user)
console.log(userReactive)
const changeUserWrong = () => {
  setTimeout(() => {
    userReactive = userAsync
  }, 1000)
}

const changeUserRight = () => {
  setTimeout(() => {
    userReactive.name = userAsync.name
    userReactive.insertTime = userAsync.insertTime
    userReactive.address = userAsync.address
  }, 1000)
}
// ***************
</script>
<template>
  <div>
    <h6>
      reactive()函数，像一个魔法棒，把普通人变成超级赛亚人，方便调用修改，将对象转为响应式对象，不支持基本数据类型，number/boolean等,
    </h6>
    <h6>userReact为代理对象，封装的user对象为响应式。直接改变userReact引用的对象是无效的。</h6>
    <button @click="changeUserWrong">失败赋值</button>
    <h6>userReactive的值为：{{ userReactive }}</h6>
    <h6>会出现错误，userReact为代理对象，而user已经是响应式，记得要修改对应属性值，不然不好用</h6>
    <button type="button" @click="changeUserRight">成功赋值</button>
    <h6>userReactive的值为：{{ userReactive }}</h6>
    <h6>
      使用 reactive()
      创建的响应式对象能够感知其内部属性的更改，但不能感知整个对象引用的改变。因此，要更新响应式对象，应该直接修改其属性，而不是改变对象的引用
    </h6>
  </div>
</template>
