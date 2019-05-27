import { mapState } from 'vuex'
// import { mapMutations } from 'vuex'

// mixin app
let storeApp = {
  computed: mapState({
    storeApp: state => state.app,
  })
}

// export
export {
  storeApp
}
