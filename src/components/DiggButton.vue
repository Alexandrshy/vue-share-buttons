<template>
  <button
    class="share-button share-button--digg"
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
    <icon iconName="Digg" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M17.76 8.16v8.16h3.84v.96h-3.84v1.92H24V8.16h-6.24zm-7.2 0v8.16h3.84v.96h-3.84v1.92h6.24V8.16h-6.24zM3.84 4.8v3.36H0v8.16h6.24V4.8h-2.4zM9.6 8.16H7.2v8.16h2.4V8.16zm12 6.24h-1.44v-4.32h1.44v4.32zm-17.76 0H2.4v-4.32h1.44v4.32zm10.56 0h-1.44v-4.32h1.44v4.32zM9.6 4.8H7.2v2.4h2.4V4.8z"
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
  name: "DiggShareButton",
  components: { Icon },
  props: {
    className: { type: String },
    shareUrl: { type: String, default: getDocumentHref },
    shareTitle: { type: String, default: "" },
    shareDescription: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "Digg" },
    windowWidth: { type: Number },
    windowHeight: { type: Number },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow: function() {
      eventEmit(this, { name: "Digg" });
      const configWindow = createWindow();
      const url = `http://digg.com/submit?url=${encodeURIComponent(
        this.$props.shareUrl
      )}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    }
  }
};
</script>

<style>
@import "../style/index.css";
@import "../style/diggButton.css";
</style>
