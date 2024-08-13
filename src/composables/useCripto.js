import { computed, onMounted, ref } from "vue"

export default function useCripto () {
  
  const isLoading = ref(false)
  const criptoInto = ref({})
  const criptoMonedas = ref([])
  const monedas = ref([
    { codigo: 'USD', texto: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', texto: 'Peso Mexicano' },
    { codigo: 'EUR', texto: 'Euro' },
    { codigo: 'GBP', texto: 'Libra Esterlina' },
    { codigo: 'COP', texto: 'Peso Colombiano' },
  ])

  onMounted(()=> {
    const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        criptoMonedas.value = data.Data
      })
  })



  const obtenerCotizacion = async (cotizar) => {
    criptoInto.value = {}
    isLoading.value = true
    try {
      const {moneda, cripto} = cotizar
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
    
      const respuesta = await fetch(url)
      const data = await respuesta.json()
      
      criptoInto.value = data.DISPLAY[cripto][moneda]
      
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false
    }
  
    // fetch(url)
    //   .then(respuesta => respuesta.json())
    //   .then(data => {
    //     console.log(data);
    //     // criptoInto.value = data.Data
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   }) 
    
  }
  
  const isCriptoInfo = computed(() => {
    return Object.keys(criptoInto.value).length > 0 ? true : false 
  })

  return {
    monedas,
    criptoMonedas,
    criptoInto,
    obtenerCotizacion,
    isLoading,
    isCriptoInfo
  }


}