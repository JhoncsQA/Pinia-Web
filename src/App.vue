<template>
  <div class="container">
    <div class="content">
      <h1 class="title">CONTADOR</h1>
      <p class="equation">{{ store.count }} x {{ store.incre }} = {{ store.times2 }}</p>
      <p class="equation">SUMA TOTAL = {{ store.total }}</p>
      <button @click="store.increment()" class="increment-button">Incrementar</button>
      <button @click="store.reset" class="increment-button">Reset</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { useCounterStore } from './store/counter';  // Asegúrate de que la ruta sea correcta
const store = useCounterStore();
</script>

<style scoped>
/* Reset de estilos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos generales con estética cyberpunk */
html, body {
  font-family: 'Orbitron', sans-serif; /* Fuente futurista */
  background: radial-gradient(circle, #1b1b2f, #1f4068, #162447); /* Fondo oscuro con gradiente */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Centrado en toda la pantalla */
  width: 100vw; /* Ocupa todo el ancho de la pantalla */
  overflow: hidden;
}

.container {
  background: rgba(25, 25, 25, 0.9); /* Fondo oscuro con opacidad */
  padding: 30px;
  border: 2px solid #61f725; /* Bordes en color verde neon */
  border-radius: 15px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 20px #61f725, 0 0 40px #bed7ee; /* Efecto de brillo neon */
  text-align: center;
}

.content {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Título */
.title {
  font-size: 2.5rem;
  color: #61f725; /* Verde neon */
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 0 0 8px #61f725, 0 0 15px #00ff00; /* Brillo neon */
}

/* Ecuación */
.equation {
  font-size: 1.5rem;
  color: #bed7ee; /* Azul suave */
  margin: 15px 0;
  text-shadow: 0 0 5px #bed7ee, 0 0 10px #bed7ee; /* Brillo sutil */
}

/* Botón con efecto cyberpunk */
.increment-button {
  padding: 12px 24px;
  background: linear-gradient(45deg, #bed7ee, #61f725);
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #61f725;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 10px #61f725, 0 0 20px #bed7ee; /* Brillo cyberpunk */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.increment-button:hover {
  box-shadow: 0 0 15px #61f725, 0 0 30px #bed7ee; /* Efecto hover de brillo */
  transform: scale(1.05); /* Efecto de escala al pasar el mouse */
}

.increment-button:active {
  transform: scale(1);
}

/* Responsivo para dispositivos móviles */
@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }

  .equation {
    font-size: 1.2rem;
  }

  .increment-button {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
  }
}
</style>
