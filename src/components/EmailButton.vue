<template>
  <button
    class="share-button share-button--email"
    type="button"
    :url="url"
    :btnText="btnText"
    :hasIcon="hasIcon"
    @click="openShareWindow"
  >
    <icon
      iconName="Email"
      class="share-button__icon"
      viewBoxWidth="620"
      viewBoxHeight="620"
      v-if="hasIcon === true"
    >
      <path
        d="M612,156.232c0-13.065-5.16-24.885-13.393-33.897c-0.137-0.179-0.168-0.39-0.316-0.57 c-0.137-0.158-0.327-0.222-0.475-0.369c-9.361-9.794-22.553-15.988-37.243-15.988H51.437c-14.69,0-27.882,6.194-37.264,15.988 c-0.137,0.147-0.338,0.211-0.475,0.38c-0.148,0.169-0.179,0.39-0.316,0.57C5.161,131.358,0,143.167,0,156.232v299.546 c0,13.382,5.372,25.486,13.962,34.573c0.169,0.189,0.222,0.422,0.412,0.602c0.063,0.063,0.137,0.073,0.201,0.137 c9.361,9.541,22.394,15.514,36.863,15.514h509.136c14.469,0,27.513-5.983,36.863-15.523c0.063-0.054,0.137-0.074,0.2-0.127 c0.18-0.169,0.232-0.401,0.401-0.581c8.601-9.086,13.973-21.201,13.973-34.594V156.232H612z M411.687,290.175l176.368-146.238 c1.73,3.757,2.754,7.904,2.754,12.294v299.546c0,3.969-0.823,7.736-2.248,11.208L411.687,290.175z M560.573,126.355 c4.443,0,8.633,1.013,12.442,2.723l-267.01,221.378L38.995,129.078c3.81-1.709,8-2.723,12.442-2.723H560.573z M23.45,466.976 c-1.425-3.461-2.248-7.239-2.248-11.208V156.232c0-4.39,1.024-8.538,2.754-12.294l176.368,146.238L23.45,466.976z M51.437,485.645c-4.896,0-9.456-1.267-13.55-3.313l178.731-178.658l82.58,68.471c1.963,1.636,4.39,2.459,6.807,2.459 c2.417,0,4.844-0.823,6.807-2.459l82.58-68.471l178.731,178.658c-4.095,2.047-8.653,3.313-13.551,3.313H51.437z"
      />
    </icon>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
  </button>
</template>
 
<script>
import Icon from "./icon/Icon.vue";
import { getDocumentHref, eventEmit } from "../helpers";

export default {
  name: "EmailShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Email" },
    hasIcon: { type: Boolean, default: true },
    subject: { type: String, default: 'Share Link' },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Email" });
      const url = `mailto:?subject=${encodeURIComponent(this.$props.subject)}&body=${encodeURIComponent(
        this.$props.url
      )}`;

      return window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: hsla(194, 77%, 56%, 1);
$focus-color: hsla(194, 77%, 81%, 0.4);
$hover-color: hsla(194, 77%, 56%, 0.9);
$painted-color: hsla(193, 54%, 46%, 1);

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
