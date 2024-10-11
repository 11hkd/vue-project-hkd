<script lang="ts" setup>
import type { User } from '@/type' // 引入自定义类型
import { computed, ref, watch, watchEffect } from 'vue'

const message = 'hello world'

const userAsync: User = {
  name: 'AAA',
  insertTime: '2046-04-11T20:24:59',
  address: '956'
}
const user: User = {
  name: 'BBB',
  insertTime: '2046-04-09T11:04:25'
}
const messageRef = ref('hello world')
const userRef = ref(user)
//
console.log(messageRef) //打印
console.log(userRef)

// 视图执行函数
const ChangeuserRef = () => {
  setTimeout(() => {
    userRef.value = userAsync
  }, 1000)
}
// computed()函数
const userComputed = computed(() => userRef.value.insertTime?.replace('T', ' '))

const changeUserRefx = () => {
  setTimeout(() => {
    userRef.value.name = 'CCC'
  }, 1000)
}
watch(
  userRef,
  (newUser, oldUser) => {
    alert(`watch被激活。检测到name被改变，现在被改为: ${newUser.name}`)
    console.log(`旧的名字是: ${oldUser.name}`)
  },
  {
    deep: true
  }
)
// 首次进入时即执行回调
watchEffect(() => {
  console.log(`watchEffect: ${userRef.value.name}`)
})
</script>
<template>
  <div>
    <h5>非响应式</h5>
    <h6>普通数据也可渲染在视图。以下message数据为非响应式的静态数据，即数据改变时视图无响应</h6>
    <h6>message的值为：{{ message }}</h6>
    <hr />
    <h5>响应式</h5>
    <h6>
      composition-api是可以用JS函数和钩子来定义和管理组件逻辑，钩子解释为比较厉害的函数，比较常见的是ref、reactive、computed、watch、onMounted、onUpdated
      和 onUnmounted
    </h6>
    <h6>组合式API：函数组合+响应式+钩子（生命周期）+集成</h6>
    <h6>
      响应式编程，以逻辑为中心变为以数据为中心提升 QPS（用更少的线程资源实现更高的并发能力，降低 CPU
      负荷,提高利用率，但异步化？回调地狱？
    </h6>
    <hr />
    <h6>
      理解ref()有点像指针的意思，
      接受一个参数，通常是初始值，返回的是一个引用对象。这个引用对象有一个 .value
      属性，用于访问或修改实际的值。但不是指针。ref()函数是响应式的，当引用对象的值发生变化时，视图会自动更新。更高级点
    </h6>
    <h6>在JS中使用console.log(userRef)进行引用const ChangeuserAsync进行赋值</h6>
    <button type="button" @click="ChangeuserRef">点击执行ChangeuserRef函数</button>
    <h6>注意看userRef值的变化：{{ userRef }}</h6>
    <h6>可以通过刷新页面，重新点击执行按钮体验</h6>
    <hr />
    <h6>computed()函数声明计算属性，当属性变化事才重新计算渲染</h6>
    <h6>注意看userRef值的变化：{{ userRef }}</h6>
    <hr />
    <h6>
      watch()用于监听数据的变化，并在变化发生时执行一些操作。这在很多场景下都非常有用，比如数据验证、异步操作或者根据某个数据的变化来更新其他数据
    </h6>
    <h6>
      watch 更适合处理特定数据的变化并执行特定的逻辑，而 watchEffect
      则更适合处理副作用，如数据的实时显示或日志记录
    </h6>
    <h6>watch()必须监听响应式属性(Ref对象),有old ,new.bool</h6>
    <button @click="changeUserRefx">改变响应式对象中的属性中数据name，watch()</button>
    <h6>
      当我多次点击时候，那就执行多次一样的函数，还是会监听，判断新老数据是否相等，来决定是否更新会不会更好
    </h6>
  </div>
</template>
