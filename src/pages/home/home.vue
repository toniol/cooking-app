<template>
  <div class="page has-navbar has-tabbar" v-nav="{ title: '首页' }">
    <div class="page-content">
      <swiper ref="swiper" 
        direction="horizontal" 
        width="100%" 
        height="150" 
        pager-color="#ea5a49" 
        pager-bg-color="#e5e4e3"
        hide-pager="false"
      >
        <swiper-item>
          <h1 style="color: #0a9dc7;" @click="onClick()">Item 1</h1>
        </swiper-item>

        <swiper-item>
          <h1 style="color: #44cc00;">Item 2</h1>
        </swiper-item>

        <swiper-item>
          <h1 style="color: #ffc900;">Item 3</h1>
        </swiper-item>
      </swiper>

      <list class="list-ios">
        <item>
          <h2>专业动态</h2>
        </item>
        <item class="item-avatar item-ios">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJiYWNrZ3JvdW5kOiBub25lOyI+CiAgPGRlZnM+CiAgICA8Y2lyY2xlIGlkPSJhIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz4KICAgIDxtYXNrIGlkPSJiIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICA8L21hc2s+CiAgICA8cG9seWdvbiBpZD0iYyIgcG9pbnRzPSIxMTUuNTY5IC4wMTcgMTQ5Ljk4NCA1Ni4zOTkgMTg4LjEwOCAuMDE3IDI5OS45NjcgLjAxNyAxNDkuOTg0IDIyOS43NzMgMCAuMDE3Ii8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8dXNlIHN0cm9rZT0iIzQ3QjU4NCIgc3Ryb2tlLXdpZHRoPSIxMiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4bGluazpocmVmPSIjYSIvPgogICAgPGNpcmNsZSBjeD0iNDM1LjUiIGN5PSI3OC41IiByPSIyNi41IiBmaWxsPSIjNDdCNTg0Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYgMTcxKSI+CiAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICA8L21hc2s+CiAgICAgIDx1c2UgZmlsbD0iIzQ3QjU4NCIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iIzMyNTg0RiIgcG9pbnRzPSIyOTkuOTY3IC04OS40NDggMTQ5Ljk4NCAxNDAuMzA4IDAgLTg5LjQ0OCIgbWFzaz0idXJsKCNkKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" style="border-radius: 0"> 
            <div class="title"> 标题一 </div> 
            <div class="item-note"> 说明说明说明说明 </div> 
        </item>
        <item class="item-avatar item-ios">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJiYWNrZ3JvdW5kOiBub25lOyI+CiAgPGRlZnM+CiAgICA8Y2lyY2xlIGlkPSJhIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz4KICAgIDxtYXNrIGlkPSJiIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICA8L21hc2s+CiAgICA8cG9seWdvbiBpZD0iYyIgcG9pbnRzPSIxMTUuNTY5IC4wMTcgMTQ5Ljk4NCA1Ni4zOTkgMTg4LjEwOCAuMDE3IDI5OS45NjcgLjAxNyAxNDkuOTg0IDIyOS43NzMgMCAuMDE3Ii8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8dXNlIHN0cm9rZT0iIzQ3QjU4NCIgc3Ryb2tlLXdpZHRoPSIxMiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4bGluazpocmVmPSIjYSIvPgogICAgPGNpcmNsZSBjeD0iNDM1LjUiIGN5PSI3OC41IiByPSIyNi41IiBmaWxsPSIjNDdCNTg0Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYgMTcxKSI+CiAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICA8L21hc2s+CiAgICAgIDx1c2UgZmlsbD0iIzQ3QjU4NCIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iIzMyNTg0RiIgcG9pbnRzPSIyOTkuOTY3IC04OS40NDggMTQ5Ljk4NCAxNDAuMzA4IDAgLTg5LjQ0OCIgbWFzaz0idXJsKCNkKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" style="border-radius: 0"> 
            <div class="title"> 标题二 </div> 
            <div class="item-note"> 说明说明说明说明 </div>
        </item>
      </list>

      <list class="list-ios">
        <item>
          <h2>通知动态</h2>
        </item>
        <item class="item-avatar item-ios">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJiYWNrZ3JvdW5kOiBub25lOyI+CiAgPGRlZnM+CiAgICA8Y2lyY2xlIGlkPSJhIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz4KICAgIDxtYXNrIGlkPSJiIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICA8L21hc2s+CiAgICA8cG9seWdvbiBpZD0iYyIgcG9pbnRzPSIxMTUuNTY5IC4wMTcgMTQ5Ljk4NCA1Ni4zOTkgMTg4LjEwOCAuMDE3IDI5OS45NjcgLjAxNyAxNDkuOTg0IDIyOS43NzMgMCAuMDE3Ii8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8dXNlIHN0cm9rZT0iIzQ3QjU4NCIgc3Ryb2tlLXdpZHRoPSIxMiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4bGluazpocmVmPSIjYSIvPgogICAgPGNpcmNsZSBjeD0iNDM1LjUiIGN5PSI3OC41IiByPSIyNi41IiBmaWxsPSIjNDdCNTg0Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYgMTcxKSI+CiAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICA8L21hc2s+CiAgICAgIDx1c2UgZmlsbD0iIzQ3QjU4NCIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iIzMyNTg0RiIgcG9pbnRzPSIyOTkuOTY3IC04OS40NDggMTQ5Ljk4NCAxNDAuMzA4IDAgLTg5LjQ0OCIgbWFzaz0idXJsKCNkKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" style="border-radius: 0"> 
            <div class="title"> 标题一 </div> 
            <div class="item-note"> 说明说明说明说明 </div> 
        </item>
        <item class="item-avatar item-ios">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJiYWNrZ3JvdW5kOiBub25lOyI+CiAgPGRlZnM+CiAgICA8Y2lyY2xlIGlkPSJhIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz4KICAgIDxtYXNrIGlkPSJiIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgZmlsbD0id2hpdGUiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICA8L21hc2s+CiAgICA8cG9seWdvbiBpZD0iYyIgcG9pbnRzPSIxMTUuNTY5IC4wMTcgMTQ5Ljk4NCA1Ni4zOTkgMTg4LjEwOCAuMDE3IDI5OS45NjcgLjAxNyAxNDkuOTg0IDIyOS43NzMgMCAuMDE3Ii8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8dXNlIHN0cm9rZT0iIzQ3QjU4NCIgc3Ryb2tlLXdpZHRoPSIxMiIgbWFzaz0idXJsKCNiKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB4bGluazpocmVmPSIjYSIvPgogICAgPGNpcmNsZSBjeD0iNDM1LjUiIGN5PSI3OC41IiByPSIyNi41IiBmaWxsPSIjNDdCNTg0Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDYgMTcxKSI+CiAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICA8L21hc2s+CiAgICAgIDx1c2UgZmlsbD0iIzQ3QjU4NCIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgPHBvbHlnb24gZmlsbD0iIzMyNTg0RiIgcG9pbnRzPSIyOTkuOTY3IC04OS40NDggMTQ5Ljk4NCAxNDAuMzA4IDAgLTg5LjQ0OCIgbWFzaz0idXJsKCNkKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" style="border-radius: 0"> 
            <div class="title"> 标题二 </div> 
            <div class="item-note"> 说明说明说明说明 </div>
        </item>
      </list>
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperItem } from '../../components/swiper/'

  export default {
    data () {
      return {

      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      onClick () {
        console.log('swiper click')
      }
    }
  }
</script>
<style>
  h2 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    color: #888;
  }
  .swiper .swiper-item {
    padding-top: 50px;
    background-color: #eee;
    text-align: center;
  }
  .item-ios.item-avatar .title, 
  .list-ios>.item.item-avatar .title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 6px;
  }
  .item-ios.item-avatar .item-note,
  .list-ios>.item.item-avatar .item-note  {
    float: left;
    color: #aaa;
    font-size: 14px;
  }
  .item-ios.item-avatar img:first-of-type, 
  .list-ios>.item.item-avatar img:first-of-type {
    position: absolute;
    top: 16px;
    left: 0;
    max-width: 40px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    min-width: 48px;
    min-height: 48px;
  }
</style>
