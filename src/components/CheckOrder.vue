<template >
  <div class="container-md bg-cart">
    <div class="pt-5 row justify-content-center">
      <form class="col-md-6 bgmap" @submit.prevent="payOrder">
        <table class="table">
          <thead class="text-white">
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id" class="text-white">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-white">
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody class="text-white">
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="payfor row justify-content-between">
          <div class="col-6">
            <img src="../assets/images/business-and-finance.png" class="img-fluid mr-2" alt />
            <img src="../assets/images/brands-and-logotypes.png" class="img-fluid mr-2" alt />
            <img src="../assets/images/business.png" class="img-flui mr-2d" alt />
            <img src="../assets/images/social-media.png" class="img-fluid mr-2" alt />
          </div>
          <div class="text-right col-6">
            <button class="btn btn-danger mr-2" @click.prevent="backpages()">返回上一頁</button>
            <button class="btn btn-dark" v-if="order.is_paid === false">確認付款去</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {}
      },
      orderId: ""
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/order/${vm.orderId}`;
      this.$http.get(url).then(response => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/pay/${vm.orderId}`;
      this.$http.post(url).then(response => {
        if (response.data.success) {
          vm.getOrder();
        }
      });
    },
    backpages() {
      this.$bus.$emit("message:push", "將返回上一頁，購物車將清空", "danger");
      this.$router.push("/costomShop");
    }
  },
  computed: {},
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>
<style>
.bg-cart {
  background: url("../assets/images/4f7a4879df3edd502d7be10aca525b96.jpg")
    no-repeat center center black;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}
.bgmap {
  background-color: rgba(0, 0, 0, 0.5);
}
.payfor img{
  height: 6vh;
}
</style>