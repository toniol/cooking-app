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
                dynamicTags: ["盐", "酱油", "醋", "胡椒粉", "咖喱", "辣椒"],
                buttonText: '+ 新增调味料'
            }
        },
        components: {
            TaskTag
        }
    }
</script>
