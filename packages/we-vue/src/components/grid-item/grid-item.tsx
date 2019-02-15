import Routeable from '../../mixins/routable'

import mixins from '../../utils/mixins'

export default mixins(
  Routeable
  /* @vue/component */
).extend({
  name: 'wv-grid-item',

  methods: {
    onClick () {
      this.$emit('click')
      this.routeLink()
    },
  },

  render (h) {
    return (
      <div class="weui-grid" onClick={() => {
        this.onClick()
      }}>
        {
          this.$slots.icon
            ? <div class="weui-grid__icon">
              {this.$slots.icon}
            </div> : h()
        }
        {
          this.$slots.label
            ? <p class="weui-grid__label">
              {this.$slots.label}
            </p> : h()
        }
        { this.$slots.default }
      </div>
    )
  },
})
