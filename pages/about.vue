<template lang="">
  <div>
    about
    <p>{{count}}</p>
    <button @click="increase">증가</button>
    <div> getDB => {{resData}} </div>
    <button @click="add">데이터 db에 추가</button>
  </div>
</template>

<script setup>
  const aa = useState('g', () => '얄리얄리');
  const {data: resData} = await useFetch('/api/db');
</script>

<script>
export default {
  data(){
    return{
      count: 0
    }
  },
  methods: {
    increase(){
      console.log(this.count)
      this.count++;
    },

    async add(){
      const data = {name: "도도새로", email: "wari@wari", date: "2023.03.29"}
      await useFetch('/api/db', {body: data, method: 'POST'});
    }
  }
}
</script>
<style lang="">
  
</style>