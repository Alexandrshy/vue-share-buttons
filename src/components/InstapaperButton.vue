<template>
  <button
    :description="description"
    :isBlank="isBlank"
    :url="url"
    class="share-button share-button--instapaper"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="Instapaper"
    >
      <path
        d="M14.766 20.259c0 1.819.271 2.089 2.934 2.292V24H6.301v-1.449c2.666-.203 2.934-.473 2.934-2.292V3.708c0-1.784-.27-2.089-2.934-2.292V0h11.398v1.416c-2.662.203-2.934.506-2.934 2.292v16.551z"
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
  name: "InstapaperShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    description: { type: String, default: getDocumentTitle },
    btnText: { type: String, default: "Instapaper" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Instapaper" });
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.instapaper.com/edit?url=${encodeURIComponent(
        this.$props.url
      )}&title=${encodeURIComponent(this.$props.description)}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(0, 0%, 12%, 1);
$focus-color: hsla(0, 0%, 37%, 0.4);
$hover-color: hsla(0, 0%, 12%, 0.9);
$painted-color: hsla(0, 0%, 0%, 1);

@import "../css/styles";
</style>
