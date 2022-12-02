<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- Comment 2 -->
<template>
  <AppHeader />
  <AuthModal />

  <!-- Introduction -->
  <section class="mb-8 py-32 text-white text-center relative">
    <div class="absolute inset-0 w-full h-full introduction-bg bg-auto md:bg-cover"
    style="background-image: url(assets/img/header.jpg)"></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5">Welcome To Swift Tail</h1>
        <p class="w-full md:w-8/12 mx-auto text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus et dolor mollis, congue augue non, venenatis elit.
          Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et
          sapien. Duis sed magna pulvinar, fringilla lorem eget,
          ullamcorper urna.
        </p>
      </div>
    </div>
  </section>

  <!-- Options -->
  <section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 flex flex-row md:flex-wrap space-x-7 md:space-x-32 p-7 justify-center text-xl font-semibold">
      <div><button class="bg-gradient-to-r from-green-400 to-green-200 rounded-lg border border-gray-200 h-auto md:h-16 p-2">Train Schedule</button></div>
      <div><button class="bg-gradient-to-r from-green-400 to-green-200 rounded-lg border border-gray-200 h-auto md:h-16 p-2">Train Reservation</button></div>
      <div><button class="bg-gradient-to-r from-green-400 to-green-200 rounded-lg border border-gray-200 h-auto md:h-16 p-2">Train Reservation Cancellation</button></div>
      <div><button class="bg-gradient-to-r from-green-400 to-green-200 rounded-lg border border-gray-200 h-auto md:h-16 p-2">Hotel Booking</button></div>
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
