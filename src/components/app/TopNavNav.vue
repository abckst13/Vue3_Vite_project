<script setup lang="ts">
import TopNavNav from '@/components/app/TopNavNav.vue';
import { useRouter, RouterLink } from 'vue-router';
import { onMounted } from 'vue';

defineProps<{
    menu: {
        icon: string;
        text: string;
        url: string;
        highlight: boolean;
        children: Object;
    };
}>();

function subIsActive(urls) {
    const currentRoute = useRouter().currentRoute.value.path;
    let match = false;

    for (let x = 0; x < urls.length; x++) {
        if (urls[x].url == currentRoute) {
            match = true;
        }
    }

    return match;
}
</script>
<template>
    <!-- menu with submenu -->
    <div v-if="menu.children" class="menu-item has-sub" v-bind:class="{ active: subIsActive(menu.children) }">
        <a class="menu-link">
            <span class="menu-icon" v-if="menu.icon">
                <i v-bind:class="menu.icon"></i>
                <span class="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px" v-if="menu.highlight"></span>
            </span>
            <span class="menu-text">{{ menu.text }}</span>
            <span class="menu-caret" v-if="menu.children"><b class="caret"></b></span>
        </a>
        <div class="menu-submenu">
            <template v-for="(submenu, index) in menu.children">
                <top-nav-nav v-bind:menu="submenu"></top-nav-nav>
            </template>
        </div>
    </div>

    <!-- menu without submenu -->
    <router-link v-else v-bind:to="menu.url" custom v-slot="{ navigate, href, isActive }">
        <div class="menu-item" v-bind:class="{ active: isActive }">
            <a v-bind:href="href" @click="navigate" class="menu-link">
                <span class="menu-icon" v-if="menu.icon">
                    <i v-bind:class="menu.icon"></i>
                    <span class="menu-icon-label" v-if="menu.label">{{ menu.label }}</span>
                </span>
                <span class="menu-text">{{ menu.text }}</span>
            </a>
        </div>
    </router-link>
</template>
