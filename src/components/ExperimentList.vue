<script setup lang="ts">
import { ref, computed } from 'vue';
import { Search } from 'lucide-vue-next';
import ExperimentCard from './ExperimentCard.vue';
import Pagination from './Pagination.vue';

const tabs = ['全部', '理解', '建构', '迁移'];
const activeTab = ref('全部');
const searchQuery = ref('');

const experiments = [
  {
    id: 1,
    title: '手势识别深度学习',
    description: '使用卷积神经网络(CNN)构建实时手势识别系统。本实验将带您从WebCam数据采集开始，逐步完成模型训练与部署。',
    tag: '理解型',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    duration: '4课时',
    participants: 2341
  },
  {
    id: 2,
    title: '量子纠缠可视化',
    description: '利用量子电路模拟器，观察并验证量子比特的纠缠特性。通过贝尔不等式实验，直观...',
    tag: '理解型',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3课时',
    participants: 1205
  },
  {
    id: 3,
    title: '香农公式带宽验证',
    description: '在噪声环境下模拟信道传输，验证香农-哈特利定理的极限传输速率。调整信噪比...',
    tag: '建构型',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2课时',
    participants: 982
  },
  {
    id: 101,
    title: '手势识别深度学习',
    description: '使用卷积神经网络(CNN)快速上手手势分类任务，了解数据预处理、训练与推理的完整流程。',
    tag: '理解型',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2课时',
    participants: 856
  },
  {
    id: 6,
    title: '分子链模拟器',
    description: '构建并操纵复杂有机分子的化学键交互。通过直观的3D交互界面，探索微观世界的动...',
    tag: '理解型',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2课时',
    participants: 1120
  },
  {
    id: 4,
    title: 'DNA序列对比',
    description: '实现 Needleman-Wunsch 算法，对基因序列进行全局比对分析。生物信息学的基础...',
    tag: '建构型',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4课时',
    participants: 1567
  },
  {
    id: 5,
    title: '星系引力模拟',
    description: '基于多体问题算法(N-Body)，模拟两个星系合并过程中的恒星运动轨迹。体验天体物...',
    tag: '迁移型',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3课时',
    participants: 890
  }
];

const filteredExperiments = computed(() => {
  return experiments.filter(exp => {
    const matchesTab = activeTab.value === '全部' || exp.tag.includes(activeTab.value);
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          exp.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesTab && matchesSearch;
  });
});
</script>

<template>
  <div class="exp-list">
    <div class="exp-list__header">
      <div class="exp-list__left">
        <div class="exp-list__title-wrap">
          <h2 class="exp-list__title">精选实验</h2>
          <span class="exp-list__count">192</span>
        </div>

        <div class="exp-search exp-search--desktop">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索实验..."
            class="exp-search__input"
          />
          <Search :size="16" class="exp-search__icon" />
        </div>
      </div>

      <div class="exp-list__right">
        <div class="exp-tabs">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            :class="['exp-tabs__btn', activeTab === tab && 'exp-tabs__btn--active']"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="exp-search exp-search--mobile">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索实验..."
          class="exp-search__input exp-search__input--mobile"
        />
        <Search :size="18" class="exp-search__icon exp-search__icon--mobile" />
      </div>
    </div>

    <!-- Grid -->
    <div class="exp-grid">
      <template v-for="experiment in filteredExperiments" :key="experiment.id">
        <div :class="[
          'exp-grid__item',
          (experiment.featured && activeTab === '全部' && !searchQuery) && 'exp-grid__item--featured'
        ]">
          <ExperimentCard 
            v-bind="experiment"
            :featured="experiment.featured && activeTab === '全部' && !searchQuery"
          />
        </div>
      </template>
    </div>

    <div v-if="filteredExperiments.length === 0" class="text-center py-20 text-slate-400">
      未找到相关实验
    </div>

    <Pagination v-if="filteredExperiments.length > 0" />
  </div>
</template>

<style scoped>
.exp-list {
  margin-top: 32px;
}

.exp-list__header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.exp-list__left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.exp-list__title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.exp-list__title {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 500;
  color: rgb(30, 41, 59);
}

.exp-list__count {
  background: rgb(15, 23, 42);
  color: white;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 999px;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.12);
}

.exp-list__right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.exp-tabs {
  display: none;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  border: 1px solid rgba(226, 232, 240, 0.6);
  background: white;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  width: 220px;
}

.exp-tabs__btn {
  flex: 1 1 0;
  padding: 6px 0;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(100, 116, 139);
  transition: background-color 200ms ease, color 200ms ease, box-shadow 200ms ease;
}

.exp-tabs__btn:hover {
  color: rgb(15, 23, 42);
  background: rgb(248, 250, 252);
}

.exp-tabs__btn--active {
  background: rgb(15, 23, 42);
  color: white;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.12);
}

.exp-tabs__btn--active:hover {
  background: rgb(15, 23, 42);
  color: white;
}

.exp-search {
  position: relative;
}

.exp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.exp-grid__item {
  min-width: 0;
}

.exp-search__input {
  width: 220px;
  padding: 8px 16px 8px 40px;
  border-radius: 999px;
  border: 1px solid rgb(226, 232, 240);
  background: white;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.exp-search__input:focus {
  outline: none;
  border-color: rgb(79, 70, 229);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
}

.exp-search__icon {
  position: absolute;
  left: 14px;
  top: 9px;
  color: rgb(148, 163, 184);
  transition: color 200ms ease;
}

.exp-search:hover .exp-search__icon {
  color: rgb(79, 70, 229);
}

.exp-search:hover .exp-search__input {
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.10);
}

.exp-search--desktop {
  display: none;
}

.exp-search--mobile {
  display: block;
}

.exp-search__input--mobile {
  width: 100%;
  padding: 10px 16px 10px 44px;
}

.exp-search__icon--mobile {
  left: 16px;
  top: 10px;
}

@media (min-width: 640px) {
  .exp-tabs {
    display: flex;
  }

  .exp-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .exp-list__header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .exp-search--desktop {
    display: block;
  }

  .exp-search--mobile {
    display: none;
  }
}

@media (min-width: 1024px) {
  .exp-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .exp-grid__item--featured {
    grid-column: span 2;
  }

  .exp-tabs {
    width: 260px;
  }

  .exp-search__input {
    width: 260px;
  }
}
</style>
