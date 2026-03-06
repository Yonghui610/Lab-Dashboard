<script setup lang="ts">
</script>

<template>
  <div class="h-full">
    <!-- Card 3: Completion Rate -->
    <div class="completion-card">
      <div class="completion-card__header">
        <div>
          <h3 class="completion-card__value">86%</h3>
          <p class="completion-card__label">实验任务完成率</p>
        </div>
      </div>
      <div class="completion-card__track" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
        <div class="completion-card__bar"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.completion-card {
  background: rgb(229, 224, 255);
  padding: 32px 24px 24px 32px;
  border-radius: 24px;
  height: 100%;
  border: 1px solid rgb(243, 232, 255);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: box-shadow 200ms ease;
}

.completion-card:hover {
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.10);
}

.completion-card__header {
  margin-bottom: 16px;
}

.completion-card__value {
  font-size: 30px;
  line-height: 1.15;
  font-weight: 700;
  color: rgb(159, 85, 209);
}

.completion-card__label {
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  color: rgb(147, 51, 234);
}

.completion-card__track {
  width: 100%;
  height: 8px;
  background: white;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.08);
}

.completion-card__bar {
  height: 100%;
  width: 86%;
  background: rgb(15, 23, 42);
  border-radius: 999px;
  transition: width 1000ms ease-out;
}
</style>
