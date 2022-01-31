<template>
  <button
    :description="description"
    :isBlank="isBlank"
    :url="url"
    class="share-button share-button--blogger"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon iconName="Blogger" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import {
  createWindow,
  eventEmit,
  getDocumentHref,
  getDocumentTitle,
} from "../helpers";

export default {
  name: "BloggerShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    title: { type: String, default: "" },
    description: { type: String, default: getDocumentTitle },
    btnText: { type: String, default: "Blogger" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Blogger" });
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.blogger.com/blog-this.g?u=${
        this.$props.url
      }&n=${encodeURIComponent(this.$props.title)}&t=${encodeURIComponent(
        this.$props.description
      )}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(14, 100%, 57%, 1);
$focus-color: hsla(14, 94%, 82%, 0.4);
$hover-color: hsla(14, 100%, 57%, 0.9);
$painted-color: hsla(14, 77%, 47%, 1);

@import "../css/styles";
</style>
