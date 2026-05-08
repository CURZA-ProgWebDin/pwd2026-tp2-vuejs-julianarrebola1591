<script setup>
import { ref } from 'vue'
import ProductoForm from './components/ProductoForm.vue'
import ListaProductos from './components/ListaProductos.vue'

const productos = ref([{
    id: 0,
    nombre: "Milanesa",
    precio: 2,
    stock: 2,
    categoria: "Alimentos"
  },
  {
    id: 1,
    nombre: "Pizza",
    precio: 1,
    stock: 1,
    categoria: "Alimentos"
  },
  {
    id: 2,
    nombre: "Notebook Lenovo",
    precio: 3,
    stock: 3,
    categoria: "Tecnología"
  },
  {
    id: 3,
    nombre: "Auriculares Bluetooth",
    precio: 5,
    stock: 1,
    categoria: "Tecnología"
  },
])

const agregarProducto = (producto) => {
  productos.value.push(producto)
}

const eliminarProducto = (id) => {
  const index = productos.value.findIndex(
    producto => producto.id === id
  )
  if (index !== -1) {
    productos.value.splice(index, 1)
  }
  console.log(index)
}


</script>

<template>
  <main>
    <h1>Crear productos</h1>

    <ProductoForm @nuevo-producto="agregarProducto" />

    <ListaProductos :productos="productos" @eliminar-producto="eliminarProducto" />
  </main>
</template>

<style scoped>
main {
  max-width: 700px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}
</style>