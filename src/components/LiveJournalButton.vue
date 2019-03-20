<template>
  <button
    class="share-button share-button--livejournal"
    type="button"
    :class="className"
    :shareUrl="shareUrl"
    :shareTitle="shareTitle"
    :shareText="shareText"
    :sharePic="sharePic"
    :btnText="btnText"
    :windowWidth="windowWidth"
    :windowHeight="windowHeight"
    :hasIcon="hasIcon"
    :isBlank="isBlank"
    @click="openShareWindow"
  >
    <icon iconName="LiveJournal" class="share-button__icon" v-if="hasIcon === true">
      <path
        d="M18.09 14.696c-1.512.664-2.726 1.885-3.381 3.399l4.27.883-.886-4.282h-.003zM2.475 8.317L0 5.85C1.125 3.237 3.216 1.14 5.823 0h.006l2.469 2.463c1.368-.591 2.876-.921 4.463-.921C18.967 1.542 24 6.569 24 12.771 24 18.973 18.967 24 12.761 24 6.551 24 1.52 18.976 1.52 12.771c0-1.591.355-3.081.952-4.451l9.143 9.114c1.125-2.613 3.218-4.71 5.823-5.85l-9.135-9.12h-.008c-2.606 1.14-4.695 3.24-5.823 5.85l.003.003z"
      />
    </icon>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import {
  getDocumentHref,
  getDocumentTitle,
  eventEmit,
  createWindow
} from "../helpers";

export default {
  name: "LiveJournalShareButton",
  components: { Icon },
  props: {
    className: { type: String },
    shareUrl: { type: String, default: getDocumentHref },
    shareTitle: { type: String },
    shareText: { type: String, default: getDocumentTitle },
    sharePic: { type: String, default: "" },
    btnText: { type: String, default: "LiveJournal" },
    windowWidth: { type: Number },
    windowHeight: { type: Number },
    hasIcon: { type: Boolean, default: true },
    isBlank: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow: function() {
      eventEmit(this, { name: "LiveJournal" });
      const configWindow = createWindow();
      const url = `https://livejournal.com/update.bml?event=${encodeURIComponent(
        this.$props.shareUrl
      )}&subject=${encodeURIComponent(this.$props.shareText)}`;

      return this.$props.isBlank
        ? window.open(url, "__blank")
        : window.open(url, "Share this", configWindow);
    }
  }
};
</script>

<style>
@import "../style/index.css";
@import "../style/livejournalButton.css";
</style>
