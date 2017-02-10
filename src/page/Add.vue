<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script>
  import EditorView from '../components/EditorView'
  import store from '../store'

  export default {
    methods: {
      add(data) {
        store.actions.addMemo( data )
        this.$router.push({name: 'items'}) //追加処理の後に、/itemsにナビゲーションする
      }
    },
    components: {
      EditorView
    }
  }
</script>
