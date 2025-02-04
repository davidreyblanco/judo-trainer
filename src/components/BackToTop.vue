<template>
    <div class="back-to-top" @click="scrollToTop">
      Back to Top
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackToTop',
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
  }
  </style>