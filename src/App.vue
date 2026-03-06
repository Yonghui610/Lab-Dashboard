<script setup lang="ts">
import Header from './components/Header.vue';
import HeroBanner from './components/HeroBanner.vue';
import StatsTopCards from './components/StatsTopCards.vue';
import StatsBottomCard from './components/StatsBottomCard.vue';
import FilterBar from './components/FilterBar.vue';
import ExperimentList from './components/ExperimentList.vue';
</script>

<template>
  <div class="min-h-screen bg-[#f3f4f6] pb-12 font-sans text-slate-900 flex justify-center">
    <div class="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-6">
      <Header class="mb-6" />
      
      <!-- Top Section: Row 1 -->
      <div class="flex flex-col lg:flex-row gap-6 mb-6 items-stretch">
        <!-- Left: Hero -->
        <div class="w-full lg:w-[72%]">
          <HeroBanner />
        </div>
        <!-- Right: Stats (Time + Score) -->
        <div class="flex-1 min-w-0">
          <StatsTopCards />
        </div>
      </div>

      <!-- Bottom Section: Row 2 -->
      <div class="flex flex-col lg:flex-row gap-6 mb-10 items-stretch lg:h-[168px]">
        <!-- Left: Filter -->
        <div class="w-full lg:w-[72%]">
          <FilterBar />
        </div>
        <!-- Right: Stats (Completion Rate) -->
        <div class="flex-1 min-w-0">
          <StatsBottomCard />
        </div>
      </div>

      <!-- Experiment List -->
      <ExperimentList />
    </div>
  </div>
</template>
