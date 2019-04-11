<template>
    <div v-show="false" class="vamCallBox">
        <el-input type="textarea" :rows="4" placeholder="高手过招，招招笔芯 💗💗💗 " v-model="data.id"></el-input>
    </div>
</template>

<script>
export default {
    props:['id','data'],
    data() {
        return {
        }
    },
    created() {
        let id = this.data.id + '';
        
        console.log(document.getElementById(id))
    }
}
</script>

<style>

</style>
