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
                dynamicTags: ["刀", "铲子", "勺子", "剪刀"],
                buttonText: '+ 新增工具'
            }
        },
        components: {
            TaskTag
        }
    }
</script>
