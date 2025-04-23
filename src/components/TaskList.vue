<template>
    <div class="task-list">
      <h2>{{ title }}</h2>
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <input 
          type="checkbox" 
          :id="'task-' + task.id" 
          :checked="task.done" 
          @change="toggleTask(task.id)"
        />
        <label :for="'task-' + task.id" :class="{ done: task.done }">
          {{ task.title }}
        </label>
      </div>
    </div>
  </template>
  <script>
  /* eslint-disable no-undef */
  </script>
  <script setup>
  defineProps({
    tasks: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['toggle'])
  
  const toggleTask = (id) => {
    emit('toggle', id)
  }
  </script>
  
  <style scoped>
  .task-list {
    margin-bottom: 2rem;
  }
  
  .task-item {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
  }
  
  .task-item input {
    margin-right: 0.5rem;
  }
  
  .done {
    text-decoration: line-through;
    color: #777;
  }
  </style>