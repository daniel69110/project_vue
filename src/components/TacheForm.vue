<template>
  <router-link to="/taches"><img src="https://icons.veryicon.com/png/o/miscellaneous/basic-monochrome-icon/return-88.png" alt="" width="60px"></router-link>
  <div>
    <h2>Ajouter une nouvelle tâche</h2>
    <form @submit.prevent="addNewTask" class="task-form">
      <label for="title">Titre :</label>
      <input type="text" id="title" v-model="newTask.title" required>

      <label for="deadline">Date limite :</label>
      <input type="datetime-local" id="deadline" v-model="newTask.deadline" required>

      <label for="description">Description :</label>
      <textarea id="description" v-model="newTask.description"></textarea>

      <label for="status">Statut :</label>
      <input type="text" id="status" v-model="newTask.status">

      <button type="submit">Ajouter Tâche</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTasksStore } from '../stores/index.js';

const tasksStore = useTasksStore();

const newTask = ref({
  title: '',
  deadline: '',
  description: '',
  status: ''
});

async function addNewTask() {
    const response = await fetch('https://todolist-api.rema-tech.fr/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json',
      },
      body: JSON.stringify({
        title: newTask.value.title,
        deadline: newTask.value.deadline,
        description: newTask.value.description,
        status: newTask.value.status
      }),
    });

    if (!response.ok) {
      throw new Error('Échec de l\'ajout de la tâche');
    }

    const data = await response.json();
    console.log(data);

    tasksStore.addTask({
      id: data.id,
      title: data.title,
      deadline: data.deadline,
      description: data.description,
      status: data.status
    });

    newTask.value.title = '';
    newTask.value.deadline = '';
    newTask.value.description = '';
    newTask.value.status = '';
}
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
