<template>
  <div class="page has-navbar has-tabbar has-dialogue" v-nav="{ title: '互动交流' }">
    <div class="page-content">
        <div class="topisList">
            <div class="weui-cell moments__post">
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" />
                </div>
                <div class="weui-cell__bd">
                    <!-- 人名链接 -->
                    <a class="title"> <span>夜华</span> </a>
                    <!-- post内容 -->
                    <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
                    <!-- 伸张链接 -->
                    <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                    <!-- 相册 -->
                    <div class="thumbnails">
                        <div class="thumbnail">
                            <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg" />
                        </div>
                        <div class="thumbnail">
                            <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg" />
                        </div>
                    </div>
                    <!-- 资料条 -->
                    <div class="toolbar">
                        <span class="timestamp">17小时前</span>
                        <!-- 
                        <div>
                            <div id="actionMenu" class="actionMenu slideIn">
                                <div class="actionBtn" id="btnLike"><i class="icon ion-ios-heart-outline"></i></div>
                                <div class="actionBtn" id="btnComment"></div>
                            </div>
                        </div> 
                      -->
                        <span id="actionToggle" class="actionToggle"><i class="icon ion-ios-chatboxes-outline"></i>评论</span>
                    </div>
                    <!-- 赞／评论区 -->
                    <!-- <p class="liketext"><i class="icon icon-96"></i><span class="nickname">夜华</span>,<span class="nickname">孙尚香</span></p> -->
                    <div class="commentList">
                        <div class="comment-item">
                            <span class="name">子画：</span>不错，支持！
                        </div>
                        <div class="comment-item">
                            <span class="name">夜华</span>回复
                            <span class="name">子画：</span>谢谢!
                        </div>
                        <div class="comment-item">
                            <span class="name">花千骨：</span>
                            <span>长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本</span>
                        </div>
                    </div>
                </div>
                <!-- 结束 post -->
            </div>
            <div class="weui-cell moments__post">
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" />
                </div>
                <div class="weui-cell__bd">
                    <!-- 人名链接 -->
                    <a class="title"> <span>夜华</span> </a>
                    <!-- post内容 -->
                    <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
                    <!-- 伸张链接 -->
                    <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                    <!-- 相册 -->
                    <div class="thumbnails">
                        <div class="thumbnail">
                            <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg" />
                        </div>
                        <div class="thumbnail">
                            <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg" />
                        </div>
                    </div>
                    <!-- 资料条 -->
                    <div class="toolbar">
                        <span class="timestamp">17小时前</span>
                        <!-- 
                        <div>
                            <div id="actionMenu" class="actionMenu slideIn">
                                <div class="actionBtn" id="btnLike"><i class="icon ion-ios-heart-outline"></i></div>
                                <div class="actionBtn" id="btnComment"></div>
                            </div>
                        </div> 
                      -->
                        <span id="actionToggle" class="actionToggle"><i class="icon ion-ios-chatboxes-outline"></i>评论</span>
                    </div>
                    <!-- 赞／评论区 -->
                    <!-- <p class="liketext"><i class="icon icon-96"></i><span class="nickname">夜华</span>,<span class="nickname">孙尚香</span></p> -->
                </div>
                <!-- 结束 post -->
            </div>
        </div>
        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">
                <span class="iconfont ion-ios-compose-outline"></span>
                <div class="chat-way">
                    <input type="text" class="chat-txt" />
                </div>
                <!-- <span class="expression iconfont icon-dialogue-smile"></span> -->
                <!-- <span class="more iconfont icon-dialogue-jia"></span> -->
                <md-button class="md-button md-button-sm button button-balanced">
                  发送
                </md-button>
            </div>
        </footer>
    </div>
</div>
</template>

<script>

</script>

<style lang="scss">
  .topisList {
    background: #fff
  }

  .topisList .home-pic {
    width: 100%;
    margin-top: -90px;
    position: relative;
    height: 370px;
    z-index: 5;
    background: url(https://sinacloud.net/vue-wechat/images/bg/cover.jpg) no-repeat center center;
    background-size: cover;
    margin-bottom: 20px
  }

  .topisList .home-pic-base {
    position: absolute;
    left: 0;
    bottom: -22px;
    width: 100%;
    height: 70px;
    padding: 0 15px
  }

  .topisList .home-pic-base .top-pic {
    width: 140px;
    height: 140px;
    padding: 3px;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 100% 0%;
    -ms-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    float: right
  }

  .topisList .home-pic-base .top-name {
    position: absolute;
    left: 20px;
    right: 105px;
    top: 10px;
    font-size: 20px;
    text-align: right;
    color: #ffffff;
    overflow: hidden
  }

  .topisList .top-pic-inner {
    width: 100%;
    height: 100%
  }

  .topisList .top-pic-inner img {
    width: 100%
  }

  .topisList .drag-reflash {
    position: absolute;
    left: 20px;
    top: -40px;
    z-index: 2;
    width: 30px;
    height: 30px;
    // background: url(../../assets/images/find-album-reflash-icon.png) no-repeat 0 0;
    background-size: contain
  }

  .topisList .home-content {
    padding-top: 45px;
    min-height: 500px
  }

  .topisList .moments__post {
    display: block;
    padding: 10px;
    border-bottom: 1px solid #f2eeee
  }

  .topisList .moments__post::before {
    content: none
  }

  .topisList .moments__post .weui-cell__hd {
    display: table-cell;
    vertical-align: top;
    min-width: 45px
  }

  .topisList .moments__post .weui-cell__hd img {
    width: 45px !important
  }

  .topisList .moments__post .weui-cell__bd {
    font-size: 15px;
    display: table-cell;
    padding-left: 10px
  }

  .topisList .moments__post .weui-cell__bd .paragraphExtender {
    margin: 5px auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
  }

  .topisList .moments__post .title {
    color: #094dcc
  }

  .topisList .moments__post .thumbnails {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .topisList .moments__post .thumbnails .thumbnail {
    width: 80px;
    height: 80px;
    margin: 3px;
    margin-left: 0px;
    background: #757575;
    overflow: hidden
  }

  .topisList .moments__post .thumbnails .thumbnail img {
    width: 100%;
    height: 100%
  }

  .topisList .moments__post .toolbar {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
  }

  .topisList .moments__post .toolbar .timestamp {
    color: #757575;
    font-size: 13px
  }

  .topisList .moments__post .actionMenu {
    position: absolute;
    height: 40px;
    background-color: #4e5156;
    border-radius: 5px;
    z-index: 5;
    top: -10px;
    right: 20px;
    // display: none;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    .actionBtn {
      display: inline-block;
      width: 60px;
    }
  }

  .topisList .moments__post .actionToggle {
    margin-left: auto;
    color: #757575;
    font-size: 13px;
    .icon {
      margin-right: 2px;
      font-size: 16px;
    }
  }

  .topisList .moments__post .liketext {
    margin-top: 10px;
    width: 100%;
    background-color: #f3f3f5;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }

  .topisList .moments__post .liketext .nickname {
    color: #094dcc;
    font-size: 13px
  }

  .commentList {
    position: relative;
    margin-top: 20px;
    padding: 10px;
    background-color: #f1f1f1;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: -8px;
      left: 10px;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid #f1f1f1;
    }
    .comment-item .name {
      color: #094dcc;
    }
  }

.dialogue-footer {
    width: 100%;
    position: fixed;
    bottom: 44px;
    left: 0;
    height: 50px
}

.component-dialogue-bar {
    position: relative;
    height: 100%;
    padding-left: 50px
}

.component-dialogue-bar .dialogue-item {
    position: absolute;
    height: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
    -webkit-transition: .25s all ease;
    transition: .25s all ease;
    background-color: #fdfdfd
}

.component-dialogue-bar .dialogue-item::before {
    content: "";
    position: absolute;
    width: 200%;
    left: 0;
    top: 0;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    background-color: #b7b7b7;
    height: 1px;
    z-index: 2
}

.component-dialogue-bar .dialogue-item::after {
    content: "";
    position: absolute;
    left: 50px;
    top: 0px;
    border-right: 1px solid #b7b7b7;
    height: 200%;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    z-index: 2
}

.component-dialogue-bar .dialogue-item.transition-dialogue-down {
    bottom: -50px
}

.left-slide-type {
    float: left;
    width: 50px;
    height: 100%;
    padding: 5px 0;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
    color: #7d7e83;
    position: relative
}

.component-dialogue-bar-person {
    overflow: hidden;
    padding: 5px 0;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-basis: 200px;
    -ms-flex-preferred-size: 200px;
    flex-basis: 200px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    position: relative;
    background-color: #ffffff
}

.component-dialogue-bar-person::before {
    content: "";
    position: absolute;
    width: 200%;
    left: 0;
    top: 0;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    background-color: #ddd;
    height: 1px;
    z-index: 2
}

.component-dialogue-bar .component-dialogue-bar-person::before {
    display: none
}

.component-dialogue-bar-person .iconfont {
    color: #7d7e83;
    -webkit-flex-basis: 40px;
    -ms-flex-preferred-size: 40px;
    flex-basis: 40px;
    width: 40px;
    padding: 0 3px;
    font-size: 30px;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    vertical-align: middle;
    line-height: 40px;
    padding: 0 4px;
    text-align: center;
}

.chat-way {
    vertical-align: middle;
    padding: 4px 0px;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-basis: 200px;
    -ms-flex-preferred-size: 200px;
    flex-basis: 200px
}

.chat-way .chat-say {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    padding: 0 10px;
    width: 200%;
    height: 200%;
    color: #565656;
    border: 1px solid #7d7e83;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    font-size: 30px
}

.chat-way .chat-say_touched {
    background-color: #c6c7ca
}

.chat-way .two {
    display: none
}

.chat-way .chat-say_touched .two {
    display: block
}

.chat-way .chat-say_touched .one {
    display: none
}

.chat-way .chat-txt {
    border-radius: 6px;
    overflow: hidden;
    padding: 0 10px;
    width: 200%;
    height: 200%;
    border: 1px solid #7d7e83;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    font-size: 30px
}

.component-dialogue-bar-public {
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    overflow: hidden
}

.component-dialogue-bar-public li {
    padding: 0 2px;
    overflow: hidden;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    line-height: 50px;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative
}

.component-dialogue-bar-public li .iconfont {
    font-size: 12px
}

.component-dialogue-bar-public li:not(:last-child)::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    height: 200%;
    border-right: 1px solid #b7b7b7
}
.button.md-button.md-button-sm {
    margin: 4px 8px;
    min-height: 32px;
    line-height: 32px;
}
.page.has-dialogue.has-tabbar .page-content {
  margin-bottom: 94px;
}
</style>