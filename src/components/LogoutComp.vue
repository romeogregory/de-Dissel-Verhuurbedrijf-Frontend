<template>
    <div></div>
</template>


<script>
export default {
    name: 'LogoutComp',

    created() {
        this.$store.dispatch('destroyToken')
            .then(response => {
                this.$router.push({ path: '/' });
                console.warn(response);
            });
    }
}
</script>