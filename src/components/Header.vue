<script setup lang="ts">
import { FlaskConical } from 'lucide-vue-next';
</script>

<template>
  <header class="app-header">
    <div class="app-header__brand">
      <div class="app-header__logo">
        <FlaskConical :size="18" />
      </div>
      <span class="app-header__title">实验中心</span>
    </div>

    <nav class="app-header__nav">
      <button class="app-header__nav-btn app-header__nav-btn--active">
        我的实验
      </button>
      <button class="app-header__nav-btn">
        班级管理
      </button>
    </nav>

    <div class="app-header__user">
      <button class="app-header__avatar">
        <img src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Alex" alt="User" class="app-header__avatar-img" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 16px;
  z-index: 50;
  background: white;
  border-radius: 16px;
  padding: 8px 16px;
  box-shadow: 0 12px 30px rgba(148, 163, 184, 0.35);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition: box-shadow 200ms ease, transform 200ms ease;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.app-header__logo {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: rgb(15, 23, 42);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
  cursor: pointer;
  transition: transform 200ms ease;
}

.app-header__logo:hover {
  transform: scale(1.05);
}

.app-header__title {
  font-weight: 700;
  font-size: 18px;
  color: rgb(30, 41, 59);
  letter-spacing: -0.01em;
}

.app-header__nav {
  display: none;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  background: rgba(241, 245, 249, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.08);
}

.app-header__nav-btn {
  padding: 10px 32px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(100, 116, 139);
  transition: background-color 200ms ease, color 200ms ease, box-shadow 200ms ease, transform 200ms ease;
}

.app-header__nav-btn:hover {
  color: rgb(15, 23, 42);
  background: rgba(255, 255, 255, 0.55);
}

.app-header__nav-btn--active {
  background: rgb(15, 23, 42);
  color: white;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.10);
}

.app-header__nav-btn--active:hover {
  background: rgb(15, 23, 42);
  color: white;
  transform: translateY(-1px);
}

.app-header__user {
  display: flex;
  align-items: center;
}

.app-header__avatar {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: rgb(248, 250, 252);
  overflow: hidden;
  border: 2px solid white;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
  transition: border-color 200ms ease;
}

.app-header__avatar:hover {
  border-color: rgb(226, 232, 240);
}

.app-header__avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 200ms ease;
}

.app-header__avatar:hover .app-header__avatar-img {
  transform: scale(1.10);
}

@media (min-width: 768px) {
  .app-header {
    border-radius: 999px;
    padding: 8px 24px;
  }

  .app-header__nav {
    display: flex;
  }
}
</style>
