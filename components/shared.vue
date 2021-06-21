<template>
<div class="shared--container bg-silver border-1">
  <ShareNetwork
  v-for="network in networks"
  :network="network.network"
  :key="network.network"
  :url="idUrl"
  :title="title"
  :quote="idQuote"
  :hashtags="idHashtags"
  >
  <ul class="shared--ul">
  <li class="shared--icon">  <img lazy="loading" class="shared-icon" :src="network.icon" alt="cover"> </li>
  </ul>
  </ShareNetwork>

</div>
</template>

<script>
export default {

  name:'socialsharing',

  props:{
    idUrl:{
      type:String,
    },
    title:{
      type:String,
    },
    idQuote:{
      type:String,
    },
    idHashtags:{
      type:String,
    },
     //twitterUser
  },

   data () {
    return {
    
      networks: [
        { network: 'whatsapp', name: 'Whatsapp', icon: 'https://firebasestorage.googleapis.com/v0/b/pcbuilder-64caa.appspot.com/o/icons%2Fwhatsapp_287520.png?alt=media&token=9132dfaf-86d4-4bf7-a647-4e583b1ebe18' },
        { network: 'facebook', name: 'Facebook', icon: 'https://firebasestorage.googleapis.com/v0/b/pcbuilder-64caa.appspot.com/o/icons%2Ffacebook_circle_294710.png?alt=media&token=b5d8e6b9-633a-4b3b-9a4a-a0949b6d6f86'},
        { network: 'twitter', name: 'Twitter', icon: 'https://firebasestorage.googleapis.com/v0/b/pcbuilder-64caa.appspot.com/o/icons%2Ftwitter_834708.png?alt=media&token=b8ac333e-78fb-4f66-93bc-03add0ebafba' },
        { network: 'reddit', name: 'Reddit', icon: 'https://firebasestorage.googleapis.com/v0/b/pcbuilder-64caa.appspot.com/o/icons%2Freddit_2308126.png?alt=media&token=e42bdb30-909f-4833-b693-d1be45adf7b9' },
        { network: 'telegram', name: 'Telegram', icon: 'https://firebasestorage.googleapis.com/v0/b/pcbuilder-64caa.appspot.com/o/icons%2Ftelegram_3246742.png?alt=media&token=96383628-4cb9-4b32-874a-cd5a6a3b2f94' },
        { network: 'wordpress', name: 'Wordpress', icon: 'https://firebasestorage.googleapis.com/v0/b/pcbuilder-64caa.appspot.com/o/icons%2FWordPress_381386.png?alt=media&token=f991aeba-42ed-4b9e-a1d6-92f0c115f286' },

      ]
    }
  }

}
</script>