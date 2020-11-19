<template>
  <div class="about-page">
    <h2>关于我们</h2>
    <the-links></the-links>
  </div>
</template>

<script lang="ts">
import theLinks from "@/components/the-links.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    theLinks
  }
})
export default class AboutPage extends Vue {}
</script>

<style scoped lang="scss">
.about-page {
}
</style>
