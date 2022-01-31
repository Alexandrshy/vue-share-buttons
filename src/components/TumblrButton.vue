<template>
  <button
    :description="description"
    :isBlank="isBlank"
    :url="url"
    class="share-button share-button--tumblr"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon iconName="Tumblr" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
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
  name: "TumblrShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    title: { type: String, default: "" },
    description: { type: String, default: getDocumentTitle },
    btnText: { type: String, default: "Tumblr" },
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
          name: "Tumblr",
          counter: this.counter,
        });
      } else {
        eventEmit(this, "onShare", { name: "Tumblr" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(
        this.$props.url
      )}&title=${encodeURIComponent(
        this.$props.title
      )}&caption=${encodeURIComponent(this.$props.description)}&posttype=link`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      const callback = this.$props.keyCounter || `Tumblr_${getRandomNumber()}`;
      const script = document.createElement("script");
      script.src = `https://api.tumblr.com/v2/share/stats?url=${encodeURIComponent(
        this.$props.url
      )}&callback=${callback}`;
      document.body.appendChild(script);

      window[callback] = (count) => {
        if (!count) return;
        this.counter = count.response.note_count;
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
$main-color: hsla(215, 27%, 29%, 1);
$focus-color: hsla(215, 21%, 54%, 0.4);
$hover-color: hsla(215, 27%, 29%, 0.9);
$painted-color: hsla(214, 4%, 19%, 1);

@import "../css/styles";
</style>
