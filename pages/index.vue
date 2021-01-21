<template>
  <div>
    <h1>frourio-todo-app</h1>
    <p v-if="res === null">読込中</p>
    <p v-else>PONG! {{res.ts}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Pong } from '~/server/types';

export default Vue.extend({
  data() {
    return {
      res: null as Pong | null,
      error: null as string | null,
    }
  },
  async fetch() {
    const res = await this.$api.ping.get();
    this.res = res.body;
  },
  methods: {

  }
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.tasks {
  width: 300px;
  padding: 0;
  margin: 20px auto 0;
  list-style-type: none;
  text-align: left;
}

.tasks > li {
  margin-top: 10px;
  border-bottom: 1px solid #eee;
}
</style>
