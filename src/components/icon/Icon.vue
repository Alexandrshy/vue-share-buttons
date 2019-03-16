<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 24 24`"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title lang="en">{{ iconName }} icon</title>
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: { type: String },
    width: { type: [Number, String], default: 20 },
    height: { type: [Number, String], default: 20 }
  }
};
</script>
