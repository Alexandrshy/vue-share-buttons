<template>
  <button
    :description="description"
    :isBlank="isBlank"
    :url="url"
    :sharePic="sharePic"
    class="share-button share-button--vkontakte"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
    <icon
      iconName="Vkontakte"
      class="share-button__icon"
      v-if="hasIcon === true"
    >
      <path
        d="M11.701 18.771h1.437s.433-.047.654-.284c.21-.221.21-.63.21-.63s-.031-1.927.869-2.21c.887-.281 2.012 1.86 3.211 2.683.916.629 1.605.494 1.605.494l3.211-.044s1.682-.105.887-1.426c-.061-.105-.451-.975-2.371-2.76-2.012-1.861-1.742-1.561.676-4.787 1.469-1.965 2.07-3.166 1.875-3.676-.166-.48-1.26-.361-1.26-.361l-3.602.031s-.27-.031-.465.09c-.195.119-.314.391-.314.391s-.572 1.529-1.336 2.82c-1.623 2.729-2.268 2.879-2.523 2.699-.604-.391-.449-1.58-.449-2.432 0-2.641.404-3.75-.781-4.035-.39-.091-.681-.15-1.685-.166-1.29-.014-2.378.01-2.995.311-.405.203-.72.652-.539.675.24.03.779.146 1.064.537.375.506.359 1.636.359 1.636s.211 3.116-.494 3.503c-.495.262-1.155-.28-2.595-2.756-.735-1.26-1.291-2.67-1.291-2.67s-.105-.256-.299-.406c-.227-.165-.557-.225-.557-.225l-3.435.03s-.51.016-.689.24c-.166.195-.016.615-.016.615s2.686 6.287 5.732 9.453c2.79 2.902 5.956 2.715 5.956 2.715l-.05-.055z"
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
  name: "VkontakteShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    title: { type: String, default: "" },
    description: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "Vkontakte" },
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
          name: "Vkontakte",
          counter: this.counter,
        });
      } else {
        eventEmit(this, "onShare", { name: "Vkontakte" });
      }
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url =
        `https://vk.com/share.php?url=${encodeURIComponent(this.$props.url)}` +
        (this.$props.title || this.$props.description || this.$props.sharePic
          ? `&title=${encodeURIComponent(
              this.$props.title
            )}&comment=${encodeURIComponent(
              this.$props.description
            )}&image=${encodeURIComponent(this.$props.sharePic)}&noparse=true`
          : `&noparse=false`);

      return this.$props.isBlank
        ? window.open(url, "_blank")
        : window.open(url, "Share this", configWindow);
    },

    getShareCounter() {
      if (
        window.VK &&
        window.VK.Share &&
        typeof window.VK.Share.count === "function"
      ) {
        return;
      }

      const script = document.createElement("script");
      script.src = `https://vk.com/share.php?act=count&index=${getRandomNumber()}&url=${encodeURIComponent(
        this.$props.url
      )}`;
      document.body.appendChild(script);

      window.VK = Object.assign({}, { Share: {} }, window.VK);
      window.VK.Share.count = (index, count) => {
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
$main-color: hsla(212, 28%, 52%, 1);
$focus-color: hsla(212, 22%, 77%, 0.4);
$hover-color: hsla(212, 28%, 52%, 0.9);
$painted-color: hsla(211, 5%, 42%, 1);

@import "../css/styles";
</style>
