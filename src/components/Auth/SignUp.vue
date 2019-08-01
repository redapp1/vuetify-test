<template>
    <v-layout column align-center>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
  
        <v-select
          v-model="select"
          :items="countries"
          :rules="[v => !!v || 'Country is required']"
          label="Country"
          item-text="name"
          required
        ></v-select>

        <v-textarea
            auto-grow
            v-model="description"
            label="Description"
            :rules="[v => !!v || 'You must describe yourslef']"
        ></v-textarea>
  
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="CGI"
          required
        ></v-checkbox>
  
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="submit"
        >
          Signup
        </v-btn>
  
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset
        </v-btn>
      </v-form>
    </v-layout>
</template>

<script>
export default {
    data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    checkbox: false,
    description: ''
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  },
    computed: {
        countries() {
            return this.$store.getters.getCountries;
        }
    }
}
</script>

