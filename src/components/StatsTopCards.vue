<script setup lang="ts">
import { Clock, Star } from 'lucide-vue-next';
</script>

<template>
  <div class="stats">
    <!-- Card 1: Time -->
    <div class="stats__card stats__card--time">
      <div class="stats__content">
        <div>
          <h3 class="stats__value stats__value--time">12.5h</h3>
          <p class="stats__label stats__label--time">实验运行总时长</p>
        </div>
      </div>
      <Clock :size="80" class="stats__watermark stats__watermark--clock" />
    </div>

    <!-- Card 2: Score -->
    <div class="stats__card stats__card--score">
      <div class="stats__content">
        <div>
          <h3 class="stats__value stats__value--score">89 分</h3>
          <p class="stats__label stats__label--score">实验平均评分</p>
        </div>
      </div>
      <Star :size="80" class="stats__watermark stats__watermark--star" />
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

.stats__card {
  position: relative;
  overflow: hidden;
  padding: 32px 24px 24px 32px;
  border-radius: 24px;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  display: flex;
  flex: 1;
  transition: box-shadow 200ms ease;
}

.stats__card:hover {
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.10);
}

.stats__card--time {
  background: rgb(226, 252, 241);
  border-color: rgb(220, 252, 231);
}

.stats__card--score {
  background: rgb(255, 243, 223);
  border-color: rgb(255, 237, 213);
}

.stats__content {
  position: relative;
  z-index: 1;
}

.stats__value {
  font-size: 30px;
  line-height: 1.15;
  font-weight: 700;
}

.stats__value--time {
  color: rgb(5, 77, 58);
}

.stats__value--score {
  color: rgb(128, 51, 24);
}

.stats__label {
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
}

.stats__label--time {
  color: rgb(22, 163, 74);
}

.stats__label--score {
  color: rgb(234, 88, 12);
}

.stats__watermark {
  pointer-events: none;
  position: absolute;
  right: -8px;
  bottom: -8px;
}

.stats__watermark--clock {
  color: rgba(5, 77, 58, 0.15);
  transform: rotate(6deg);
}

.stats__watermark--star {
  color: rgba(255, 166, 95, 0.20);
  transform: rotate(15deg);
}
</style>
