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
                topics: ["调味料1", "调味料2", "调味料3", "调味料4", "调味料5"],
            }
        }
    }
</script>
