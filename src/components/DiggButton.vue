<template>
  <button
    :isBlank="isBlank"
    :url="url"
    class="share-button share-button--digg"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon iconName="Digg" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M17.76 8.16v8.16h3.84v.96h-3.84v1.92H24V8.16h-6.24zm-7.2 0v8.16h3.84v.96h-3.84v1.92h6.24V8.16h-6.24zM3.84 4.8v3.36H0v8.16h6.24V4.8h-2.4zM9.6 8.16H7.2v8.16h2.4V8.16zm12 6.24h-1.44v-4.32h1.44v4.32zm-17.76 0H2.4v-4.32h1.44v4.32zm10.56 0h-1.44v-4.32h1.44v4.32zM9.6 4.8H7.2v2.4h2.4V4.8z"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import { createWindow, eventEmit, getDocumentHref } from "../helpers";

export default {
  name: "DiggShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Digg" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Digg" });
      const configWindow = createWindow();
      const url = `http://digg.com/submit?url=${encodeURIComponent(
        this.$props.url
      )}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(0, 0%, 0%, 1);
$focus-color: hsla(0, 0%, 25%, 0.4);
$hover-color: hsla(0, 0%, 0%, 0.9);
$painted-color: hsla(0, 0%, 0%, 1);

@import "../css/styles";
</style>
