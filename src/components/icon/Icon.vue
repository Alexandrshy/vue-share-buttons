<template>
  <svg
    :aria-labelledby="titleId"
    :height="height"
    :viewBox="`0 0 ${viewBoxWidth} ${viewBoxHeight}`"
    :width="width"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title :id="titleId" lang="en">{{ iconName }} icon</title>
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: { type: String },
    viewBoxWidth: { type: [Number, String], default: 24 },
    viewBoxHeight: { type: [Number, String], default: 24 },
    width: { type: [Number, String], default: 20 },
    height: { type: [Number, String], default: 20 }
  },
  computed: {
    titleId() {
      return `${this.iconName.toLowerCase()}-svg-title`
    }
  }
};
</script>
