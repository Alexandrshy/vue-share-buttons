<template>
  <button
    :description="description"
    :isBlank="isBlank"
    :url="url"
    :sharePic="sharePic"
    class="share-button share-button--odnoklassniki"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      v-if="hasIcon === true"
      class="share-button__icon"
      iconName="Odnoklassniki"
    >
      <path
        d="M14.505 17.44c1.275-.29 2.493-.794 3.6-1.49.834-.558 1.058-1.686.5-2.52-.536-.802-1.604-1.044-2.435-.553-2.55 1.595-5.79 1.595-8.34 0-.847-.534-1.965-.28-2.5.565 0 .002 0 .004-.002.005-.534.847-.28 1.966.567 2.5l.002.002c1.105.695 2.322 1.2 3.596 1.488l-3.465 3.465c-.707.695-.72 1.83-.028 2.537l.03.03c.344.354.81.53 1.274.53.465 0 .93-.176 1.275-.53L12 20.065l3.404 3.406c.72.695 1.87.676 2.566-.045.678-.703.678-1.818 0-2.52l-3.465-3.466zM12 12.388c3.42-.004 6.19-2.774 6.195-6.193C18.195 2.78 15.415 0 12 0S5.805 2.78 5.805 6.197c.005 3.42 2.776 6.19 6.195 6.192zm0-8.757c1.416.002 2.563 1.15 2.564 2.565 0 1.416-1.148 2.563-2.564 2.565-1.415-.002-2.562-1.148-2.565-2.564C9.437 4.78 10.585 3.633 12 3.63z"
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
  getShortNumber,
} from "../helpers";

export default {
  name: "OdnoklassnikiShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    description: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "Odnoklassniki" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    hasCounter: { type: Boolean, default: false },
    digitsCounter: { type: Number, default: 0 },
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
          name: "Odnoklassniki",
          counter: this.counter,
        });
      } else {
        eventEmit(this, "onShare", { name: "Odnoklassniki" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://connect.ok.ru/offer?url=${encodeURIComponent(
        this.$props.url
      )}&title=${encodeURIComponent(
        this.$props.description
      )}&imageUrl=${encodeURIComponent(this.$props.sharePic)}`;

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      if (window.ODKL && typeof window.ODKL.updateCount === "function") {
        return;
      }

      const script = document.createElement("script");
      script.src = `https://connect.ok.ru/dk?st.cmd=extLike&ref=${encodeURIComponent(
        this.$props.url
      )}`;
      document.body.appendChild(script);

      window.ODKL = Object.assign({}, { Share: {} }, window.ODKL);
      window.ODKL.updateCount = (index, count) => {
        if (!count) return;
        this.counter = count;
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
$main-color: hsla(24, 91%, 53%, 1);
$focus-color: hsla(24, 85%, 78%, 0.4);
$hover-color: hsla(24, 91%, 53%, 0.9);
$painted-color: hsla(23, 68%, 43%, 1);

@import "../css/styles";
</style>
