<template>
  <button
    class="share-button share-button--xing"
    type="button"
    :url="url"
    :btnText="btnText"
    :modalWidth="modalWidth"
    :modalHeight="modalHeight"
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
import { getDocumentHref, eventEmit, createWindow } from "../helpers";

export default {
  name: "XingShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Xing" },
    modalWidth: { type: Number, default: 500 },
    modalHeight: { type: Number, default: 500 },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Xing" });
      const configWindow = createWindow(
        this.$props.modalWidth,
        this.$props.modalHeight
      );
      const url = `https://www.xing.com/social_plugins/share?url=${encodeURIComponent(
        this.$props.url
      )}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: hsla(181, 100%, 20%, 1);
$focus-color: hsla(181, 94%, 45%, 0.4);
$hover-color: hsla(181, 100%, 20%, 0.9);
$painted-color: hsla(180, 77%, 10%, 1);

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
  text-indent: 0px;
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
    border: 1px solid;
    background-color: transparent;
    border-color: $main-color;

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
    border: 3px solid;
    border-color: $painted-color;

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
      border: 3px solid;
      font-size: 8px;
      border-radius: 15px;
      color: #fff;
      border-color: $painted-color;

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
