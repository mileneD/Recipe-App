import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDialogStore = defineStore('dialog', () => {
  const isEditDialogOpen = ref(false);

  const openDialog = () => {
    isEditDialogOpen.value = true;
  };

  const closeDialog = () => {
    isEditDialogOpen.value = false;
  };

  return {
    isEditDialogOpen,
    openDialog,
    closeDialog
  };
});
