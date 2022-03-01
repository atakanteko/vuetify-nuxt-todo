<template>
  <div>
    <EditDialog :dialog="editStatus" />
    <Dialog :dialog="deleteStatus" :task-id="taskId" @changeDialog="changeDialogStatus" />
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
          @click="handleClick(i)"
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
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditDialog from '../Dialog/EditDialog';
import Dialog from '../Dialog/Dialog';

export default {
  components: { Dialog, EditDialog },
  props: {
    taskId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      targetId: null,
      editStatus: false,
      deleteStatus: false,
      items: [
        {
          title: 'Edit',
          icon: 'mdi-pencil',
        },
        {
          title: 'Due date',
          icon: 'mdi-calendar-range',
        },
        {
          title: 'Delete',
          icon: 'mdi-delete',
          click() {
            this.deleteStatus = true;
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      deleteTodo: 'store/removeTodo',
    }),
    handleClick(index) {
      this.targetId = index;
      this.items[index].click.call(this);
    },
    changeDialogStatus(status) {
      this.deleteStatus = status;
    },
  },
};
</script>
<style scoped></style>
