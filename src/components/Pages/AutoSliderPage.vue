<template>
  <div class="slider-container">
    <div class="arrow left" @click="prev">&#10094;</div>

    <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: index === current }"
      :style="{ backgroundImage: `url(${slide.image})` }">
      <div class="slide-text">
        <h1 class="title">{{ slide.title }}</h1>
        <p class="subtitle">{{ slide.subtitle }}</p>
        <p class="box-getinformation">{{ slide.infomation }}</p>
      </div>
    </div>

    <div class="arrow right" @click="next">&#10095;</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slides = [
  {
    image: new URL('@/assets/images/bgwork.jpg', import.meta.url).href,
    title: ' Selection and placement',
    infomation: 'Get information'
  },
  {
    image: new URL('@/assets/images/bgwork2.jpg', import.meta.url).href,
    title: 'Carrer Coaching',
    subtitle: 'When you want to take your carrer in a new direction, we support  you to achieve your goals effectievely',
    infomation: 'Get infomation'
  }
]


const current = ref(0)

const next = () => {
  current.value = (current.value + 1) % slides.length
}

const prev = () => {
  current.value =
    (current.value - 1 + slides.length) % slides.length
}
</script>

<style scoped>
.slider-container {
  position: relative;
  height: 570px;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  display: none;
  background-size: cover;
  background-position: center;
}

.slide.active {
  display: block;
  margin-top: 170px;
}

/* ARROW */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: white;
  cursor: pointer;
  z-index: 10;
  padding: 10px;
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}
.title{
  color: white;
    text-align: center;
    margin-top: 185px;
    font-size: 60px;
}
.box-getinformation{
  color: white;
    border: 1px solid #de7c20;
      background-color: #de7c20;
    width: 230px;
    font-size: 30px;
    border-radius: 22px;
    height: 50px;
    margin-left: 510px;
    margin-top: 15px;
    padding-left: 10px;
}
.subtitle{
      color: white;
    font-size: 20px;
    text-align: center;
}
</style>
