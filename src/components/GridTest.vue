<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
       <template>
            <Row>
                <Col span="12">col-12</Col>
                <Col span="12">col-12</Col>
            </Row>
            <br>
            <Row>
                <Col span="8">col-8</Col>
                <Col span="8">col-8</Col>
                <Col span="8">col-8</Col>
            </Row>
            <br>
            <Row>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
            </Row>
        </template> 
        <br>
        <h3>通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效</h3>
        <template>
            <p>子元素向左排列</p>
            <Row type="flex" justify="start" class="code-row-bg">
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
            </Row>
            <p>子元素向右排列</p>
            <Row type="flex" justify="end" class="code-row-bg">
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
            </Row>
            <p>子元素居中排列</p>
            <Row type="flex" justify="center" class="code-row-bg">
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
            </Row>
            <p>子元素等宽排列</p>
            <Row type="flex" justify="space-between" class="code-row-bg">
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
            </Row>
            <p>子元素分散排列</p>
            <Row type="flex" justify="space-around" class="code-row-bg">
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
                <Col span="4">col-4</Col>
            </Row>
        </template>

        <h3>响应式布局</h3>
        <template>
            <Row>
                <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
                <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
                <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
            </Row>
        </template>

        <h3>对齐</h3>
        <template>
            <p>顶部对齐</p>
            <Row type="flex" justify="center" align="top" class="code-row-bg">
                <Col span="4"><p style="height: 80px">col-4</p></Col>
                <Col span="4"><p style="height: 30px">col-4</p></Col>
                <Col span="4"><p style="height: 100px">col-4</p></Col>
                <Col span="4"><p style="height: 60px">col-4</p></Col>
            </Row>
            <p>底部对齐</p>
            <Row type="flex" justify="center" align="bottom" class="code-row-bg">
                <Col span="4"><p style="height: 80px">col-4</p></Col>
                <Col span="4"><p style="height: 30px">col-4</p></Col>
                <Col span="4"><p style="height: 100px">col-4</p></Col>
                <Col span="4"><p style="height: 60px">col-4</p></Col>
            </Row>
            <p>居中对齐</p>
            <Row type="flex" justify="center" align="middle" class="code-row-bg">
                <Col span="4"><p style="height: 80px">col-4</p></Col>
                <Col span="4"><p style="height: 30px">col-4</p></Col>
                <Col span="4"><p style="height: 100px">col-4</p></Col>
                <Col span="4"><p style="height: 60px">col-4</p></Col>
            </Row>
        </template>
  </div>
</template>

<script>
export default {
  name: 'GridTest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ivu-col{
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background: rgba(0,153,229,.9);
    }
    .ivu-col:nth-child(odd) {
        background: rgba(0,153,229,.7);
    }


</style>
