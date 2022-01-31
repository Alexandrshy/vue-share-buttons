<template>
  <button
    :url="url"
    class="share-button share-button--email"
    type="button"
    @click="openShareWindow"
  >
    <img v-if="customIcon" v-bind:src="customIcon" alt="" />
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
    <span v-if="btnText" class="share-button__text">{{ btnText }}</span>
  </button>
</template>

<script>
import Icon from "./icon/Icon.vue";
import { eventEmit, getDocumentHref, getDocumentTitle } from "../helpers";

export default {
  name: "EmailShareButton",
  components: { Icon },
  props: {
    url: { type: String, default: getDocumentHref },
    btnText: { type: String, default: "Email" },
    hasIcon: { type: Boolean, default: true },
    subject: { type: String, default: getDocumentTitle() },
    customIcon: { type: String, default: "" },
  },
  methods: {
    openShareWindow() {
      eventEmit(this, "onShare", { name: "Email" });
      const url = `mailto:?subject=${encodeURIComponent(
        this.$props.subject
      )}&body=${encodeURIComponent(this.$props.url)}`;

      return window.open(url);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: hsla(194, 77%, 56%, 1);
$focus-color: hsla(194, 77%, 81%, 0.4);
$hover-color: hsla(194, 77%, 56%, 0.9);
$painted-color: hsla(193, 54%, 46%, 1);

@import "../css/styles";
</style>
