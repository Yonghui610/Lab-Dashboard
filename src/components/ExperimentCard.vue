<script setup lang="ts">
import { ArrowRight, Play } from 'lucide-vue-next';

defineProps<{
  title: string;
  description: string;
  image: string;
  tag: string;
  featured?: boolean;
  duration?: string;
  participants?: number;
}>();
</script>

<template>
  <div :class="['card', featured ? 'card--featured' : 'card--regular']">
    <div :class="['card__media', featured ? 'card__media--featured' : 'card__media--regular']">
      <img 
        :src="image" 
        :alt="title" 
        class="card__img"
      />
      <div class="card__tag">
        {{ tag }}
      </div>
      <div class="card__overlay"></div>
    </div>

    <div :class="['card__body', featured ? 'card__body--featured' : 'card__body--regular']">
      <div :class="[featured ? 'card__text' : '']">
        <h3 :class="['card__title', featured ? 'card__title--featured' : 'card__title--regular']">
          {{ title }}
        </h3>

        <p :class="['card__desc', featured ? 'card__desc--featured' : 'card__desc--regular']">
          {{ description }}
        </p>
      </div>
      <div v-if="featured">
        <button 
          class="card__cta"
        >
          立即开始
          <ArrowRight :size="14" class="card__cta-icon" />
        </button>
      </div>
      <div v-else class="card__footer">
        <div class="card__start">
          <Play :size="14" />
          <span class="card__start-text">开始实验</span>
        </div>
        <div class="card__arrow">
          <ArrowRight :size="16" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgb(241, 245, 249);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition: box-shadow 300ms ease, transform 300ms ease;
}

.card:hover {
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  transform: translateY(-4px);
}

.card--featured {
  background: rgb(243, 249, 255);
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.card--regular {
  background: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.card__media {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.card__media--featured {
  height: 256px;
  order: 1;
}

.card__media--regular {
  height: 192px;
  order: 0;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 700ms ease;
}

.card:hover .card__img {
  transform: scale(1.05);
}

.card__tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(8px);
  color: rgb(51, 65, 85);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.50);
}

.card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.10), transparent);
  opacity: 0;
  transition: opacity 200ms ease;
}

.card:hover .card__overlay {
  opacity: 1;
}

.card__body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.card__body--featured {
  order: 2;
  gap: 16px;
}

.card__body--regular {
  padding-top: 20px;
  flex: 1 1 auto;
  min-height: 0;
  justify-content: space-between;
}

.card__text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card__title {
  font-weight: 500;
  color: rgb(30, 41, 59);
  transition: color 200ms ease;
}

.card:hover .card__title {
  color: rgb(79, 70, 229);
}

.card__title--featured {
  font-size: 30px;
  line-height: 1.25;
}

.card__title--regular {
  font-size: 18px;
  line-height: 1.25;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__desc {
  color: rgb(100, 116, 139);
  font-size: 14px;
  line-height: 1.6;
}

.card__desc--featured {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__desc--regular {
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  background: rgb(15, 23, 42);
  color: white;
  padding: 12px 32px;
  border-radius: 999px;
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.18);
  transition: background-color 200ms ease, box-shadow 200ms ease;
}

.card__cta:hover {
  background: rgb(79, 70, 229);
  box-shadow: 0 20px 34px rgba(79, 70, 229, 0.18);
}

.card__cta-icon {
  transition: transform 200ms ease;
}

.card:hover .card__cta-icon {
  transform: translateX(4px);
}

.card__footer {
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid rgb(241, 245, 249);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__start {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgb(71, 85, 105);
  transition: color 200ms ease;
}

.card:hover .card__start {
  color: rgb(79, 70, 229);
}

.card__start-text {
  font-size: 14px;
  font-weight: 500;
}

.card__arrow {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: rgb(243, 244, 246);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgb(148, 163, 184);
  transition: color 200ms ease;
}

.card:hover .card__arrow {
  color: rgb(79, 70, 229);
}

@media (min-width: 768px) {
  .card--featured {
    flex-direction: row;
    gap: 64px;
    align-items: stretch;
  }

  .card__media--featured {
    width: 50%;
    order: 2;
    height: auto;
  }

  .card__body--featured {
    width: 50%;
    order: 1;
    padding-left: 8px;
  }

  .card__title--featured {
    font-size: 36px;
    max-width: 6em;
  }
}

@media (min-width: 1024px) {
  .card--featured {
    height: 352px;
  }

  .card__media--featured {
    height: 100%;
  }

  .card--regular {
    height: 352px;
  }

  .card__media--regular {
    flex: 0 0 50%;
    height: auto;
  }
}
</style>
