<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <AppHeader />
  <AuthModal />

  <!-- Introduction -->
  <section class="mb-8 py-20 text-white text-center relative">
    <div class="absolute inset-0 w-full h-full bg-contain introduction-bg"
      style="background-image: url(assets/img/header.png)"></div>
    <div class="container mx-auto">
      <div class="text-black main-header-content">
        <h1 class="font-bold text-5xl mb-5">Welcome To Swift Tail</h1>
        <p class="w-full md:w-8/12 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus et dolor mollis, congue augue non, venenatis elit.
          Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et
          sapien. Duis sed magna pulvinar, fringilla lorem eget,
          ullamcorper urna.
        </p>
      </div>
    </div>

    <img class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
      src="assets/img/header.png" />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    </div>
  </section>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AuthModal from './components/AuthModal.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
  },
};
</script>
