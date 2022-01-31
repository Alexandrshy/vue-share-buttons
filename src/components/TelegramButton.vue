<template>
  <button
    :description="description"
    :url="url"
    class="share-button share-button--telegram"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="Telegram"
    >
      <path
        d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37"
      />
      <path
        d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214"
      />
      <path
        d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import { eventEmit, getDocumentHref, getDocumentTitle } from "../helpers";

export default {
  name: "TelegramShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    description: { type: String, default: getDocumentTitle },
    btnText: { type: String, default: "Telegram" },
    hasIcon: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Telegram" });
      const url = `https://telegram.me/share/url?url=${encodeURIComponent(
        this.$props.url
      )}&text=${encodeURIComponent(this.$props.description)}`;

      return window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(200, 74%, 53%, 1);
$focus-color: hsla(200, 68%, 78%, 0.4);
$hover-color: hsla(200, 74%, 53%, 0.9);
$painted-color: hsla(199, 51%, 43%, 1);

@import "../css/styles";
</style>
