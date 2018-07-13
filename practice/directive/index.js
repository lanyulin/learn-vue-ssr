import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-show="active">{{text + '吗？'}}</div>
      <div v-if="!active">{{text}}</div> <!-- v-if会动态增删节点，会引起dom重绘 -->
     
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{key}}: {{val}} {{index}}</li>
      </ul>
      
      <input type="text" v-model.number="name1">
      <input type="text" v-model.trim="name2">
      
      <div>
        <input type="checkbox" value="a" v-model="arr2">
        <input type="checkbox" value="b" v-model="arr2">
        <input type="checkbox" value="c" v-model="arr2">
      </div>
      <ul>
        <li v-for="(item, index) in arr2" :key="item">{{item}}</li>
      </ul>
      
      <div>
        <input type="radio" value="a" v-model="picked">
        <input type="radio" value="b" v-model="picked">
      </div>
      <p>{{picked}}</p>
      
      <div v-pre>{{text}}</div>  <!--内容会输出{{text}}字符串-->
      
      <div v-once>{{text}}</div>  <!--数据绑定只执行一次,告诉vue不用更新，不用虚拟dom-->
    </div>
  `,
  data: {
    text: '你好',
    active: false,
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    name1: 122,
    name2: '',
    arr2: ['a', 'b', 'c'],
    picked: 'a'
  }
})
