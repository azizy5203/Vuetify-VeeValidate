/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import 'vue3-toastify/dist/index.css';
import { toast } from "vue3-toastify";

import './index.css'
// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify';

const app = createApp(App)
app.provide('toast',toast)
app.provide('vuetify',vuetify)

registerPlugins(app)

app.mount('#app')
