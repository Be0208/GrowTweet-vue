<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<!-- <template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink> // foi
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink> // foi
        <RouterLink to="/register">criar conta</RouterLink> // nao precisa
      </nav>
    </div>
  </header>
</template> -->

<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <img src="../assets/images/logo_growtweet.svg" alt="logo growtweet" />
    </div>
    <div class="sidebar-item">
      <span class="icon"><img src="../assets/images/icone_pagina inicial.svg" /></span>
      <RouterLink to="/">Pagina inicial</RouterLink>
    </div>
    <div class="sidebar-item">
      <span class="icon"><img src="../assets/images/icone_explorar.svg" /></span>
      <RouterLink to="/about">Explorar</RouterLink>
    </div>
    <div class="sidebar-item">
      <span class="icon"><img src="../assets/images/icone_perfil.svg" /></span>
      <a href="#">Perfil</a>
    </div>
    <button class="tweet-button">Tweetar</button>
    <div class="user-bar">
      <div class="card-user">
        <img src="../assets/images/icone_perfil.svg" />
      </div>
      <RouterLink to="/login">sair</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  border-right: 3px solid #e1e8ed;
  height: 100%;
  box-sizing: border-box;
}

.sidebar-item {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar-item a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-left: 10px;
}

.sidebar-item:hover {
  background-color: #f5f8fa;
}

.user-bar {
  width: 15%;
  position: fixed;
  left: 2rem;
  bottom: 2rem;
}
.user-bar a {
  text-decoration: none;
  color: black;
}
.card-user {
  margin: 20px;
  padding: 10px 20px;
  background-color: #1da1f2;

  border-radius: 20px;
}

.icon {
  width: 10px;
}

.tweet-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tweet-button:hover {
  background-color: #1a91da;
}
</style>
