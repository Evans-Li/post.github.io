<template>
    <div>
      <router-link to="/">联系我们</router-link>
{{msg}}
    </div>
</template>

<script>
    export default {
        name: "rightNav",
        data(){
          return{
            msg: "I am rightNav"
          }
        }
    }
</script>

<style scoped>

</style>
