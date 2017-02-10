const state = {
  memos: []
}

// util の作成
const util = {
  // memos の中から id が一致するメモの index を返す
  findIndex(memos, id) {
    const targetId = parseInt(id, 10)
    return memos.findIndex((memo) => {
      return memo.id === targetId
    })
  }
}

// debug 処理の追加
const debug = process.env.NODE_ENV !== 'production'

// actionsの定義
const actions = {
  addMemo( newMemo ) {
    debug && console.log(`addMemo triggerd with`, newMemo)
    // memos の中のメモで一番大きい id に 1 を足した値を取得する
    newMemo.id = state.memos.reduce((id, memo) => {
      return id < memo.id ? memo.id : id
    }, 0) + 1
    state.memos.push(newMemo)
  },
  removeMemo( id ) {
    debug && console.log(`removeMemo triggerd with`, id)
    const index = util.findIndex(state.memos, id)
    state.memos.splice(index, 1)
  },
  updateMemo( memo ) {
    debug && console.log(`updateMemo triggerd with`, memo)
    const index = util.findIndex(state.memos, memo.id)
    state.memos.splice(index, 1, memo)
  }
}

export default {
  state,
  actions
}
