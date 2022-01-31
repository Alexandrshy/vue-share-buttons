<template>
  <button
    :url="url"
    :description="description"
    :isBlank="isBlank"
    class="share-button share-button--twitter"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon iconName="Twitter" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
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
  name: "TwitterShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    description: { type: String, default: getDocumentTitle },
    btnText: { type: String, default: "Twitter" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Twitter" });
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://twitter.com/share?url=${encodeURIComponent(
        this.$props.url
      )}&text=${encodeURIComponent(this.$props.description)}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(203, 89%, 53%, 1);
$focus-color: hsla(203, 82%, 78%, 0.4);
$hover-color: hsla(203, 89%, 53%, 0.9);
$painted-color: hsla(202, 66%, 43%, 1);

@import "../css/styles";
</style>
