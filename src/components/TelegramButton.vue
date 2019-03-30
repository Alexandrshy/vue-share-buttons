<template>
  <button
    class="share-button share-button--telegram"
    type="button"
    :class="className"
    :shareUrl="shareUrl"
    :shareTitle="shareTitle"
    :shareDescription="shareDescription"
    :sharePic="sharePic"
    :btnText="btnText"
    :windowWidth="windowWidth"
    :windowHeight="windowHeight"
    :hasIcon="hasIcon"
    :isBlank="isBlank"
    @click="openShareWindow"
  >
    <icon iconName="Telegram" class="share-button__icon" v-if="hasIcon === true">
      <path d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37"/>
      <path d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214"/>
      <path
        d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232"
      />
    </icon>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
  </button>
</template>
 
<script>
import Icon from "./icon/Icon.vue";
import {
  getDocumentHref,
  getDocumentTitle,
  eventEmit,
  createWindow
} from "../helpers";

export default {
  name: "TelegramShareButton",
  components: { Icon },
  props: {
    className: { type: String },
    shareUrl: { type: String, default: getDocumentHref },
    shareTitle: { type: String, default: "" },
    shareDescription: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "Telegram" },
    windowWidth: { type: Number },
    windowHeight: { type: Number },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Telegram" });
      const configWindow = createWindow();
      const url = `https://telegram.me/share/url?url=${encodeURIComponent(
        this.$props.shareUrl
      )}&text=${encodeURIComponent(this.$props.shareDescription)}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    }
  }
};
</script>

<style>
@import "../style/index.css";
@import "../style/telegramButton.css";
</style>
