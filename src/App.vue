<template>
  <div class="share-buttons">
    <twitter-button class="button-social--twitter" btnText="Twitter" pageUrl hasIcon></twitter-button>
  </div>
</template>

<script>
import TwitterButton from "./components/TwitterButton";

export default {
  name: "app-share-buttons",
  components: {
    TwitterButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
