<template>
  <div
    class="hero w-full bg-gray-300 md:hero-md"
    :style="wrapperStyle(data.style)"
  >
    <CategoryView
      v-if="category"
      :globalStyle="globalStyle"
      :data="category"
      :baseUrl="baseUrl"
    ></CategoryView>
    <EventView
      :globalStyle="globalStyle"
      v-if="$globals.event || $globals.template == 'event'"
      :data="data"
    ></EventView>
    <BlivandeView
      :globalStyle="globalStyle"
      v-else
      :data="data"
      :index="index"
    ></BlivandeView>
  </div>
</template>

<script>
import moment from "moment";
import EventView from "@/components/views/Hero_Event.vue";
import CategoryView from "@/components/views/Hero_Category.vue";
import BlivandeView from "@/components/views/Hero/Blivande.vue";

export default {
  methods: {},
  components: {
    EventView,
    CategoryView,
    BlivandeView,
  },
  filters: {
    formatDate: function (value) {
      return moment(String(value)).format("MMMM Do YYYY");
    },
  },
  props: ["category", "data", "baseUrl", "globalStyle", "index"],
};
</script>

<style scoped lang="scss">
.hero {
  @apply border-b;
  background-attachment: fixed !important;
}
</style>
