<script setup>
import { ref, computed, watch  } from 'vue'

const props = defineProps({
  productos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['eliminar-producto'])

const filtro = ref('')

var calcularValorTotal = computed(() => {
  var valorTotal = 0
  var valor = 0
  props.productos.forEach(producto => {
  valor = producto.precio * producto.stock
  valorTotal += valor})
  return valorTotal
})




const eliminar_producto = (id) => {
  emit('eliminar-producto', id)
}

const productosFiltrados = computed(() => {
  return props.productos.filter(producto =>
    producto.categoria.toLowerCase().includes(filtro.value.toLowerCase())
  )
})

watch(productosFiltrados, (nuevoValor) => {
  console.log('Productos filtrados:', nuevoValor)
})

</script>

<template>
  <section>
    <h2>Productos creados</h2>

    <span>Filtrar por categoria: </span>
    <select v-model="filtro">
        <option value=""></option>
        <option value="Tecnología">Tecnología</option>
        <option value="Ropa">Ropa</option>
        <option value="Alimentos">Alimentos</option>
        <option value="Librería">Librería</option>
    </select>

    <p v-if="productosFiltrados.length === 0">
      No hay productos cargados.
    </p>

    <table v-else>
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Categoria</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(producto, index) in productosFiltrados" :key="index">
                <th scope="row">{{ producto.id}}</th>
                <td>{{ producto.nombre }}</td>
                <td>${{ producto.precio }}</td>
                <td>{{ producto.stock }}</td>
                <td>{{ producto.categoria }}</td>
                <td @click="eliminar_producto(producto.id)"><font-awesome-icon :icon="['fas', 'trash']" /></td>
                
            </tr> 
        </tbody>
    </table>
    <div class="resumen">
      <span>Total de productos: {{ productos.length }}</span>
      <span>Productos filtrados: {{ productosFiltrados.length }}</span>
      <span>Valor del stock: ${{ calcularValorTotal }}</span>
    </div>
    

      
  </section>
</template>

<style scoped>


table {
  width: 700px;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #1f9678;
  color: white;
}

th {
  padding: 14px;
  text-align: left;
  font-size: 15px;
}

td {
  padding: 14px;
  border-bottom: 1px solid #e5e7eb;
}

tbody tr:hover {
  background-color: #f5f7ff;
  transition: 0.2s;
}

tbody tr:last-child td {
  border-bottom: none;
}

.resumen {
  margin-top: 16px;
  padding: 14px 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.resumen span {
  white-space: nowrap;
}

.resumen span:last-child {
  color: #1f9678;
  font-weight: 700;
}
</style>