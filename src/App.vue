<template>
  <div class="layout">
    <WebHeader />
     <RouterView></RouterView>
    <WebFooter />
  </div>
</template> 

<script setup>
import WebHeader from './components/Header/WebHeader.vue';
import HomePage from './components/Pages/HomePage.vue';
import WebFooter from './components/Footer/WebFooter.vue';
</script>


