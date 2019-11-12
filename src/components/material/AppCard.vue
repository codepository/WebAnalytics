<template>
  <v-container
    justify-center
    @click="click">
    <v-flex>
      <v-card
        :color="color"
        :class="`elevation-${elevation}`"
        class="pa-4"
        dark
        justify-center
      >
        <v-flex>
          <v-badge
            :color="badgeColor"
            style="display:flex;justify-content:center;">
            <template
              v-slot:badge
              v-if="badge">{{ badge }}</template>
            <v-icon
              x-large
            >
              {{ icon }}
            </v-icon>
          </v-badge>
        </v-flex>
      </v-card>
    </v-flex>
    <v-flex>
      <div class="text-xs-center">
        <h3 class="title display-1 font-weight-light">
          <small>{{ title }}</small>
        </h3>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import Card from './Card'

export default {
  inheritAttrs: false,

  props: {
    ...Card.props,
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    },
    badge: {
      type: String,
      default: undefined
    },
    badgeColor: {
      type: String,
      default: undefined
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
