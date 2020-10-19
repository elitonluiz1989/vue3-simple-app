<template>
  <header class="header container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="header-logo">
          <img
            :src="logoSettings.src"
            :alt="logoSettings.src"
            class="img-fluid"
          />
        </div>
      </div>

      <div class="col"></div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    const logoSettings = {
      src: "",
      alt: "",
    };

    export { logoSettings };
  },
};
</script>

<style>
</style>