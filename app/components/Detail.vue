<template>
    <Page>
        <ActionBar title="Detail">
            <NavigationButton android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <Label text="hello world!" />
    </Page>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style>
</style>