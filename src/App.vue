<template>
  <div class="share-buttons">
    <twitter-button></twitter-button>
    <twitter-button v-bind:isBlank="false" shareText="Twiiter share good work" btnText></twitter-button>
    <twitter-button v-bind:hasIcon="false"></twitter-button>
    <twitter-button class="share-button--circle"></twitter-button>
    <twitter-button class="share-button--circle" btnText></twitter-button>
    <twitter-button class="share-button--circle" v-bind:hasIcon="false"></twitter-button>
    <twitter-button class="share-button--circle share-button--outline"></twitter-button>
    <twitter-button class="share-button--circle share-button--outline" btnText></twitter-button>
    <twitter-button class="share-button--circle share-button--outline" v-bind:hasIcon="false"></twitter-button>
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
}
</style>
