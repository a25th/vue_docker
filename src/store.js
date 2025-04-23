import { ref, computed } from 'vue'
import axios from 'axios'

const tasks = ref([])
const STORAGE_KEY = 'vue-tasks-spa'

const savedState = localStorage.getItem(STORAGE_KEY)
if (savedState) {
  tasks.value = JSON.parse(savedState)
}

export function useTasks() {  
  const loadTasks = async () => {
    if (tasks.value.length === 0) {
      try {
        const response = await axios.get('/tasks.json')
        tasks.value = response.data
        saveState()
      } catch (error) {
        console.error('Error loading tasks:', error)
      }
    }
  }

  const toggleTask = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) {
      task.done = !task.done
      saveState()
    }
  }

  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value))
  }

  const completedTasks = computed(() => {
    return tasks.value.filter(t => t.done)
  })

  const pendingTasks = computed(() => {
    return tasks.value.filter(t => !t.done)
  })

  return {
    tasks,
    loadTasks,
    toggleTask,
    completedTasks,
    pendingTasks
  }
}