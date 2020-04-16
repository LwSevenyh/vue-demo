<template>
  <div>
    <Row>
      <Col span="10"> col必须放在row里面 </Col>
      <Col span="3"> 12 </Col>
    </Row>
    <Row :gutter="6">
      <Col span="6"> 通过给 row 添加 gutter 属性，可以给下属的 col 添加间距 </Col>
      <Col span="6"> 推荐使用 (16+8n)px 作为栅格间隔 </Col>
    </Row>
  </div>
</template>
