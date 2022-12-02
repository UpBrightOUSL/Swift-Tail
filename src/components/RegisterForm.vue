<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="text-white text-center font-bold p-5 mb-4" v-if="reg_show_alert" :class="reg_alert_variant">
            {{ reg_alert_msg }}
    </div>
    <!-- Registration Form -->
          <vee-form :validation-schema="schema" @submit="register" :initial-values="userData">
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <vee-field type="text" name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name" />
              <ErrorMessage class="text-red-600" name="name" />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field type="email" name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
              <ErrorMessage name="email" class="text-red-600" />
            </div>
            <!-- NIC -->
            <div class="mb-3">
              <label class="inline-block mb-2">NIC</label>
              <vee-field type="number" name="nic"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
              <ErrorMessage name="nic" class="text-red-600" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field  name="password" :bails="false" v-slot="{ field, errors}">
                <input class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password" type="password" v-bind="field">
                <div name="password" class="text-red-600" v-for="error in errors" :key="error">
                  {{ error }}
                </div>
              </vee-field>
              <ErrorMessage name="password" class="text-red-600" />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field type="password" name="confirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password" />
              <ErrorMessage name="confirm_password" class="text-red-600" />
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <vee-field name="tos" value="1" type="checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
              <label class="inline-block">Accept terms of service</label>
            </div>
            <ErrorMessage name="tos" class="text-red-600" />
            <button type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700"
                :disabled="reg_in_submission">
              Submit
            </button>
          </vee-form>
</template>

<script>

export default {
  name: 'AppRegister',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        nic: 'required|minVal:18|maxVal:100',
        password: 'required|min:8|max:30',
        confirm_password: 'confirmed:@password',
        country: 'required|country_excluded:Antarctica',
        tos: 'tos',
      },
      userData: {
        country: 'USA',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'please wait! your account is being created.',
    };
  },
  methods: {
    async register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'please wait! your account is being created.';
      // eslint-disable-next-line max-len
      try {
        // eslint-disable-next-line max-len
        await this.$store.dispatch('register', values);
      } catch (error) {
        this.reg_in_submission = false;
        this.reg_alert_variant = 'bg-reg-500';
        this.reg_alert_msg = 'An unexpected error occured';
        return;
      }
      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'Your account has been created successfully';
    },
  },
};
</script>
