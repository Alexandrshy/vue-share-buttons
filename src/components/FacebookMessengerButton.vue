<template>
  <button
    :url="url"
    class="share-button share-button--facebookMessenger"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="FacebookMessenger"
      view-box-height="512"
      view-box-width="512"
    >
      <path
        d="M256,0C114.624,0,0,106.112,0,237.024c0,74.592,37.216,141.12,95.392,184.576V512l87.168-47.84 c23.264,6.432,47.904,9.92,73.44,9.92c141.376,0,256-106.112,256-237.024C512,106.112,397.376,0,256,0z"
        style="fill: #1e88e5"
      />
      <polygon
        points="281.44,319.2 216.256,249.664 89.056,319.2 228.96,170.656 295.744,240.192 421.376,170.656"
        style="fill: #fafafa"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import { eventEmit, getDocumentHref } from "../helpers";

export default {
  name: "FacebookMessengerShareButton",
  components: { Icon },
  props: {
    appID: { type: String },
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Messenger" },
    hasIcon: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "FacebookMessenger" });
      const url = `fb-messenger://share/?link=${encodeURIComponent(
        this.$props.url
      )}&app_id=${this.$props.appID}`;

      return window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsl(208, 82%, 48%);
$focus-color: hsla(208, 82%, 48%, 0.4);
$hover-color: hsla(208, 82%, 48%, 0.7);
$painted-color: hsla(208, 82%, 48%, 1);

@import "../css/styles";
</style>
