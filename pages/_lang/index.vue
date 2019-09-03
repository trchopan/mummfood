<template>
  <div class="container">
    <Menu />
    <div class="head--container">
      <ImageSrcSet src="/img/background-0.jpg" class="head--img" />
      <div class="head--text">
        <p>
          Mumm cung cấp các phần ăn hàng tuần giúp bạn duy trì một lối sống
          khỏe. Chúng tôi tập trung vào chế độ ăn cân bằng được thiết kế chuyên
          biệt để hỗ trợ bạn kiểm soát cân nặng một cách hiệu quả nhất.
        </p>
        <p>
          Nếu bạn đang tìm kiếm những bữa ăn ngon và tốt cho sức khỏe được chuẩn
          bị sẵn ở Hà Nội thì Mumm là một lựa chọn tối ưu. Thực đơn đa dạng với
          hơn 100 món của chúng tôi có thể giúp bạn thưởng thức mà không ngán
          trong hơn 1 tháng.
        </p>
      </div>
    </div>
    <div v-for="(document, index) in documents" :key="'document-' + index">
      <PageImage v-if="document.type === 'page-image'" :document="document" />
      <PageText v-if="document.type === 'page-text'" :document="document" />
      <ImageList v-if="document.type === 'img-list'" :document="document" />
      <Link v-if="document.type === 'link'" :document="document" />
      <div v-if="document.type === 'end-text'" class="end-text">
        <p v-for="body in document.body" v-html="body"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import documents from "./index.text";

export default Vue.extend({
  data() {
    return {
      documents
    };
  },
  created() {
    if (process.client) {
      AOS.init();
    }
  }
});
</script>

<style lang="scss" scoped>
.head--container {
  position: relative;
  height: 100%;
  max-height: 100vh;
  overflow: hidden;
  @media (max-width: $breakpoint-sm) {
    height: 100vh;
  }
  .head--img {
    width: 100%;
    @media (max-width: $breakpoint-sm) {
      width: auto;
      height: 100%;
      transform: translate(-25%, 0);
    }
  }
  .head--text {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(0, -50%);
    width: 50%;
    min-width: 28rem;
    background: white;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 2rem;
    p {
      margin: 1rem 0;
    }
    @media (max-width: $breakpoint-sm) {
      min-width: auto;
      padding: 0.5rem 1rem;
      left: 0;
      top: 0;
      width: calc(100% - 1rem);
      transform: translate(0.5rem, 25%);
    }
  }
}
.end-text {
  padding: 3rem 1rem;
  background: black;
  color: white;
}
</style>
