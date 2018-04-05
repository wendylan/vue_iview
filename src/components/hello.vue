<script>
    export default {
        name: 'hello',
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
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </template>

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
