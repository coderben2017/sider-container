<template>
  <div class="bg-grey">
    <sider-container style="height: 100vh;">
      <template slot="sider">这里是sider区域</template>
      <template slot="content">这里是content区域</template>
    </sider-container>
  </div>
</template>

<script>
  import SiderContainer from "sider-container"

  export default {
    components: {
      SiderContainer
    }
  }
</script>
