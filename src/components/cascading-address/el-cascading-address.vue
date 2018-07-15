<template>
  <div class="main">
    <input v-model="model" type="text" @click="open" class="input-sm">
    <div class="cascading-address" v-show="isShow" v-clickoutside="handleClickoutside">
        <ul>
          <li v-for="(item, index) in provinces" :key="index" @click="setProvince(index)" :class="{'label': true, 'label-success': currentProvinceIndex===index}">
            <p>{{item.p}}</p>
          </li>
        </ul>
        <ul v-show="cities.length > 0">
          <li v-for="(city, index) in cities" :key="index" @click="setCity(index)" :class="{'label': true, 'label-success': currentCityIndex===index}">
            <p>{{city.n}}</p>
          </li>
        </ul>
        <ul v-show="counties.length > 0">
          <li v-for="(county, index) in counties" :key="index" @click="setCounty(index)" :class="{'label': true, 'label-success': currentCountyIndex===index}">
            <p>{{county.s}}</p>
          </li>
        </ul>
        <p>地址：{{province}} {{city}} {{county}}</p>
        <div class="btns">
          <button @click="reset">重置</button>
          <button @click="conform" class="success" :disabled="!(province&&city) && province!='国外'">确认</button>
        </div>
      </div>
  </div>
</template>
<script>
import addressData from './data'
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'el-cascading-address',
  data () {
    return {
      provinces: addressData,
      cities: '',
      counties: '',
      province: '', // 选择的省
      city: '', // 选择的市
      county: '', // 选择的区
      model: '',
      isShow: false,
      currentProvinceIndex: '',
      currentCityIndex: '',
      currentCountyIndex: ''
    }
  },
  created () {
  },
  directives: {
    clickoutside
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      // this.isShow = false
    },
    setProvince (index) {
      this.currentProvinceIndex = index
      if (this.provinces[index].c) {
        this.cities = this.provinces[index].c
      } else {
        this.cities = ''
      }
      this.province = this.provinces[index].p
    },
    setCity (index) {
      this.currentCityIndex = index
      if (this.cities[index].a) {
        this.counties = this.cities[index].a
      } else {
        this.counties = ''
      }
      this.city = this.cities[index].n
      console.log(this.counties)
    },
    setCounty (index) {
      this.currentCountyIndex = index
      if (this.counties[index].s) {
        this.county = this.counties[index].s
      }
    },
    reset () {
      this.currentProvinceIndex = ''
      this.currentCityIndex = ''
      this.currentCountyIndex = ''
      this.cities = ''
      this.counties = ''
      this.province = ''
      this.city = ''
      this.county = ''
    },
    conform () {
      this.$emit('conform', {
        province: this.province,
        city: this.city,
        county: this.county
      })
    },
    handleClickoutside () {
      console.log(111)
      this.isShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .main {
    .input-sm {
      margin-top: 1em;
      border: 1px solid #ccc;
      padding: 7px 0px;
      border-radius: 3px;
      padding-left:5px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      &:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
      }
    }
    .cascading-address {
      box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
      /*position: absolute;*/
      /*z-index: 9999;*/
      background: #fff;
      width: 388px;
      margin: 0 auto;
      overflow: hidden;
      ul {
        padding: 5px;
        border-bottom: 1px dotted #ddd;
        text-align: center;
        overflow: hidden;
        li {
          font-size: 13px;
          list-style: none;
          float: left;
          margin: 1px 3px;
          cursor: pointer;
          width: 4em;
          padding: .1em .2rem;
          display: block;
          p {
            width: 100%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
          }
          &.label {
            font-size: 75%;
            font-weight: bold;
            line-height: 1;
            color: #aaa;
            text-align: left;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: .25em;
          }
          &.label-success {
            background-color: #5cb85c;
            color: #fff;
          }
        }
      }
      .btns {
        float: right;
        margin: 0 1em 1em 0;
        button{
          display: inline-block;
          padding: 6px 12px;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: normal;
          line-height: 1.42857143;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          -ms-touch-action: manipulation;
          touch-action: manipulation;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          background-image: none;
          border: 1px solid transparent;
          border-radius: 4px;
          /*&.hover {*/
            /*color: #337ab7;*/
          /*}*/
          &.success {
            color: #fff;
            background-color: #5cb85c;
            border-color: #4cae4c;
          }
        }
      }
    }
  }
</style>
