<template>
    <div class="home">
      <h2>Seleccione un día de entrenamiento</h2>
      <ul>
        <li v-for="day in days" :key="day.id">
          <router-link :to="`/dia/${day.id}`">{{ day.titulo }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    data() {
      return {
        days: [
          { id: 1, titulo: 'Día 1: Fuerza máxima y explosividad' },
          { id: 2, titulo: 'Día 2: Fuerza funcional y alta intensidad' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    padding: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 1rem 0;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  </style>