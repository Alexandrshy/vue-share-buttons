<template>
  <button
    class="share-button share-button--viber"
    type="button"
    :url="url"
    :btnText="btnText"
    :hasIcon="hasIcon"
    @click="openShareWindow"
  >
    <icon iconName="Viber" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M252.47-252.87c-16.57-15.24-83.48-63.82-232.54-64.48 0 0-175.79-10.6-261.47 68.01-47.7 47.7-64.49 117.49-66.25 204.05-1.77 86.57-4.07 248.75 152.29 292.74l.15.04-.1 67.1s-.98 27.18 16.89 32.72c21.64 6.72 34.34-13.94 55-36.19 11.35-12.22 27-30.17 38.8-43.89 106.94 8.96 189.18-11.57 198.51-14.6 21.6-7.03 143.77-22.67 163.64-184.85 20.5-167.21-9.94-272.95-64.92-320.65M270.58 55.7c-16.8 135.42-115.85 143.97-134.12 149.83-7.77 2.5-80.02 20.47-170.84 14.54 0 0-67.68 81.64-88.8 102.88-3.31 3.32-7.19 4.66-9.78 4.03-3.64-.9-4.65-5.2-4.6-11.5.06-9 .57-111.52.57-111.52-.1-.03-.07-.02-.02 0-132.23-36.75-124.52-174.8-123.03-247.09 1.5-72.28 15.08-131.51 55.43-171.34 72.48-65.65 221.79-55.84 221.79-55.84 126.08.55 186.51 38.52 200.52 51.24 46.51 39.83 70.22 135.14 52.88 274.76"
      />
      <path
        d="M20.81 2.34c-.6-.55-3-2.3-8.37-2.32 0 0-6.33-.38-9.42 2.45C1.3 4.18.7 6.7.63 9.82.57 12.93.5 18.77 6.13 20.36v2.42s-.04.97.6 1.17c.79.25 1.24-.5 1.99-1.3l1.4-1.58c3.85.32 6.8-.42 7.14-.53.78-.25 5.18-.81 5.9-6.65.74-6.03-.36-9.83-2.34-11.55m.65 11.11c-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.15.52 0 0-2.44 2.94-3.2 3.7-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.02c-4.77-1.32-4.49-6.3-4.44-8.9.06-2.6.55-4.73 2-6.17 2.61-2.36 7.99-2 7.99-2 4.54.01 6.71 1.38 7.22 1.84 1.67 1.43 2.53 4.86 1.9 9.9"
      />
      <path
        d="M14.65 9.98a.3.3 0 0 1-.3-.29c-.06-1.03-.54-1.53-1.53-1.58a.3.3 0 0 1 .03-.61c1.3.07 2.03.82 2.1 2.16a.3.3 0 0 1-.29.32h-.01"
      />
      <path
        d="M16.2 10.5a.3.3 0 0 1-.3-.3 3.5 3.5 0 0 0-.9-2.57 3.78 3.78 0 0 0-2.65-1.15.3.3 0 1 1 .04-.6c1.3.09 2.32.54 3.05 1.34s1.1 1.8 1.07 2.99a.3.3 0 0 1-.3.3"
      />
      <path
        d="M17.8 11.13a.3.3 0 0 1-.3-.3c-.02-1.86-.55-3.28-1.64-4.34a5.63 5.63 0 0 0-4.03-1.59.3.3 0 0 1-.3-.3c0-.17.14-.3.3-.3 1.77 0 3.27.6 4.46 1.76a6.45 6.45 0 0 1 1.81 4.76.3.3 0 0 1-.3.3zM12.9 13.74s.42.04.65-.24l.45-.57c.21-.28.73-.45 1.24-.17a13.63 13.63 0 0 1 2.15 1.54c.33.28.41.69.18 1.12v.01c-.23.41-.54.8-.93 1.15a1.84 1.84 0 0 1-1.1.47c-.13 0-.26-.02-.4-.06v-.01c-.48-.14-1.28-.48-2.6-1.2a15.6 15.6 0 0 1-3.18-2.33l-.03-.03-.03-.03-.04-.03-.03-.04a15.38 15.38 0 0 1-2.32-3.17 13.72 13.72 0 0 1-1.2-2.6l-.02-.01A1.24 1.24 0 0 1 5.64 7c.04-.31.19-.63.46-.95.36-.4.74-.7 1.15-.94h.01c.43-.23.84-.15 1.12.18a13.52 13.52 0 0 1 1.54 2.15c.29.51.1 1.03-.17 1.25l-.56.45c-.29.22-.25.65-.25.65s.83 3.16 3.95 3.96"
      />
    </icon>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
  </button>
</template>
 
<script>
import Icon from "./icon/Icon.vue";
import { getDocumentHref, eventEmit } from "../helpers";

export default {
  name: "ViberShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Viber" },
    hasIcon: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Viber" });
      const url = `viber://forward?text=${encodeURIComponent(this.$props.url)}`;

      return window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: hsla(248, 33%, 52%, 1);
$focus-color: hsla(248, 27%, 77%, 0.4);
$hover-color: hsla(248, 33%, 52%, 0.9);
$painted-color: hsla(247, 10%, 42%, 1);

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
