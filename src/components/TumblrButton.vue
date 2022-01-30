<template>
  <button
    :btnText="btnText"
    :description="description"
    :digitsCounter="digitsCounter"
    :hasCounter="hasCounter"
    :hasIcon="hasIcon"
    :isBlank="isBlank"
    :keyCounter="keyCounter"
    :modalHeight="modalHeight"
    :modalWidth="modalWidth"
    :title="title"
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

.share-button * {
  box-sizing: border-box;
}

.share-button {
  display: inline-block;
  min-width: 42px;
  min-height: 42px;
  padding: 10px 8px;
  margin: 4px;
  color: #fff;
  background-color: $main-color;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 400;
  vertical-align: top;
  user-select: none;
  border: none;
  border-radius: 4px;
  box-shadow: none;
  text-rendering: auto;
  text-indent: 0;
  text-align: center;
  letter-spacing: normal;
  word-spacing: normal;
  text-shadow: none;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:disabled {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px $focus-color;
  }

  &:hover {
    background-color: $hover-color;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }

  &__icon {
    display: inline-block;
    padding: 0;
    margin: 0 7px;
    font-size: 0;
    vertical-align: middle;

    path {
      fill: #fff;
    }

    &:last-child {
      margin: 0;
    }
  }

  &__text {
    display: inline-block;
    margin: 0 7px;
    font-size: 16px;
    vertical-align: middle;
  }

  &__counter {
    display: inline-block;
    padding: 3px 10px;
    margin-left: 4px;
    font-size: 12px;
    border-left: 1px solid #fff;
    vertical-align: middle;
  }

  &--circle {
    min-width: 42px;
    min-height: 42px;
    padding: 10px;
    border-radius: 42px;
  }

  &--outline {
    background-color: transparent;
    border: 1px solid $main-color;

    .share-button__text {
      color: $main-color;
    }

    .share-button__icon path {
      fill: $main-color;
    }

    .share-button__counter {
      color: $hover-color;
      border-color: $hover-color;
    }

    &:hover {
      background-color: transparent;
      border-color: $hover-color;

      .share-button__text {
        color: $main-color;
      }

      .share-button__icon path {
        fill: $hover-color;
      }
    }
  }

  &--painted {
    position: relative;
    min-width: 42px;
    min-height: 42px;
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 42px;
    background-color: transparent;
    border: 3px solid $painted-color;

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: -1.5px;
      left: -1.5px;
      display: block;
      width: calc(100% + 3px);
      height: calc(100% + 3px);
      background-color: $main-color;
      border-radius: 50%;
      transform: translate3d(3px, 2px, 0);
      transition: transform 0.2s ease-in-out;
    }

    .share-button__icon {
      width: 30px;
      height: 30px;
      margin: 0;
    }

    .share-button__text {
      display: none;
    }

    .share-button__counter {
      position: absolute;
      bottom: -30px;
      right: -7px;
      margin: 0;
      padding: 4px 10px;
      font-size: 8px;
      border-radius: 15px;
      color: #fff;
      border: 3px solid $painted-color;

      &::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: -1.65px;
        left: -1.5px;
        display: block;
        width: calc(100% + 3px);
        height: calc(100% + 3px);
        border-radius: 15px;
        transform: translate3d(-3px, 1.5px, 0);
        transition: transform 0.2s ease-in-out;
        background-color: $main-color;
      }
    }

    &:hover {
      &::before {
        transform: translate3d(0, 0, 0);
      }

      .share-button__counter::before {
        transform: translate3d(0px, 0px, 0);
      }
    }

    &:focus {
      &::before {
        transform: translate3d(0, 0, 0);
      }

      .share-button__counter::before {
        transform: translate3d(0px, 0px, 0);
      }
    }
  }
}

@media (max-width: 768px) {
  .share-button {
    min-width: 38px;
    min-height: 38px;
    padding: 8px 8px;
    margin: 2px;

    &__icon {
      width: 18px;
      height: 18px;
      margin: 0 4px;
    }

    &__text {
      margin: 0 4px;
      font-size: 14px;
    }

    &--circle {
      border-radius: 38px;
    }

    &--painted {
      min-width: 48px;
      min-height: 48px;
      margin: 4px 4px 20px 4px;

      &::before {
        transform: translate3d(2.5px, 1.5px, 0);
      }

      .share-button__icon {
        width: 20px;
        height: 20px;
      }

      .share-button__counter {
        bottom: -24px;
        right: -8px;
        padding: 2px 7px;

        &::before {
          transform: translate3d(-2px, 1.75px, 0);
        }
      }
    }
  }
}
</style>
