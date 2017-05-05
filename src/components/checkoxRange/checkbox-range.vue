<template>
    <div class="list list-ios von-checkbox">
        <div class="item item-borderless item-icon-right" v-for="(option, i) in options" @click="onClick(option, i)">
            <div class="hairline-top" v-if="i > 0"></div>
    
            <input type="checkbox" :name="checkboxName" :id="checkboxName + '-' + i" v-model="v" :value="option.name">
            <span v-text="option.name"></span>
            <span class="item-note">{{ranges[i] || 0}} {{unit}}</span>
            <span class="range range-balanced" von-range="">
                <span>{{min}}</span>
            <input type="range" min="0" max="100" v-model="ranges[i]">
            <span>{{max}}</span>
            </span>
            <i :class="{
                          'icon ion-ios-checkmark-empty assertive': v.indexOf(option) > -1 && theme == 'assertive',
                          'icon ion-ios-checkmark-empty positive': v.indexOf(option) > -1 && theme == 'positive',
                          'icon ion-ios-checkmark-empty balanced': v.indexOf(option) > -1 && theme == 'balanced',
                          'icon ion-ios-checkmark-empty energized': v.indexOf(option) > -1 && theme == 'energized',
                          'icon ion-ios-checkmark-empty calm': v.indexOf(option) > -1 && theme == 'calm',
                          'icon ion-ios-checkmark-empty royal': v.indexOf(option) > -1 && theme == 'royal',
                          'icon ion-ios-checkmark-empty dark': v.indexOf(option) > -1 && theme == 'dark'
                        }">
                      </i>
    
            <div class="hairline-bottom" v-if="i < options.length - 1"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [Array, Number],
            required: true
        },
        theme: {
            type: String,
            default: 'assertive'
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        unit: {
            type: String,
            default: ''
        }
    },
    computed: {
        v: function () {
            return this.value
        }
    },
    data() {
        return {
            checkboxName: 'von-checkbox-' + Math.random().toString(36).substring(3, 6),
            rangeName: 'von-range-' + Math.random().toString(36).substring(3, 6),
            ranges: []
        }
    },
    methods: {
        onClick(option, i) {
            let index = this.v.indexOf(option)
            if (index == -1) {
                this.options[i].weight = this.ranges[i] || 0
                this.v.push(option)
            } else {
                this.v.splice(index, 1)
            }
            this.v.sort()
        },
        ranges(e) {
            console.log(e)
        }
    }
}
</script>

<style scoped>
.range[von-range] {
    float: right;
    width: 80%;
    height: 14px;
    line-height: 1;
}

.item-note {
    width: 36px;
}
</style>