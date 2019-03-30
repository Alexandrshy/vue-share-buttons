<template>
  <button
    class="share-button share-button--facebook"
    type="button"
    :class="className"
    :shareUrl="shareUrl"
    :shareDescription="shareDescription"
    :shareTitle="shareTitle"
    :btnText="btnText"
    :windowWidth="windowWidth"
    :windowHeight="windowHeight"
    :hasIcon="hasIcon"
    :hasCounter="hasCounter"
    :digitsCounter="digitsCounter"
    :keyCounter="keyCounter"
    :isBlank="isBlank"
    @click="openShareWindow"
  >
    <icon iconName="Facebook" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
      />
    </icon>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
    <span class="share-button__counter" v-if="hasCounter && counter > 0">{{ shortСounter }}</span>
  </button>
</template>
 
<script>
import Icon from "./icon/Icon.vue";
import {
  getDocumentHref,
  getDocumentTitle,
  eventEmit,
  createWindow,
  getRandomNumber,
  getShortNumber
} from "../helpers";

export default {
  name: "FacebookShareButton",
  components: { Icon },
  props: {
    className: { type: String },
    shareUrl: { type: String, default: getDocumentHref },
    shareTitle: { type: String, default: "" },
    shareDescription: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "Facebook" },
    windowWidth: { type: Number },
    windowHeight: { type: Number },
    hasIcon: { type: Boolean, default: true },
    hasCounter: { type: Boolean, default: false },
    digitsCounter: { type: Number, default: 0 },
    keyCounter: { type: String, default: "" },
    isBlank: { type: Boolean, default: true }
  },
  mounted() {
    if (this.$props.hasCounter) this.getShareCounter();
  },
  methods: {
    openShareWindow() {
      if (this.$props.hasCounter) {
        eventEmit(this, "onShareCounter", {
          name: "Facebook",
          counter: this.counter
        });
      } else {
        eventEmit(this, "onShare", { name: "Facebook" });
      }
      const configWindow = createWindow();
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.$props.shareUrl
      )}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      const callback =
        this.$props.keyCounter || `Facebook_${getRandomNumber()}`;
      const script = document.createElement("script");
      script.src = `https://graph.facebook.com?id=${encodeURIComponent(
        this.$props.shareUrl
      )}&callback=${callback}`;
      document.body.appendChild(script);

      window[callback] = count => {
        if (!count) return;
        this.counter = count.share.share_count;
        this.shortСounter = getShortNumber(
          this.counter,
          this.$props.digitsCounter
        );
      };
    }
  },
  data() {
    return {
      counter: 0,
      shortСounter: 0
    };
  }
};
</script>

<style>
@import "../style/index.css";
@import "../style/facebookButton.css";
</style>
