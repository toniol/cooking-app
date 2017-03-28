<template>
    <div class="page-content padding padding-top">
        <task-tag :dynamicTags="dynamicTags" :buttonText="buttonText"></task-tag>
    </div>
</template>

<script>
    import TaskTag from '../../../../components/taskTag/taskTag'

    export default {
        data() {
            return {
                dynamicTags: ["土豆", "鸡块", "青椒", "红椒", "洋葱"],
                buttonText: '+ 新增原材料'
            }
        },
        components: {
            TaskTag
        }
    }
</script>
