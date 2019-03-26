<template>
    <div>
        <p>{{ name }}</p>
        <h1>
            {{ info.name }}
        </h1>
    </div>
</template>

<script>
import axios from 'axios';
import { returnStatement } from '@babel/types';
export default {
    data() {
        return {
            name: "hello World"
        }
    },
    // asyncData() {
    //     return axios.get('https://api.myjson.com/bins/tkeke')
    //     .then((res) => {
    //         return {info:res.data}
    //     })
    // },
    async asyncData() {
        let {data} = await axios.get('https://api.myjson.com/bins/tkeke');
        return {info: data}
    }
}
</script>
