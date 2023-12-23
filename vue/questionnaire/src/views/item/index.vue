<template>
    <div>
        <itemContainer parentComponent="item" />
    </div>
</template>

<script>
import itemContainer from '@/components/itemContainer.vue';
import { mapActions } from 'vuex';
export default {
    components: {
        itemContainer
    },
    created() { //生命周期函数，在页面加载的过程中自动会触发。
        this.getQuestionListAction()
    },
    methods: {
        ...mapActions(['getQuestionListAction'])
    }
}
</script>

<style lang="less" scoped></style>