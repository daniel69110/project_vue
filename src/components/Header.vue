<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/taches">Tâches</router-link></li>
        <li><router-link to="/utilisateur">Utilisateur</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
header {
  background-color: #333;
  padding: 10px;
  color: white;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

nav ul li {
  font-size: 25px;
  font-weight: bolder;
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
}

nav ul li a:hover {
  background-color: #555;
}
</style>
