<template>
  <div>
    <!-- about -->
    <div class="container-md px-3 py-2 mt-5 " id="about">
      <!-- about title -->
      <div
        class="row text-center text-light justify-content-center align-items-center my-3 about-title"
      >
        <div class="col-md-2">
          <img src="../assets/images/White-Warhammerlogo.png"  alt />
        </div>
        <div class="col-md-6">
          <h1>戰鎚西格瑪時代戰棋專賣店</h1>
        </div>
      </div>
      <!-- slider -->
      <div class="container-md">
        <div id="slider">
          <img src="../assets/images/AoSCommandAbility-May18-Freeguild5eg.jpg" class="imge" />
          <img src="../assets/images/Welcome-To-AoS-2019-10-12-Portal-All-bm.jpg" class="imge" />
        </div>
      </div>
      <!-- ------ -->
      <div
        class="d-flex flex-column flex-md-row justify-content-center align-items-center mx-auto py-5"
      >
        <div class="col-md-2 col-6 text-center">
          <img src="../assets/images/nav-item-death.png" class="img-fluid" alt />
        </div>
        <div class="col-md-8 col-8">
          <br />
          <h3 class="text-center text-light">關於我們</h3>
          <br />
          <div> 
            <p>我們是一群熱愛戰鎚西格瑪時代的玩家。</p>
            <p>創立這個網站主要目的是為了讓更多人能夠接觸到戰棋這塊較為少人接觸的桌遊，並推廣西格瑪時代為主的戰棋。</p>
            <p>戰棋是屬於桌遊的一種，現今大多人所認識的桌遊，是以卡牌為主，但戰棋較少人了解。</p>
            <p>戰棋最大特色就是，在遊戲中依照著戰爭守則，進行戰略部屬以及戰術運用，在前一版終焉時刻時，一場戰鬥大概約3~4小時。近來新版則更改了許多規則，以至於遊戲的難易度和耗時簡短，讓新入門玩家更能淺而易懂得操作手上的棋子。</p>
          </div>
        </div>
        <div class="col-md-2 col-6 text-center">
          <img src="../assets/images/nav-item-order.png" class="img-fluid" alt />
        </div>
      </div>
      <div class="pt-5">
        <div>
          <h2 class="text-light text-center">戰鎚西格瑪時代戰棋成長史</h2>
        </div>
      </div>
      <!-- pagechange -->
      <div class="d-flex flex-column align-items-center">
        <div class="row justify-content-center mt-5 text-center text-dark">
          <button class="col-6 pagechange rounded-left" @click.prevent="link = 'a'">2019</button>
          <button class="col-6 pagechange rounded-right" @click.prevent="link = 'b'">2020</button>
        </div>
        <div class="mb-5">
          <div v-if="link === 'a'">
            <div class="card">
              <img
                src="../assets/images/1313154033-e4d8101ae91bfe37f4e8f9ab5297994f_n.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">2019年，並設立此平台,專營中古戰鎚模型。</p>
              </div>
            </div>
          </div>
          <div v-else-if="link === 'b'">
            <div class="card">
              <img src="../assets/images/oc.jpg" class="card-img-top img-h" alt="..." />
              <div class="card-body">
                <p class="card-text">2020年，因應官方全面改版下架終焉之時後，引入最新版西格瑪時代。</p>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import "slick-carousel/slick/slick.css";
import $ from "jquery";

export default {
  data() {
    return {
      link: "a"
    };
  },
  mounted() {
    $(document).ready(function() {
      $("#slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 3000,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              autoplay: true,
              autoplaySpeed: 3000,
              fade: true,
              speed: 3000
            }
          }
        ]
      });
    });
  }
};
</script>
