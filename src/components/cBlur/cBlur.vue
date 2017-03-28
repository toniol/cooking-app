<template>
  <div :style="{height: height + 'px',position: 'relative', overflow: 'hidden', marginBottom: '20px'}">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="375" height="200" id="blurred_e4avgz0em" class="c-bg-blur"
        viewBox="0 0 375 200" preserveAspectRatio="none" style="opacity: 1;">
        <filter id="blur_e4avgz0em">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40"></feGaussianBlur>
        </filter>
        <image x="0" y="0" width="375" height="200" externalResourcesRequired="true" xmlns:xlink="http://www.w3.org/1999/xlink"
            v-bind:xlink:href="url" style="filter:url(#blur_e4avgz0em)" preserveAspectRatio="none"></image>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    blurAmount: {
      type: Number,
      default: 10
    },
    url: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 200
    }
  }
}
</script>

<style lang="scss">
.c-bg-blur {
  z-index: 0;
  opacity: 0;
  position: absolute;
  min-height: 100%;
  display: block;
  top: 0;
  max-height: none;
  /* Add this CSS to remove transparent border around the image */
  left: -20%;
  top: -20%;
  width: 140%;
  height: 140%;
  transition: opacity linear 0.8s;
}
/*
An element with this class is added by the plugin to provide an overlay above the blurred image
It could drastically improve the appearance of the blurred image for content readability
*/
.c-bg-blur-overlay {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,  rgba(0,0,0,0.15) 0%,rgba(0,0,0,1) 100%);
}
</style>