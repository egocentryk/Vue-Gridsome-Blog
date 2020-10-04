<template>
  <div class="post-meta">
    Opublikowano {{ this.post.date }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min - czas czytania.</strong>
    </template>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/pl";

export default {
  props: ["post"],

  computed: {
    formattedPublishDate() {
      return moment(this.post.date).format("DD MMMM, YYYY");
    },
  },
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
