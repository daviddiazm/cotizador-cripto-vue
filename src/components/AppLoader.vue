<script setup >
  
</script>

<template>
  <div class="loader contenedor-resultado"></div>
</template>

<style scoped>
  /* HTML: <div class="loader"></div> */
.loader {
  /* width: 30%; */
  margin: 10rem auto;
  height: 15px;
  width: 150px;
  --c:no-repeat repeating-linear-gradient(#0000 0 6px,#000 0 9px,#0000 0 15px);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 26% 200%;
  animation: l4 1.5s infinite linear;
}
@keyframes l4 {
  0%,
  70%,
  100%  {background-position: calc(0*100%/3) 100%,calc(1*100%/3) 100%,calc(2*100%/3) 100%,calc(3*100%/3) 100%}
  17.5% {background-position: calc(0*100%/3) 0   ,calc(1*100%/3) 100%,calc(2*100%/3) 100%,calc(3*100%/3) 100%}
  35%   {background-position: calc(0*100%/3) 0   ,calc(1*100%/3) 0   ,calc(2*100%/3) 100%,calc(3*100%/3) 100%}
  52.5% {background-position: calc(0*100%/3) 0   ,calc(1*100%/3) 0   ,calc(2*100%/3) 0   ,calc(3*100%/3) 100%}
  69.99%{background-position: calc(0*100%/3) 0   ,calc(1*100%/3) 0   ,calc(2*100%/3) 0   ,calc(3*100%/3) 0   }
}

</style>