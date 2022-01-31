<template>
  <button
    :isBlank="isBlank"
    :url="url"
    class="share-button share-button--linkedIn"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="LinkedIn"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
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
  name: "LinkedInShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "LinkedIn" },
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
          name: "LinkedIn",
          counter: this.counter,
        });
      } else {
        eventEmit(this, "onShare", { name: "LinkedIn" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        this.$props.url
      )}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      const callback =
        this.$props.keyCounter || `LinkedIn_${getRandomNumber()}`;
      const script = document.createElement("script");
      script.src = `https://www.linkedin.com/countserv/count/share?url=${encodeURIComponent(
        this.$props.url
      )}&callback=${callback}`;
      document.body.appendChild(script);

      window[callback] = (count) => {
        if (!count) return;
        this.counter = count.count;
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
$main-color: hsla(201, 100%, 35%, 1);
$focus-color: hsla(201, 94%, 60%, 0.4);
$hover-color: hsla(201, 100%, 35%, 0.9);
$painted-color: hsla(200, 77%, 25%, 1);

@import "../css/styles";
</style>
