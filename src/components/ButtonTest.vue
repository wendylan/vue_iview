<script>
	export default{

	}
</script>
<template>
    <div>
    	<h3>常规样式</h3>
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
		<h3>按钮图标</h3>
		<template>
			<Button type="primary" shape="circle" icon="ios-search"></Button>
		    <Button type="primary" icon="ios-search">Search</Button>
		    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
		    <Button type="primary" shape="circle">Circle</Button>
		    <br><br>
		    <Button type="ghost" shape="circle" icon="ios-search"></Button>
		    <Button type="ghost" icon="ios-search">Search</Button>
		    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
		    <Button type="ghost" shape="circle">Circle</Button>
		</template>
    </div>
</template>
<style></style>