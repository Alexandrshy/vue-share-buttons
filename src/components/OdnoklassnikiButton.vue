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

<style lang="scss" scoped>
$main-color: hsla(24, 91%, 53%, 1);
$focus-color: hsla(24, 85%, 78%, 0.4);
$hover-color: hsla(24, 91%, 53%, 0.9);
$painted-color: hsla(23, 68%, 43%, 1);

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
