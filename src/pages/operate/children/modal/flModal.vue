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
                topics: ["辅料1", "辅料2", "辅料3", "辅料4", "辅料5"],
            }
        }
    }
</script>
