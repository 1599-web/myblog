<template>
  <div>
    <div class="container">
      <div>
        <headView></headView>
      </div>
      <div class="headerBack">
        <div class="wrapper">
          <div class="fake-input">{{ displayedText }}</div>
        </div>
      </div>
      <!-- <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 30c30 0 58-3 88-3s 58 3 88 3 58-3 88-3 58 3 88 3 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="1" fill="rgba(31, 31, 31, 0.7)"/>
            <use xlink:href="#gentle-wave" x="48" y="1" fill="rgba(31, 31, 31, 0.7)"/>
            <use xlink:href="#gentle-wave" x="48" y="2" fill="rgba(31, 31, 31, 0.7)"/>
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(31, 31, 31, 0.7)"/>
          </g>
        </svg>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import headView from '@/components/headView.vue';
import { ref, onMounted } from "vue";

const fullText = "你看对面的青山多美丽"; // 目标文本
const displayedText = ref(""); // 当前显示的文本
let index = 0;

onMounted(() => {
  setInterval(() => {
    if (index < fullText.length) {
      displayedText.value += fullText[index];
      index++;
    } else {
      displayedText.value = "";
      index = 0;
    }
  }, 1000); // 控制每个字出现的间隔时间
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.headerBack {
  position: absolute;
  top: 0vh;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/indeximage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}
.waves {
  position: absolute;
  top: 30vh;
  left: 0;
  width: 100%;
  height: 67vh;
  min-height: 200px;
  max-height: 100vh;
  z-index: 2;
}
.parallax > use {
  animation: move 4s cubic-bezier(.55, .5, .45, .5) infinite;
}
@keyframes move {
  0% {
    transform: translateX(-90px);
  }
  100% {
    transform: translateX(85px);
  }
}
.waves use {
  fill-opacity: 1;
}
.waves use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.waves use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.waves use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.waves use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 8px;
}
.fake-input {
  font-size: 20px;
  font-style: italic;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border: none;
  background-color: transparent;
  padding-right: 20px;
  display: inline-block;
  margin: 0 auto;
}
.fake-input::after {
  content: "|";
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 100% { opacity: 0 }
  50% { opacity: 1 }
}
</style>