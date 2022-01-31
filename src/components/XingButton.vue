<template>
  <button
    :url="url"
    :isBlank="isBlank"
    class="share-button share-button--xing"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon iconName="Xing" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223c-.287.145-.57.145-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574c.283-.14.568-.14.852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227c.284-.144.57-.144.852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57c.283-.144.568-.144.852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223c-.287.143-.57.143-.854 0L.213 5.76z"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import { createWindow, eventEmit, getDocumentHref } from "../helpers";

export default {
  name: "XingShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Xing" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Xing" });
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.xing.com/social_plugins/share?url=${encodeURIComponent(
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
$main-color: hsla(181, 100%, 20%, 1);
$focus-color: hsla(181, 94%, 45%, 0.4);
$hover-color: hsla(181, 100%, 20%, 0.9);
$painted-color: hsla(180, 77%, 10%, 1);

@import "../css/styles";
</style>
