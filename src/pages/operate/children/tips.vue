<template>
  <div class="page has-navbar" v-nav="{ title: '任务说明', showBackButton: true }"  v-tabbar-menu-index="2">
    <div class="page-content">
      <div class="padding">
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>
        <p>任务说明</p>

        <md-button class="md-button button button-positive button-block" @click.native="clicked()">
          进入任务
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clicked () {
        $router.push({ name: 'task' })
      }
    }
  }
</script>