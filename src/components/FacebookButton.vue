<template>
  <button
    :isBlank="isBlank"
    :url="url"
    class="share-button share-button--facebook"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="Facebook"
    >
      <path
        d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
      />
    </icon>
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
    <span v-if="hasCounter && counter > 0" class="share-button__counter">{{
      shortCounter
    }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import {
  createWindow,
  eventEmit,
  getDocumentHref,
  getRandomNumber,
  getShortNumber,
} from "../helpers";

export default {
  name: "FacebookShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Facebook" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    hasCounter: { type: Boolean, default: false },
    digitsCounter: { type: Number, default: 0 },
    keyCounter: { type: String, default: "" },
    isBlank: { type: Boolean, default: true },
    customIcon: { type: String, default: "" },
  },
  mounted() {
    if (this.$props.hasCounter) this.getShareCounter();
  },
  methods: {
    openShareWindow() {
      if (this.$props.hasCounter) {
        eventEmit(this, "onShareCounter", {
          name: "Facebook",
          counter: this.counter,
        });
      } else {
        eventEmit(this, "onShare", { name: "Facebook" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.$props.url
      )}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      const callback =
        this.$props.keyCounter || `Facebook_${getRandomNumber()}`;
      const script = document.createElement("script");
      script.src = `https://graph.facebook.com?id=${encodeURIComponent(
        this.$props.url
      )}&callback=${callback}`;
      document.body.appendChild(script);

      window[callback] = (count) => {
        if (!count) return;
        this.counter = count.share.share_count;
        this.shortCounter = getShortNumber(
          this.counter,
          this.$props.digitsCounter
        );
      };
    },
  },
  data() {
    return {
      counter: 0,
      shortCounter: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(221, 44%, 41%, 1);
$focus-color: hsla(221, 38%, 66%, 0.4);
$hover-color: hsla(221, 44%, 41%, 0.9);
$painted-color: hsla(220, 21%, 31%, 1);

@import "../css/styles";
</style>
