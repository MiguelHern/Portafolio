<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <!-- Images -->
    <h4 class="text-xl font-bold md:hiden mb-2">{{ title }}</h4>
    <div class="overflow-hidden relative">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="index" class="min-w-full">
          <img :src="image" alt="Carousel image" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      :class="switchControls"
    >
      ‹
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      :class="switchControls"
    >
      ›
    </button>

    <!-- Indicators -->
    <div class="flex justify-center mt-4 space-x-2"
    :class="switchControls">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        class="block w-3 h-3 rounded-full cursor-pointer"
        :class="currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'"
      ></span>
    </div>
  </div>
  <div class="md:mt-10 mt-4 space-y-3">
    <p class="text-md">{{ description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  images: Array,
  title: String,
  description: String,
  controls: Boolean,
})

console.log(props.images)

const constrols = props.controls

const switchControls = computed(() =>
  constrols ? 'opacity-100 visible flex' : 'opacity-0 invisible hidden',
)

const currentIndex = ref(0)

// Cambiar al siguiente slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// Cambiar al slide anterior
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

// Ir a un slide específico
const goToSlide = (index) => {
  currentIndex.value = index
}

let interval

onMounted(() => {
  interval = setInterval(nextSlide, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Optional styles for smoother transitions */
</style>
