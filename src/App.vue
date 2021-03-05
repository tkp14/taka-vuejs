<template>
  <div>
    <LikeHeader>
      <p>{{ slotProps }}</p>
      <h2>こんにちは</h2>
      <template #[title]></template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="number=$event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10,
      title: 'title'
    };
  },
  components: {
    LikeHeader
  }
};
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
