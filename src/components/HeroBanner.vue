<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <h1 class="hero__title">
        开启沉浸式<br />
        <span class="hero__title-accent">科研新体验</span>
      </h1>
      <p class="hero__desc">
        还有 <span class="hero__desc-strong">24</span> 名学生尚未完成实验任务
      </p>
      
      <button class="hero__cta">
        <span class="hero__cta-text">进入班级管理</span>
        <ArrowRight :size="18" class="hero__cta-icon" />
      </button>
    </div>
    
    <div class="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute -bottom-8 -left-8 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  padding: 32px;
  border: 1px solid rgb(241, 245, 249);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, rgb(250, 245, 255), rgb(253, 242, 248), rgb(238, 242, 255));
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 520px;
}

.hero__title {
  font-size: 40px;
  line-height: 1.15;
  font-weight: 500;
  color: rgb(30, 41, 59);
  margin-bottom: 16px;
}

.hero__title-accent {
  background: linear-gradient(90deg, rgb(79, 70, 229), rgb(147, 51, 234));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__desc {
  color: rgb(71, 85, 105);
  margin-bottom: 32px;
  font-weight: 400;
}

.hero__desc-strong {
  color: rgb(79, 70, 229);
  font-weight: 500;
}

.hero__cta {
  background: rgb(15, 23, 42);
  color: white;
  padding: 12px 24px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.18);
  transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
}

.hero__cta:hover {
  background: rgb(30, 41, 59);
  transform: translateY(-2px);
  box-shadow: 0 20px 38px rgba(15, 23, 42, 0.20);
}

.hero__cta-text {
  font-weight: 500;
}

.hero__cta-icon {
  transition: transform 200ms ease;
}

.hero__cta:hover .hero__cta-icon {
  transform: translateX(4px);
}

@media (min-width: 768px) {
  .hero {
    padding: 40px;
  }

  .hero__title {
    font-size: 48px;
  }
}

@media (min-width: 1024px) {
  .hero {
    height: 360px;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
</style>
