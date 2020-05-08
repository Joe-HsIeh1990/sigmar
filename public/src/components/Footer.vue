<template>
  <footer
    class="footerClass container-fluid bg-dark row justify-content-center py-4 mx-0"
  >
    <div class="container-md d-flex  flex-md-row flex-column justify-content-md-between justify-content-center align-items-center">
      <div class="text-center mb-3 mb-md-0">
        <p class="text-white my-0">&copy;僅個人練習使用，不做任何商業用途</p>
      </div>
      <div class="text-center">
        <a href="#" @click.prevent="havntdone()">
          <img src="../assets/images/inst.png" class="img-fluid" alt />
        </a>
        <a href="#" @click.prevent="havntdone()">
          <img src="../assets/images/github.png" class="img-fluid mx-2" alt />
        </a>
        <a href="#" @click.prevent="havntdone()">
          <img src="../assets/images/fb.png" class="img-fluid" alt />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    havntdone(){
      this.$bus.$emit("message:push", "示意圖", "danger");
    }
  }
};
</script>
<style>
.footerClass {
  width: 100%;
}
.footerClass img {
  height: 5vh;
}
</style>