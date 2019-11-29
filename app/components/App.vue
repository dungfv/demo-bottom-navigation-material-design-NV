<template>
    <Page>
        <ActionBar title="Home" />
        <GridLayout rows="*">
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Settings"></Label>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Search"></Label>
                    </TabStripItem>
                </TabStrip>
                <TabContentItem>
                    <GridLayout rows="*, auto">
                        <Label row="0" text=" Home Page" class="h2 text-center" />
                        <Button row="1" text="detail" class="btn btn-primary" @tap="detail()" />
                    </GridLayout>
                </TabContentItem>
                <TabContentItem>
                    <GridLayout>
                        <Label text="Settings Page" class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>
                <TabContentItem>
                    <GridLayout>
                        <Label text="Search Page" class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>
            </BottomNavigation>
            <Label text="ok" v-if="elly" />
        </GridLayout>
    </Page>
</template>

<script>
    import Detail from "./Detail";

    export default {
        data() {
            return {
                elly: false
            };
        },
        methods: {
            detail() {
                // this.$showBottomSheet(Detail, {
                //     props: {},
                //     context: {},
                //     closeCallback: () => {}
                // });
                this.$navigateTo(Detail);
            }
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>