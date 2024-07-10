<script setup lang="ts">
import { createAccount } from '@/services/api'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()

const handleLogin = async () => {
  const response = await createAccount(name.value, email.value, password.value)
  if (response) {
    router.push('/login')
  }
}
</script>

<template>
  <div class="background">
    <div class="container">
      <div class="form-section">
        <div class="logo">
          <img src="../assets/images/logo_growtweet.svg" alt="logo growtweet" />
          <h2>Registrar no Growtwitter</h2>
        </div>
        <div class="form">
          <label>Nome:</label>
          <input class="form-input" v-model="name" type="text" />

          <label>E-mail:</label>
          <input class="form-input" v-model="email" type="text" />

          <label>Password:</label>
          <input class="form-input" v-model="password" type="password" />

          <button class="btn" v-on:click="handleLogin">Registrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.container {
  display: flex;
  width: 50%;
  height: 70%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
}

.form-section {
  width: 100%;
  padding: 1rem;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.logo {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.logo img {
  width: 70%;
}

.btn {
  padding: 10px;
  background-color: #4285f4;
  border: none;
  color: white;
  border-radius: 21px;
  cursor: pointer;
}
.btn:hover {
  background-color: #357ae8;
}

.form-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
