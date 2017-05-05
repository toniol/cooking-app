<template>
    <div class="page-content padding-top">
        <von-checkbox :options="topics" v-model="chosenTopics" theme="positive"></von-checkbox>
        <p>{{ chosenTopics }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chosenTopics: [],
                topics: ["温度1", "温度2", "温度3", "温度4", "温度5"],
            }
        }
    }
</script>
