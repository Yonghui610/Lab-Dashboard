<script setup lang="ts">
import { ListFilter } from 'lucide-vue-next';
</script>

<template>
  <div class="filter">
    <div class="filter__header">
      <div class="filter__title">
        <ListFilter :size="20" />
        <span>筛选条件</span>
      </div>
      <button class="filter__reset">
        重置所有
      </button>
    </div>

    <div class="filter__grid">
      <div class="filter__field">
        <label class="filter__label">一级知识模块</label>
        <select class="filter__select">
          <option>全部专业</option>
          <option>计算机科学</option>
          <option>生物工程</option>
          <option>物理学</option>
        </select>
        <div class="filter__chevron" aria-hidden="true">
          <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      
      <div class="filter__field">
        <label class="filter__label">二级知识模块</label>
        <select class="filter__select">
          <option>全部课程</option>
          <option>深度学习</option>
          <option>量子物理</option>
          <option>分子生物</option>
        </select>
        <div class="filter__chevron" aria-hidden="true">
          <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      <div class="filter__field">
        <label class="filter__label">实验形态</label>
        <select class="filter__select">
          <option>全部类型</option>
          <option>理解型</option>
          <option>建构型</option>
          <option>迁移型</option>
        </select>
        <div class="filter__chevron" aria-hidden="true">
          <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  background: rgb(235, 235, 235);
  border-radius: 24px;
  padding: 20px;
  border: 1px solid rgba(226, 232, 240, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.filter__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.filter__title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgb(30, 41, 59);
  font-weight: 500;
  font-size: 18px;
}

.filter__reset {
  font-size: 14px;
  color: rgb(100, 116, 139);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 200ms ease;
}

.filter__reset:hover {
  color: rgb(79, 70, 229);
}

.filter__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.filter__field {
  position: relative;
}

.filter__label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: rgb(148, 163, 184);
  margin: 0 0 4px 4px;
}

.filter__select {
  width: 100%;
  appearance: none;
  background: rgb(248, 250, 252);
  border: 1px solid rgb(226, 232, 240);
  color: rgb(51, 65, 85);
  padding: 12px 32px 12px 16px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.filter__select:focus {
  outline: none;
  background: white;
  border-color: rgb(79, 70, 229);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
}

.filter__chevron {
  pointer-events: none;
  position: absolute;
  right: 0;
  bottom: 12px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: rgb(148, 163, 184);
  transition: color 200ms ease;
}

.filter__field:hover .filter__chevron {
  color: rgb(79, 70, 229);
}

@media (min-width: 768px) {
  .filter__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
