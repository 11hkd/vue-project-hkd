<script lang="ts" setup>
import type { User } from '@/type'
import { computed, ref } from 'vue'

const user: User = {
  name: 'BO',
  insertTime: '2046-04-09T11:04:25'
}

const userRef = ref(user)

const changeAddress = () => {
  userRef.value.address = (Math.random() * 1000).toFixed(0)
}
// 计算属性，返回的不是值，而是函数
const formatDateFunc = computed(() => (data: string) => data.replace('T', ' '))

//
const userR2 = ref<User>({
  name: 'BO',
  insertTime: '2046-04-09T11:04:25',
  courses: [{ id: 12 }]
})

const changeUserR2 = () => {
  userR2.value.courses &&
    userR2.value.courses[0] &&
    (userR2.value.courses[0].id = Math.floor(Math.random() * 10))
}
</script>
<template>
  <div>
    <h6>Proxy允许你拦截并自定义基本的操作,第一眼感觉像filter，还比filter强大</h6>
    <button type="button" @click="changeAddress">changeAddress</button>
    <br />
    userRef的值为：{{ userRef }}
    <br />
    <hr />
    <h6>计算属性返回函数11</h6>
    <h6>需要基于获取的数据，动态绑定计算结果时。</h6>
    <h6>正常渲染结果： {{ userRef.insertTime }}</h6>
    <h6>计算属性返回函数：{{ formatDateFunc(userRef.insertTime || '') }}</h6>
    <br />
    <h5>响应式数据的深度</h5>
    <p>
      响应式对象下的属性对象下的数据改变时，依然是响应式的。
      <br />
      {{ userR2.courses }}
      <br />
      <button @click="changeUserR2">点击随机生成</button>
    </p>
    <p>1111</p>
    
  </div>
</template>
