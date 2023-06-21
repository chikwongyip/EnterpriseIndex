<template>
    <div class="grid-container">
      <div class="grid-item" 
        v-for="item in items" 
        :key="item"
        :style="{ width: cellWidth + 'px', height: cellHeight + 'px' }" 
        @click="handleClick(item)">
        {{ item }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MallBrand",
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    computed: {
      cellWidth() {
        const containerWidth = this.$el.clientWidth;
        // const cellCount = this.items.length;
        return Math.floor(containerWidth / 3);
      },
      cellHeight() {
        const containerHeight = this.$el.clientHeight;
        // const cellCount = this.items.length;
        return Math.floor(containerHeight / 3);
      }
    },
    methods: {
      handleClick(item) {
        console.log(`Clicked item: ${item}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
  }
  
  .grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }
  </style>
