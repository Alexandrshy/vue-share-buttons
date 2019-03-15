<template>
  <button class="share-button" :class="className" @click="openShareWindow">
    <i class="share-button__icon">123</i>
    <span class="share-button__text" v-if="btnText">{{btnText}}</span>
  </button>
</template>
 
<script>
import { getDocumentHref, eventEmit } from "../helpers";
export default {
  name: "twitter-button",
  props: {
    className: { type: String },
    pageUrl: { type: String, deflate: getDocumentHref },
    btnText: { type: String, default: "Twitter" },
    hasIcon: { type: Boolean, default: true }
  },
  methods: {
    openShareWindow: function() {
      console.log(eventEmit(this, { name: "qwee" }));
      const url =
        "https://twitter.com/share?url=https://vuejs.org/&text=Super-test";
      // return window.open(url, "__blank");
      return window.open(
        url,
        "Share this",
        "width=500,height=700,left=100,top=200,toolbar=no,menubar=no,scrollbars=no"
      );
    }
  }
};
</script>

