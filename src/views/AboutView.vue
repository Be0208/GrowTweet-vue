<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="container">
    <header>
      <NavBar />
    </header>

    <main>
      <h1>Explorar</h1>
    </main>

    <footer>
      <h2>Oque esta acontecenndo?</h2>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

header {
  width: 20%;
  height: 100%;

  border-right: 3px solid #e1e8ed;
  box-sizing: border-box;
}
main {
  width: 60%;
  height: 100%;

  border-right: 3px solid #e1e8ed;
  box-sizing: border-box;
}
footer {
  width: 20%;
  height: 100%;

  border-right: 3px solid #e1e8ed;
  box-sizing: border-box;
}
</style>
