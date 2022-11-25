<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="text-white text-center font-bold p-5 mb-4" v-if="log_show_alert" :class="log_alert_variant">
            {{ log_alert_msg }}
    </div>
     <!-- Login Form -->
     <vee-form @submit="login" :validation-schema="login_schema">
            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="inline-block mb-2">Email</label>
              <vee-field type="email" id="email" name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
              <ErrorMessage name="email" class="text-red-600" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field type="password" name="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" />
              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <button type="submit" :disabled="log_in_submission"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </vee-form>
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      login_schema: {
        email: 'required|min:3|max:100|email',
        password: 'required|min:8|max:30',
      },
      log_in_submission: false,
      log_show_alert: false,
      log_alert_variant: 'bg-blue-500',
      log_alert_msg: 'please wait! we\'re logging you in.',
    };
  },
  methods: {
    login(val) {
      this.log_in_submission = true;
      this.log_show_alert = true;
      //   this.log_alert_variant = 'bg-blue-500';
      //   this.log_alert_msg = 'please wait! we\'re logging you in.';

      this.log_alert_variant = 'bg-green-500';
      this.log_alert_msg = 'Successfully logged in';
      console.log(val);
    },
  },
};
</script>
