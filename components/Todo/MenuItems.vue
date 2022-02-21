<template>
  <v-menu
    bottom
    left
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Edit', icon: 'mdi-pencil' },
      { title: 'Due date', icon: 'mdi-calendar-range' },
      { title: 'Delete', icon: 'mdi-delete' },
    ],
  }),
};
</script>
<style scoped></style>
