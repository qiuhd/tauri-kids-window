<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
  </div>
  <router-view/>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import {useRouter, RouterLink} from 'vue-router'

const router = useRouter();

const items = ref([
  {
    label: 'Router',
    icon: 'pi pi-palette',
    items: [
      {
        label: 'Builder',
        route: '/builder'
      },
      {
        label: 'Gallery',
        route: '/gallery'
      }
    ]
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/overview');
    }
  },
  {
    label: 'External',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        url: 'https://vuejs.org/'
      },
      {
        label: 'Vite.js',
        url: 'https://vuejs.org/'
      }
    ]
  }
]);

</script>


<style scoped>
body #app header {
  margin: 0;
  padding: 0;
}
</style>
