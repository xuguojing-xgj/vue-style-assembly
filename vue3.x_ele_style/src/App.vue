<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { writeNewStyle, getStyleTemplate, generateColors } from '../src/utils'
import { computed, onMounted, reactive, ref } from 'vue'
import { useFiles } from './hooks/useFiles'
const { getFontFiles, getIndexStyle, getSeparatedStyles } = useFiles()

// const visible = ref(false)

const originalStyle = ref('')
const colors = reactive({
  primary: '#409eff',
})
getIndexStyle().then((data) => {
  originalStyle.value = getStyleTemplate(data)
})
// const dom =  
onMounted(() => {
  console.log(document.styleSheets.length);
  
})
const originalStylesheetCount = computed(() => {
  return document.styleSheets.length || -1
})
const submitForm = (primary) => {
  // visible.value = false
  colors.primary = primary
  Object.assign(colors, generateColors(primary))
  // canDownload.value = true
  writeNewStyle(originalStylesheetCount.value, originalStyle.value, colors)
}
</script>

<template>
  <div class="body">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <el-button type="primary">anniu </el-button>
 
    <theme-pick :lang="lang" @submit="submitForm"></theme-pick>
</template>

<style scoped>
body {
  width: 200px;
  height: 200px;

  background-color: #000;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
