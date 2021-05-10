<!--
 * @Author: your name
 * @Date: 2021-04-25 20:02:27
 * @LastEditTime: 2021-05-10 13:55:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-demo/src/components/donghua.vue
-->
<template>
  <div class="dragon-div">
    <div class="main">
      <!-- 圆圈阴影 -->
      <div class="shadow-wrapper">
        <div class="shadow"></div>
      </div>
      <div class="dragon">
        <!-- 身体 -->
        <div class="body"></div>
        <!-- 头部左上角 -->
        <div class="horn-left"></div>
        <!-- 头部右上角 -->
        <div class="horn-right"></div>
        <div class="eye left"></div>
        <div class="eye right"></div>
        <!-- 左眼红晕 -->
        <div class="blush left"></div>
        <!-- 右眼红晕 -->
        <div class="blush right"></div>
        <!-- 嘴巴 -->
        <div class="mouth"></div>
        <!-- 尾部 -->
        <div class="tail-sting"></div>
      </div>
      <!-- 口吐火 -->
      <div class="fire-wrapper">
        <div class="fire"></div>
      </div>
      <!-- 进度条 -->
      <div class="progress">
        <div class="outer">
          <div class="inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Blush from '../assets/blush.png'
// export default {
//   data () {
//     return {
//       Blush
//     }
//   }
// }
</script>

<style scoped>
.dragon-div {
  background-color: #fff6e3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  position: relative;
}

/* 身体部分 */
.dragon {
  width: 200px;
  height: 140px;
  transform-origin: 50% 80%;
  animation: zoomIn 0.5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
}

/* 身体部分 */
.dragon .body {
  position: absolute;
  top: 0;
  right: 0;
  width: 180px;
  height: 128px;
  background: url("../assets/body.png") no-repeat center center;
  /* 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域 */
  background-size: contain;
  z-index: 10;
}

.dragon .horn-left {
  position: absolute;
  top: -17px;
  left: 32px;
  width: 31px;
  height: 31px;
  background-image: url("../assets/horn-left.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 9;
  transform: rotate(-5deg);
  animation: swingRight 0.5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite
    alternate;
}

.dragon .horn-right {
  position: absolute;
  top: -16px;
  left: 110px;
  width: 34px;
  height: 31px;
  background-image: url("../assets/horn-right.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 9;
  transform: rotate(5deg);
  animation: swingLeft 0.5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
}

.dragon .eye {
  position: absolute;
  top: 39px;
  width: 11px;
  height: 11px;
  background-image: url("../assets/eye.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 12;
}

.dragon .eye.left {
  left: 49px;
}

.dragon .eye.right {
  left: 118px;
  transform: rotate(180deg);
}

/* 红晕 */
.dragon .blush {
  position: absolute;
  top: 46px;
  width: 15px;
  height: 9px;
  background-image: url("../assets/blush.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: 11;
  animation: blush 0.5s ease infinite alternate;
}

.dragon .blush.left {
  left: 43px;
}

.dragon .blush.right {
  left: 120px;
}

.dragon .mouth {
  position: absolute;
  top: 52px;
  left: 49px;
  width: 78px;
  height: 56px;
  background-image: url("../assets/mouth.png");
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: 11;
  animation: openMouth 1s ease infinite;
}

/* 尾部 */
.dragon .tail-sting {
  position: absolute;
  top: 67px;
  left: 139px;
  width: 40px;
  height: 38px;
  background-image: url("../assets/tail-sting.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 9;
  animation: tailUp 0.5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
}

/* 圆圈 阴影 */
.shadow-wrapper {
  position: absolute;
  top: 110px;
  width: 100%;
}

.shadow {
  margin: 0 auto;
  width: 110px;
  height: 30px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  z-index: 0;
  animation: zoomIn 0.5s cubic-bezier(0.47, 0, 0.75, 0.72) infinite alternate;
}

/* 火🔥 */
.fire-wrapper {
  position: absolute;
  width: 40px;
  top: 60px;
  left: 88px;
  transform: translate(-50%, -50%);
  transform-origin: 50% 100%;
  animation: fireUp 1s ease-in infinite;
}

.fire {
  padding-bottom: 135%;
  width: 100%;
  height: 100%;
  background-image: url("../assets/fire.png");
  background-repeat: no-repeat;
  background-size: contain;
  animation: fire 1s ease-out infinite;
}

/* 进度条 */
.progress {
  margin-top: 30px;
  width: 100%;
}

.progress .outer {
  width: 100%;
  height: 14px;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.progress .inner {
  width: 0;
  height: 100%;
  background: #ffcd33;
  animation: loading 2s linear infinite;
}

/* keyframes 创建 动画规则  */
@keyframes zoomIn {
  100% {
    /* 1.16 比例放大 */
    transform: scale(1.16, 1.16);
  }
}

@keyframes swingRight {
  100% {
    /* 旋转 5度*/
    transform: rotate(5deg);
  }
}

@keyframes swingLeft {
  100% {
    transform: rotate(-5deg);
  }
}

/* 透明度 从 0 到 1 */
@keyframes blush {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* 裁剪 选择显示区域 */
/* ellipse() 定义一个椭圆 */
/* ellipse()可以传人3个可选参数；
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
1. 椭圆的X轴半径，默认是宽度的一半，支持百分比
2. 椭圆的Y轴半径，默认是高度的一半，支持百分比
3. 椭圆中心位置，默认是元素的中心点 */
@keyframes openMouth {
  0% {
    clip-path: ellipse(20% 0% at 50% 0);
  }

  50% {
    clip-path: ellipse(100% 100% at 50% 0);
  }

  70% {
    clip-path: ellipse(100% 100% at 50% 0);
  }

  100% {
    clip-path: ellipse(20% 0% at 50% 0);
  }
}

/* 从 开始到结束 Y轴 比例变化 */
@keyframes tailUp {
  0% {
    transform: scaleY(0.9);
  }

  100% {
    transform: scaleY(1.06);
  }
}

/* 加载100% */
@keyframes loading {
  100% {
    width: 100%;
  }
}

/* 火 顶部距离 */
@keyframes fireUp {
  0% {
    top: 70px;
  }

  20% {
    top: 70px;
  }

  100% {
    top: -80px;
  }
}

@keyframes fire {
  0% {
    transform: scale(0, 0);
    opacity: 0.8;
  }

  20% {
    transform: scale(0, 0);
    opacity: 0.8;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
