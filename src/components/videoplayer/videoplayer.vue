<template>
  <div class="videoplayer" :class="{fullscreen: isFullScreen}">
    <div class="videoplayer-body">
      <div class="videoplayer-container" :style="`width: ${width}px;height: ${height}px;`">
        <video :width="width" :height="height" ref="video" playsinline>
          <p>we believe you need to upgrade your browser :)</p>
        </video>
        <div class="videoplayer-controls">
          <div class="videoplayer-controls-inner">
            <div class="videoplayer-controls-play-pause">
              <a class="videoplayer-controls-play" @click="handlePlay" v-if="!isPlaying"></a>
              <a class="videoplayer-controls-pause" @click="handlePause" v-if="isPlaying"></a>
            </div>
            <span class="videoplayer-controls-currenttime">{{currentTime}}</span>
            <div class="videoplayer-progress">
              <span class="videoplayer-progress-active" @click="setBackTo" :style="{width: activeProgress + 'px'}"></span>
              <div class="videoplayer-progress-bar" ref="progress" @click="setBackTo"></div>
              <span class="videoplayer-progress-slider" ref="slider" :style="{left: sliderLeft + 'px'}" @touchstart="handleSliderDown" @mousedown="handleSliderDown"></span>
            </div>
            <span class="videoplayer-duration">{{duration}}</span>
            <a class="videoplayer-controls-fullscreen" @click="toggleFullScreen"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videoplayer',
    props: {
      poster: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: 'auto'
      },
      onPlay: {
        type: Function
      },
      onPause: {
        type: Function
      }
    },
    data() {
      return {
        currentTime: '00:00',
        duration: '00:00',
        activeProgress: 0,
        sliderLeft: 0,
        isPlaying: false,
        isFullScreen: false
      }
    },
    mounted() {
      const videoEle = this.$refs.video
      const sliderEle = this.$refs.slider
      // check
      videoEle.poster = this.poster
      videoEle.src = this.src
      // bind events
      videoEle.addEventListener('loadeddata', this.handleLoadedData, false)
      videoEle.addEventListener('timeupdate', this.handleTimeupdate, false)
      videoEle.addEventListener('progress', this.handleVideoProgress, false)
      videoEle.addEventListener('play', () => {
        if (!this.isPlaying) {
          this.isPlaying = true
        }
      })
      videoEle.addEventListener('pause', () => {
        if (this.isPlaying) {
          this.isPlaying = false
        }
      })
    },
    beforeDestroy() {
      document.removeEventListener('mouseup', this.handleSliderUp, false)
      document.removeEventListener('touchend', this.handleSliderUp, false)
      document.removeEventListener('mousemove', this.handleSliderMove, false)
      document.removeEventListener('touchmove', this.handleSliderMove, false)
    },
    methods: {
      formatTime(num) {
        const temp = parseFloat(num)
        let secs = parseInt(temp % 60)
        let mins = parseInt((temp / 60) % 60)
        secs = `0${secs}`.slice(-2)
        mins = `0${mins}`.slice(-2)
        return `${mins}:${secs}`
      },
      calculateSliderLeft() {
        const sliderEle = this.$refs.slider
        if (sliderEle) {
          const sliderRect = sliderEle.getBoundingClientRect()
          if (this.activeProgress > sliderRect.width / 2) {
            return this.activeProgress - sliderRect.width / 2
          }
        }
        return 0
      },
      handlePlay() {
        if (this.onPlay && typeof this.onPlay === 'function') {
          this.onPlay(this.$refs.video)
        } else {
          this.$refs.video.play()
          this.isPlaying = true
        }
      },
      handlePause() {
        if (this.onPause && typeof this.onPause === 'function') {
          this.onPause(this.$refs.video)
        } else {
          this.$refs.video.pause()
          this.isPlaying = false
        }
      },
      handleSliderChange(e) {
        const slider = this.$refs.slider
        const videoEle = this.$refs.video
        this.activeProgress = parseFloat(slider.value / videoEle.duration) * 100
        videoEle.currentTime = slider.value
      },
      setBackTo(e) {
        const offsetX = e.offsetX
        const progressEle = this.$refs.progress
        const videoEle = this.$refs.video
        const rect = progressEle.getBoundingClientRect()
        videoEle.currentTime = parseFloat(offsetX / rect.width) * videoEle.duration
      },
      toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen
      },
      handleLoadedData() {
        const videoEle = this.$refs.video
        this.duration = this.formatTime(videoEle.duration)
      },
      handleTimeupdate() {
        const videoEle = this.$refs.video
        const progressEle = this.$refs.progress
        const progressRect = progressEle.getBoundingClientRect()
        const currentTime = videoEle.currentTime
        const duration = videoEle.duration
        this.activeProgress = parseFloat(currentTime / duration) * progressRect.width
        this.sliderLeft = this.calculateSliderLeft()
        this.currentTime = this.formatTime(videoEle.currentTime)
      },
      handleVideoProgress(e) {
        const videoEle = this.$refs.video
        const tr = videoEle.buffered
      },
      handleSliderDown() {
        // here need to bind the mousemove touchmove to document
        document.addEventListener('mousemove', this.handleSliderMove, false)
        document.addEventListener('touchmove', this.handleSliderMove, false)
        // add remove listener
        document.addEventListener('mouseup', this.handleSliderUp, false)
        document.addEventListener('touchend', this.handleSliderUp, false)
      },
      handleSliderUp() {
        document.removeEventListener('mousemove', this.handleSliderMove, false)
        document.removeEventListener('touchmove', this.handleSliderMove, false)
      },
      handleSliderMove(e) {
        // here should handle mouse and touch type events
        let pageX
        if (e.type === 'mousemove') {
          pageX = e.pageX
        }
        if (e.type === 'touchmove') {
          pageX = e.touches[0].pageX
        }
        const videoEle = this.$refs.video
        const progressEle = this.$refs.progress
        const rect = progressEle.getBoundingClientRect()
        let offset = pageX - rect.left
        if (offset < 0) {
          offset = 0
        }
        if (offset > rect.width) {
          offset = rect.width
        }
        this.activeProgress = offset
        this.sliderLeft = this.calculateSliderLeft()
        videoEle.currentTime = parseFloat(offset / rect.width) * videoEle.duration
      }
    }
  }
</script>

<style lang="scss" scoped>
  .videoplayer {
    user-select: none;
    &.fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3000;
      background-color: rgba(0,0,0,0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      .videoplayer-controls {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3100;
      }
    }
  }
  .videoplayer-body {
    display: block;
    position: relative;
    z-index: 1000;
    background-color: #f6f6f6;
  }
  .videoplayer-container {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .videoplayer-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.10) 0%, #1A1B1E 100%);
    z-index: 1100;
    -webkit-user-select: none;
    user-select: none;
  }
  .videoplayer-controls-inner {
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .videoplayer-controls-play, .videoplayer-controls-pause, .videoplayer-controls-fullscreen {
    display: block;
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    outline: none;
  }
  .videoplayer-controls-play {
    background-image: url('../../assets/images/play.svg');
  }
  .videoplayer-controls-pause {
    background-image: url('../../assets/images/pause.svg');
  }
  .videoplayer-controls-fullscreen {
    width: 30px;
    height: 24px;
    background-image: url('../../assets/images/fullscreen.svg');
  }
  .videoplayer-controls-currenttime, .videoplayer-duration {
    font-size: 10px;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    width: auto;
  }
  .videoplayer-progress {
    flex: 1 1;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1200;
    height: 20px;
  }
  .videoplayer-progress-active {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1300;
    height: 2px;
    background-color: #1478F0;
    cursor: pointer;
  }
  .videoplayer-progress-bar {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background-color: #d2d2d2;
    width: 100%;
    z-index: 1250;
    cursor: pointer;
  }
  .videoplayer-progress-slider {
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    transform: translateY(-50%);
    z-index: 1400;
  }
</style>