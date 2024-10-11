<script setup lang="ts"></script>
<template>
  <div>
    <h2>Sidebar</h2>
    <ul>
      <li><RouterLink to="/">Welcome</RouterLink></li>
      <li>
        <RouterLink to="/example01View">interface & ref() & computed() &watch()</RouterLink>
      </li>
      <li>
        <RouterLink to="/example02View">reactive</RouterLink>
      </li>
      <li>
        <RouterLink to="/example03View">Reactive-up</RouterLink>
      </li>
    </ul>
  </div>
</template>
