<template>
  <CFooter :fixed="false">
    <div>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} </span>
      <a href="#" target="_blank">Team Building Theme</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
