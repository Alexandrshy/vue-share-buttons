<template>
  <button
    :url="url"
    :isBlank="isBlank"
    class="share-button share-button--renren"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon iconName="Renren" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M5.661 9.601V5.303a6.793 6.793 0 0 0-4.053 11.084c2.378-1.152 4.041-3.755 4.053-6.786zM6.793 13.715c-.423 1.752-1.687 3.249-3.262 4.244a6.759 6.759 0 0 0 3.261.833 6.771 6.771 0 0 0 3.262-.833c-1.575-.995-2.838-2.493-3.261-4.244zM11.977 7.613a6.789 6.789 0 0 0-4.052-2.31v4.265c0 3.044 1.666 5.662 4.051 6.817a6.766 6.766 0 0 1-1.607-4.386 6.754 6.754 0 0 1 1.608-4.386z"
      />
      <path
        d="M11.977 7.613c1.003 1.183 1.655 2.714 1.655 4.387s-.652 3.202-1.655 4.387l-.001-.001.001.001c2.378-1.151 4.087-3.755 4.099-6.786V5.303a6.9 6.9 0 0 0-4.099 2.31zM18.34 9.568c0 3.045 1.666 5.662 4.052 6.818A6.792 6.792 0 0 0 18.34 5.304v4.264zM17.208 13.715c-.423 1.752-1.687 3.249-3.262 4.244a6.759 6.759 0 0 0 3.261.833 6.771 6.771 0 0 0 3.262-.833c-1.574-.995-2.838-2.493-3.261-4.244z"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import { createWindow, eventEmit, getDocumentHref } from "../helpers";

export default {
  name: "RenrenShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    title: { type: String, default: "" },
    btnText: { type: String, default: "Renren" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Renren" });
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `http://share.renren.com/share/buttonshare.do?link=${encodeURIComponent(
        this.$props.url
      )}&title=${encodeURIComponent(this.$props.title)}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(207, 71%, 45%, 1);
$focus-color: hsla(207, 65%, 50%, 0.4);
$hover-color: hsla(207, 71%, 45%, 0.9);
$painted-color: hsla(206, 48%, 35%, 1);

@import "../css/styles";
</style>
