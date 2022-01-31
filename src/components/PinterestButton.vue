<template>
  <button
    :description="description"
    :isBlank="isBlank"
    :picture="picture"
    :url="url"
    class="share-button share-button--pinterest"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="Pinterest"
    >
      <path
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
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
  getDocumentTitle,
  getRandomNumber,
  getShortNumber,
} from "../helpers";

export default {
  name: "PinterestShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    description: { type: String, default: getDocumentTitle },
    picture: { type: String, default: "" },
    btnText: { type: String, default: "Pinterest" },
    modalWidth: { type: Number },
    modalHeight: { type: Number },
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
          name: "Pinterest",
          counter: this.counter,
        });
      } else {
        eventEmit(this, "onShare", { name: "Pinterest" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
        this.$props.url
      )}&description=${encodeURIComponent(
        this.$props.description
      )}&media=${encodeURIComponent(this.$props.picture)}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      const callback =
        this.$props.keyCounter || `Pinterest_${getRandomNumber()}`;
      const script = document.createElement("script");
      script.src = `https://api.pinterest.com/v1/urls/count.json?url=${encodeURIComponent(
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
$main-color: hsla(353, 92%, 39%, 1);
$focus-color: hsla(353, 86%, 64%, 0.4);
$hover-color: hsla(353, 92%, 39%, 0.9);
$painted-color: hsla(352, 69%, 29%, 1);

@import "../css/styles";
</style>
