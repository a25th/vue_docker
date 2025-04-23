<template>
  <div class="app">
    <h1>Мои задачи</h1>
    <div v-if="loading">Загрузка...</div>
    <div v-else>
      <TaskList 
        title="Предстоящие задачи" 
        :tasks="pendingTasks" 
        @toggle="toggleTask"
      />
      <TaskList 
        title="Выполненные задачи" 
        :tasks="completedTasks" 
        @toggle="toggleTask"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TaskList from './components/TaskList.vue'
import { useTasks } from './store'

//const { tasks, loadTasks, toggleTask, completedTasks, pendingTasks } = useTasks()
const { loadTasks, toggleTask, completedTasks, pendingTasks } = useTasks()
const loading = ref(true)

onMounted(async () => {
  await loadTasks()
  loading.value = false
})
</script>

<style>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
}

h2 {
  color: #34495e;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}
</style>