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
      <b>加入PJSK 日服QQ群：</b><br>
      <a
        href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=2T8Mx59-jp2aREXyXWEeA_pNJae7CjiL&authKey=3EXJ7kWjbYH3g8GWoeZXQkGHYGMweLVmExn%2FMETYXOpfc%2Fe2piQO8m1Eh0VEnVRK&noverify=0&group_code=786208134"
        target="_blank"
      >群号：786208134</a><br>
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
  }
}
</script>
