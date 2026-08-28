<script setup lang="ts"></script>

<template>
  <v-app>
    <slot name="topbar" />

    <v-main>
      <slot name="content" />
    </v-main>
  </v-app>
</template>

<style></style>
