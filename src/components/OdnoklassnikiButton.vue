<template>
  <button
    class="share-button share-button--odnoklassniki"
    type="button"
    :url="url"
    :description="description"
    :btnText="btnText"
    :modalWidth="modalWidth"
    :modalHeight="modalHeight"
    :hasIcon="hasIcon"
    :hasCounter="hasCounter"
    :digitsCounter="digitsCounter"
    :isBlank="isBlank"
    @click="openShareWindow"
  >
    <icon iconName="Odnoklassniki" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M14.505 17.44c1.275-.29 2.493-.794 3.6-1.49.834-.558 1.058-1.686.5-2.52-.536-.802-1.604-1.044-2.435-.553-2.55 1.595-5.79 1.595-8.34 0-.847-.534-1.965-.28-2.5.565 0 .002 0 .004-.002.005-.534.847-.28 1.966.567 2.5l.002.002c1.105.695 2.322 1.2 3.596 1.488l-3.465 3.465c-.707.695-.72 1.83-.028 2.537l.03.03c.344.354.81.53 1.274.53.465 0 .93-.176 1.275-.53L12 20.065l3.404 3.406c.72.695 1.87.676 2.566-.045.678-.703.678-1.818 0-2.52l-3.465-3.466zM12 12.388c3.42-.004 6.19-2.774 6.195-6.193C18.195 2.78 15.415 0 12 0S5.805 2.78 5.805 6.197c.005 3.42 2.776 6.19 6.195 6.192zm0-8.757c1.416.002 2.563 1.15 2.564 2.565 0 1.416-1.148 2.563-2.564 2.565-1.415-.002-2.562-1.148-2.565-2.564C9.437 4.78 10.585 3.633 12 3.63z"
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
  getShortNumber
} from "../helpers";

export default {
  name: "OdnoklassnikiShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    description: { type: String, default: getDocumentTitle },
    btnText: { type: String, default: "Odnoklassniki" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    hasCounter: { type: Boolean, default: false },
    digitsCounter: { type: Number, default: 0 },
    isBlank: { type: Boolean, default: true }
  },
  mounted() {
    if (this.$props.hasCounter) this.getShareCounter();
  },
  methods: {
    openShareWindow() {
      if (this.$props.hasCounter) {
        eventEmit(this, "onShareCounter", {
          name: "Odnoklassniki",
          counter: this.counter
        });
      } else {
        eventEmit(this, "onShare", { name: "Odnoklassniki" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=${encodeURIComponent(
        this.$props.url
      )}&st.comments=${encodeURIComponent(this.$props.description)}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      if (window.ODKL && typeof window.ODKL.updateCount === "function") {
        return;
      }

      const script = document.createElement("script");
      script.src = `https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=${encodeURIComponent(
        this.$props.url
      )}`;
      document.body.appendChild(script);

      window.ODKL = Object.assign({}, { Share: {} }, window.ODKL);
      window.ODKL.updateCount = (index, count) => {
        if (!count) return;
        this.counter = count;
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
@import "../style/odnoklassnikiButton.css";
</style>
