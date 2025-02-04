<template>
    <div class="timer">
      <p v-if="!running">Tiempo: {{ formatTime(remaining) }}</p>
      <p v-else>Tiempo restante: {{ formatTime(remaining) }}</p>
      <button @click="toggleTimer">{{ running ? 'Pausar' : 'Iniciar' }}</button>
      <button @click="resetTimer">Reiniciar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'JudoTimer',
    props: {
      duration: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        remaining: this.duration,
        timer: null,
        running: false
      }
    },
    methods: {
      formatTime(seconds) {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`
      },
      startTimer() {
        if (this.timer) return
        this.running = true
        this.timer = setInterval(() => {
          if (this.remaining > 0) {
            this.remaining--
          } else {
            this.pauseTimer()
          }
        }, 1000)
      },
      pauseTimer() {
        this.running = false
        clearInterval(this.timer)
        this.timer = null
      },
      toggleTimer() {
        if (this.running) {
          this.pauseTimer()
        } else {
          this.startTimer()
        }
      },
      resetTimer() {
        this.pauseTimer()
        this.remaining = this.duration
      }
    },
    beforeUnmount() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
  </script>
  
  <style scoped>
  .timer {
    margin: 1rem 0;
  }
  button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
  }
  </style>