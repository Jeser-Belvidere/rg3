<script setup lang="ts">
import { ref } from 'vue'
import { io } from "socket.io-client";

defineProps<{ msg: string }>()

const socket = io("http://localhost:8080");
socket.emit('ping', 'input.value');
const count = ref(0)
const sendRequest = () => fetch('http://localhost:81')
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="sendRequest()">Send request</button>

    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
