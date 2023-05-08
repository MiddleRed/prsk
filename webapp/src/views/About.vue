<template>
  <SectionContainer title="关于本站">
    <p>本站主要收集Project Sekai日服的推特协力房间，基于"BanG Dream! Girls Band Party!房间号收集平台"修改</p>
    <p>此网站仅为理论测试临时搭建，日后将会开发独立网站。</p>
    <b>仓库链接：</b>
    <li>
      <a
        href="https://github.com/MiddleRed/prsk"
        target="_blank"
      >GitHub</a>
    </li>
    <p>
      <b>加入prsk-station QQ频道：</b><br>
      点击链接加入QQ频道【prsk-station】：https://pd.qq.com/s/f3dw8xlvi<br>
      频道号：9p4iqby82h
    </p>
  </SectionContainer>
</template>

<script>
import SectionContainer from '@/components/common/SectionContainer'
import { getOnlineNumber } from '@/network/common'

export default {
  name: 'About',
  components: {
    SectionContainer
  },
  data () {
    return {
      onlineNumber: 0
    }
  },
  created () {
    this.$store.commit('navbar/setMenuDisplay', true)
    getOnlineNumber().then(response => {
      this.$globalFunctions.handleAPIResponse(
        response,
        responseData => {
          this.onlineNumber = responseData.online_number
        }
      )
    }).catch(
      error => {
        this.$globalFunctions.notify({ content: '请求失败' })
        console.log(error)
      }
    )
  }
}
</script>
