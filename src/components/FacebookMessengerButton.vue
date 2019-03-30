<template>
  <button
    class="share-button share-button--facebookMessenger"
    type="button"
    :class="className"
    :shareUrl="shareUrl"
    :shareDescription="shareDescription"
    :shareTitle="shareTitle"
    :btnText="btnText"
    :windowWidth="windowWidth"
    :windowHeight="windowHeight"
    :hasIcon="hasIcon"
    :isBlank="isBlank"
    @click="openShareWindow"
  >
    <icon iconName="FacebookMessenger" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
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
  name: "FacebookMessengerShareButton",
  components: { Icon },
  props: {
    appID: { type: String },
    className: { type: String },
    shareUrl: { type: String, default: getDocumentHref },
    shareTitle: { type: String, default: "" },
    shareDescription: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "FacebookMessenger" },
    windowWidth: { type: Number },
    windowHeight: { type: Number },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "FacebookMessenger" });
      const configWindow = createWindow();
      const url = `fb-messenger://share/?link=${encodeURIComponent(
        this.$props.shareUrl
      )}&app_id=${this.$props.appID}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    }
  }
};
</script>

<style>
@import "../style/index.css";
@import "../style/facebookMessengerButton.css";
</style>
