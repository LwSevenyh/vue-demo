<template>
    <div>
        <Button type="primary" @click="onShowCategoryTree">类别</Button>
        <Modal v-model="show_category_tree_flag" title="项目类别">
            <Tree :data="catsData"></Tree>
        </Modal>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>
<script>

import {
  categoryTreeShow
} from '../api/index'
import { mapActions, mapState } from 'vuex'
import cache from '../lib/func/cache'

export default {
  data () {
    return {
      show_category_tree_flag: false,
      spinShow: false,
      catsData: []
    }
  },
  methods: {
    ...mapActions('categroy', ['getCate']),
    // onShowCategoryTree() {
    //   this.getCate()
    // }
    onShowCategoryTree () {
      let _key = 'CATEGORY'
      cache.checkActive(_key).then(res => {
        console.log(res)
        if (res) {
          cache.get(_key).then(data => { this.catsData = data })
        }
      })

      this.show_category_tree_flag = true
      this.spinShow = true
      // 取得全部分类
      categoryTreeShow().then(response => {
        let data = response.data.data
        this.catsData = data.categroy_tree
        this.spinShow = false
        cache.set(_key, data.categroy_tree)
      })
    }
  },
  computed: {
    // ...mapState('categroy', ['catsData', 'spinShow'])
  }
}
</script>
