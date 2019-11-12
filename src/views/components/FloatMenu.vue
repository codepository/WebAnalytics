<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        slot="activator"
        class="elevation-0"
        color="grey"
        dark
        fab
        fixed
        style="top: 96px;"
        top
        v-on="on"
      >
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <slot/>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>
