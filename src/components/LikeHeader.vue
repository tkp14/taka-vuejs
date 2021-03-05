<template>
  <div>
    <slot :user="user" text="text"></slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Toyama",
        lastName: "Taka"
      }
    };
  }
};
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
