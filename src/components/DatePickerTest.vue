<script>
    export default {
        name: 'DatePickerTest',
        data () {
            return {
                msg: 'hello world about iview'
            }
        },
    }
</script>

<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <Tooltip content="这里是提示文字">
            当鼠标经过这段文字时，会显示一个气泡框
        </Tooltip>

        <template>
            <Row>
                <Col span="12">
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                </Col>
                <Col span="12">
                    <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                </Col>
            </Row>
        </template>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
