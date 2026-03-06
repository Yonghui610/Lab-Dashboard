<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
</script>

<template>
  <div class="pagination">
    <div class="pagination__inner">
      <button class="pagination__btn pagination__btn--ghost pagination__btn--prev">
        <ChevronLeft :size="18" />
      </button>
      
      <button class="pagination__btn pagination__btn--active">
        1
      </button>
      
      <!-- Numbers 2-11 -->
      <button v-for="n in 10" :key="n" class="pagination__btn pagination__btn--text">
        {{ n + 1 }}
      </button>

      <span class="pagination__ellipsis">···</span>
      
      <button class="pagination__btn pagination__btn--text">
        18
      </button>

      <button class="pagination__btn pagination__btn--ghost pagination__btn--next">
        <ChevronRight :size="18" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 96px;
  margin-bottom: 56px;
}

.pagination__inner {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.pagination__btn {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
}

.pagination__btn--ghost {
  background: white;
  border: 1px solid rgb(226, 232, 240);
  color: rgb(148, 163, 184);
}

.pagination__btn--ghost:hover {
  color: rgb(100, 116, 139);
  border-color: rgb(203, 213, 225);
}

.pagination__btn--active {
  background: rgb(15, 23, 42);
  color: white;
  box-shadow: 0 10px 22px rgba(226, 232, 240, 0.9);
}

.pagination__btn--active:hover {
  background: rgb(30, 41, 59);
}

.pagination__btn--text {
  background: transparent;
  border: 1px solid transparent;
  color: rgb(100, 116, 139);
}

.pagination__btn--text:hover {
  background: white;
  border-color: rgb(226, 232, 240);
  color: rgb(15, 23, 42);
}

.pagination__btn--prev {
  margin-right: 2px;
}

.pagination__btn--next {
  margin-left: 2px;
}

.pagination__ellipsis {
  color: rgb(203, 213, 225);
  padding: 0 1px;
  font-weight: 500;
}
</style>
