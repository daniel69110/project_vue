<template>
  
  <router-link to="/taches"><img src="https://icons.veryicon.com/png/o/miscellaneous/basic-monochrome-icon/return-88.png" alt="" width="60px"></router-link>
  <div>
    <h2>Affichage des tâches</h2>
    <div v-for="task in tasks" :key="task.id" class="task-item">
      <div>
        <span v-if="detailedTaskId !== task.id">{{ task.id }} - {{ task.title }}</span>
        <span v-else>{{ task.id }} - {{ task.title }} - {{ task.deadline }} - {{ task.description }} - {{ task.status }}</span>
      </div>
      <div class="task-actions">
        <button @click="toggleDetails(task.id)">Voir</button>
        <button @click="startEditing(task)">Modifier</button>
        <button @click="deleteTask(task.id)">Supprimer</button>
      </div>
      <form v-if="editingTask && editingTask.id === task.id" @submit.prevent="updateTask" class="task-form">
        <label for="editTitle">Modifier Titre :</label>
        <input type="text" id="editTitle" v-model="editingTask.title">

        <label for="editDeadline">Modifier Date limite :</label>
        <input type="datetime-local" id="editDeadline" v-model="editingTask.deadline">

        <label for="editDescription">Modifier Description :</label>
        <textarea id="editDescription" v-model="editingTask.description"></textarea>

        <label for="editStatus">Modifier Statut :</label>
        <input type="text" id="editStatus" v-model="editingTask.status">

        <button type="submit">Mettre à jour Tâche</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTasksStore } from '../stores/index.js';

const tasksStore = useTasksStore();
const router = useRouter();

const newTask = ref({
  title: '',
  deadline: '',
  description: '',
  status: ''
});

const editingTask = ref(null);
const detailedTaskId = ref(null);

function startEditing(task) {
  editingTask.value = { ...task };
  console.log(editingTask.value);
}

function toggleDetails(id) {
  detailedTaskId.value = detailedTaskId.value === id ? null : id;
}

 function updateTask() {
   tasksStore.updateTask(editingTask.value);
  editingTask.value = null;
}

 function deleteTask(id) {
   tasksStore.deleteTask(id);
}

onMounted(() => {
  tasksStore.fetchTasks();
});

const tasks = computed(() => tasksStore.tasks);
</script>

<style scoped>
img {
  margin-left: 70px;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

h2 {
  text-align: center;
  color: #333;
}

.task-item {
  background-color: #fff;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 600px;
}

.task-actions {
  margin-top: 10px;
}

.task-actions button {
  margin-right: 5px;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-form {
  background-color: #fff;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 600px;
}

.task-form label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

.task-form input,
.task-form textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.task-form button {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.task-form button:hover {
  background-color: #0056b3;
}
</style>
