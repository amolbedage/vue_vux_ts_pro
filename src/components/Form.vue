<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" name="flavor" />

    <button @click="countPlus" type="submit">click</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.getnews();
  },
  methods: {
    changed: function(event) {
      this.$store.commit("change", event.target.value);
    },
    countPlus: function() {
      this.$store.commit("savecount", 1);
    },

    getnews() {
      //const name = this.$store.state.user
      //alert(name.name)
      axios
        .get("http://localhost:8082/api/users")

        .then(resp => {
          console.log(resp);
        })
        .catch(error => {
          this.$toastr.error("Something went wrong" + error);
        });
    }
  }
};
</script>
