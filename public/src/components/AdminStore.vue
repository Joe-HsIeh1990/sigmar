<template>
  <div>
    <nav class="col-md-2 d-md-flex justify-content-center bg-dark sidebar" v-if="RWDside">
      <div class="sidebar-sticky justify-content-center">
        <h6
          class="sidebar-heading d-flex justify-content-md-between align-items-md-center px-3 mt-4 mb-4 text-center"
        >
          <div class="m-auto">
            <p>管理員</p>
          </div>
        </h6>
        <ul class="nav flex-md-column mb-5">
          <router-link to="/administrator/adminshop">
            <li class="nav-item text-center">
              <i class="fas fa-box-open"></i>
              產品列表
            </li>
          </router-link>
        </ul>
        <ul class="nav flex-md-column mb-5">
          <router-link to="/administrator/adminorder">
            <li class="nav-item text-center">
              <i class="fas fa-box-open"></i>
              訂單列表
            </li>
          </router-link>
        </ul>
        <ul class="nav flex-md-column mb-5">
          <li class="nav-item text-center">
            <i class="fas fa-box-open"></i>
            優惠卷
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <div>
            <button @click="signout" class="m-auto">登出</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AdminStore",
  data() {
    return {
      wid: 0,
      rwdsideNav: true
    };
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}logout`;
      const vm = this;
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.$router.push("/aboutus");
        }
      });
    }
  },
  computed: {
    RWDside() {
      let w = window.innerWidth;
      let vm = this;
      vm.wid = w;
      if (vm.wid < 768) {
        return (vm.rwdsideNav = false);
      } else {
        return (vm.rwdsideNav = true);
      }
    }
  },
  mounted() {}
};
</script>

<style>

</style>