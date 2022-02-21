<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vuetify Todo App
          </v-list-item-title>
          <v-list-item-subtitle>
            With Nuxt.js!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :src="require(`~/assets/images/universe.jpg`)"
      app
      color="primary"
      dark
      prominent
    >
      <template #img="{ props }">
        <v-img
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          v-bind="props"
        />
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>Vuetify Todo</v-app-bar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Nuxt />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '../components/Snackbar/Snackbar';

export default {
  components: {
    Snackbar,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Todo', icon: 'mdi-format-list-checks', link: '/' },
        { title: 'About', icon: 'mdi-help-box', link: '/about' },
      ],
      right: null,
    };
  },
};

</script>
