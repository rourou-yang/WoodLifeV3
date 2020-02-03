<template>
  <div>
    <Header></Header>
    <Alert></Alert>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Alert from '@/components/AlertMessage'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Alert,
    Footer
  }
}
</script>
