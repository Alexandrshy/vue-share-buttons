<template>
  <button
    class="share-button share-button--xing"
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
    <icon iconName="Xing" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223c-.287.145-.57.145-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574c.283-.14.568-.14.852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227c.284-.144.57-.144.852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57c.283-.144.568-.144.852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223c-.287.143-.57.143-.854 0L.213 5.76z"
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
  name: "XingShareButton",
  components: { Icon },
  props: {
    className: { type: String },
    shareUrl: { type: String, default: getDocumentHref },
    shareTitle: { type: String, default: "" },
    shareDescription: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "Xing" },
    windowWidth: { type: Number },
    windowHeight: { type: Number },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow: function() {
      eventEmit(this, { name: "Xing" });
      const configWindow = createWindow();
      const url = `https://www.xing.com/social_plugins/share?url=${encodeURIComponent(
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
@import "../style/xingButton.css";
</style>
