<template>
    <div class="page-content padding-top">
        <checkbox-range 
            :options="topics" 
            :min="0"
            :max="100"
            unit="g"
            v-model="chosenTopics" 
            theme="positive"></checkbox-range>
        <p class="padding">
            chosen topics: {{ chosenTopics }}
        </p>
    </div>
</template>

<script>
import CheckboxRange from '../../../../components/checkoxRange/checkbox-range'
export default {
    data() {
        return {
            chosenTopics: [],
            topics: [{
                name: "主料1",
                weight: 0
            }, {
                name: "主料2",
                weight: 0
            }, {
                name: "主料3",
                weight: 0
            }, {
                name: "主料4",
                weight: 0
            }, {
                name: "主料5",
                weight: 0
            }]
        }
    },
    components: {
        CheckboxRange
    }
}
</script>
