<script setup>
defineProps({
  criptoInto: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="contenedor-resultado">
    <h2>Cotizacion</h2>
    <div class="resultado">
      <img class="imagen-cripto" :src="'https://cryptocompare.com/' + criptoInto.IMAGEURL" alt="">
      <div>
        <p>El precio es de <span>{{ criptoInto.PRICE }}</span></p>
        <p>El precio mas alto del dia <span>{{ criptoInto.HIGHDAY }}</span></p>
        <p>El precio mas bajo del dia <span>{{ criptoInto.LOWDAY }}</span></p>
        <p>Variacion las ultima 24 horas <span>{{ criptoInto.CHANGEPCT24HOUR }}%</span></p>
        <p>Ultima actualizacion <span>{{ criptoInto.LASTUPDATE }}</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>