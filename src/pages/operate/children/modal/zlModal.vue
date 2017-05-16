<template>
    <div class="page-content padding-top">
        <checkbox-range 
            :options="topics" 
            unit="g"
            v-model="chosenTopics" 
            theme="positive"></checkbox-range>
        <p class="padding">
            <!--chosen topics: {{ chosenTopics }}-->
        </p>
    </div>
</template>

<script>
import CheckboxRange from '../../../../components/checkoxRange/checkbox-range'
export default {
    data() {
        return {
            chosenTopics: [],
            topics: []
        }
    },
    components: {
        CheckboxRange
    }
}
</script>
