<!--
  data: [
    {id: 1, title: 'xx', children: []}
  ]
  初始化：（根据label值进行初始化）
    department='A/B/C'
   <material-cascader
                    :value.sync="departmentid"
                    :label.sync="department"
                    :data="departments"/>
-->
<template>
  <v-layout
    row>
    <v-dialog
      ref="dialog"
      v-model="modal"
      persistent
      lazy
      width="290px"
      style="display: inline-block;width:100%"
    >
      <v-text-field
        slot="activator"
        v-model="label1"
        label="点击选择"
        prepend-icon="mdi-store"
        readonly
      />
      <v-card>
        <material-route-bar :selected.sync="selectedLabel"/>
      </v-card>
      <v-card>
        <v-list subheader>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            ripple
            avatar
          >
            <v-list-tile-content @click="selectTitle(item.title)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
      <v-btn
        color="default"
        @click="modal = false">取消</v-btn>
      <v-btn
        color="primary"
        @click="ok">确定</v-btn>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: undefined
    },
    data: {
      type: Array,
      default: undefined
    },
    value: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    modal: false,
    value1: '',
    label1: '',
    items: [],
    selectedLabel: [],
    selectedValue: [],
    data1: []
  }),
  watch: {
    selectedLabel: {
      handler (newval) {
        this.items = this.getCurrent(this.data1, newval, 0)
      },
      deep: true
    },
    data: {
      handler (val) {
        this.initial(val)
      },
      deep: true
    }

  },
  mounted () {
  },
  methods: {
    ok () {
      this.modal = false
      this.setValue()
      this.label1 = this.selectedLabel.join('/')
      this.$emit('update:label', this.label1)
    },
    initial (data) {
      // console.log('-----------initial------------')
      if (data.length > 0) {
        // console.log(data)
        this.data1 = data
        if (this.label) { // 有初始值
          // console.log('---------值初始化------------')
          this.label1 = this.label
          var items = this.label1.split('/')
          items.forEach(item => {
            this.selectTitle(item)
          })
          this.setValue()
        } else {
          this.items = data
        }
      }
    },
    selectTitle (item) {
      // router 更新
      // console.log(department)
      this.selectedLabel.push(item)
    },
    setValue () {
      this.selectedValue = []
      this.setValueBySelectedLable(this.data1, this.selectedLabel, 0)
      // console.log(this.selectedValue)
      this.value1 = this.selectedValue.join(',')
      this.$emit('update:value', this.value1)
    },
    setValueBySelectedLable (data, selectedLabel, index) {
      var temp
      data.some(child => {
        if (child.title === selectedLabel[index]) {
          temp = child
          this.selectedValue.push(child.id)
          return true
        }
      })
      if (index === (selectedLabel.length - 1)) {
        return
      }
      if (temp.children.length > 0) {
        index++
        return this.setValueBySelectedLable(temp.children, selectedLabel, index)
      }
    },
    getCurrent (childDeparts, selectedLabel, index) {
      var destiDepart
      childDeparts.some(child => {
        if (child.title === selectedLabel[index]) {
          destiDepart = child
          return true
        }
      })
      if (index === (selectedLabel.length - 1)) {
        return destiDepart.children
      }
      if (destiDepart.children.length > 0) {
        index++
        return this.getCurrent(destiDepart.children, selectedLabel, index)
      } else {
        return []
      }
    }
  }
}
</script>
