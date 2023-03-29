<template lang="">
  <div>
    <Head>
      <Title>portfolio</Title>
      <Meta name="discription" content="frontend" />
      <Link rel="shortcut icon" href="/path/to/favicon.ico" />
    </Head>
    <header>
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/work">work</NuxtLink>
    </header>
    <slot />
    <footer></footer>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>