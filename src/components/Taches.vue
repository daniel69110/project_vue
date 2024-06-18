<template>
  <div class="container">
    <div class="task-section">
      <h2>Tâches</h2>
      <p>
        Ici, vous pouvez créer de nouvelles tâches. Cliquez sur le bouton ci-dessous pour accéder au formulaire de création de tâches.
      </p>
      <router-link to="/taches/TacheForm" class="btn">Créer une tâche</router-link>
    </div>
    <div class="task-section">
      <h2>Liste des tâches</h2>
      <p>
        Cliquez sur le bouton ci-dessous pour voir toutes les tâches. Vous pourrez consulter la liste complète des tâches.
      </p>
      <router-link to="/taches/TacheDetail" class="btn">Afficher toutes les tâches</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Taches'
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.task-section {
  height: 350px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: -3px 4px 20px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 40px;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  font-size: 17px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  text-align: center;
  text-decoration: none;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
