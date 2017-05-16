<template>
    <div class="list list-ios von-checkbox">
        <div class="item item-borderless item-icon-right" v-for="(option, i) in options" @click="onClick(option, i)">
            <div class="hairline-top" v-if="i > 0"></div>
    
            <input type="checkbox" :name="checkboxName" :id="checkboxName + '-' + i" v-model="v" :value="option.p_name">
            <span v-text="option.p_name"></span>
            <span v-if="option.p_type !== '工具'" class="item-note">{{option.commit_shuliang}} {{unit}}</span>
            <span v-if="option.p_type !== '工具'" class="range range-balanced" von-range="">
                <span>{{0}}</span>
            <input type="range" min="0" :max="option.max" v-model="option.commit_shuliang">
            <span>{{option.max}}</span>
            </span>
            <i :class="['icon',
                          v.indexOf(option) > -1 || (option.ischeck == 'True') ? 'ion-ios-checkmark-outline ' : 'ion-ios-circle-outline',
                          theme == 'assertive' ? 'assertive' : '',
                          theme == 'positive' ? 'positive' : '',
                          theme == 'balanced' ? 'balanced' : '',
                          theme == 'energized' ? 'energized' : '',
                          theme == 'calm' ? 'calm' : '',
                          theme == 'royal' ? 'royal' : '',
                          theme == 'dark' ? 'dark' : ''
                        ]">
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
            rangeName: 'von-range-' + Math.random().toString(36).substring(3, 6)
        }
    },
    methods: {
        onClick(option, i) {
            let index = this.v.indexOf(option)
            if (index == -1) {
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
.von-checkbox .item-icon-right .icon {
    font-size: 28px;
}
.item-note {
    width: 36px;
}
</style>