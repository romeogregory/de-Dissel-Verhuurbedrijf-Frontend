<template>
    <div></div>
</template>


<script>
export default {
    name: 'LogoutComp',

    created() {
        this.$store.dispatch('destroyToken')
            .then(response => {
                // this.$router.push({ name: '/home' });
                window.location.replace("http://localhost:8080/");
                console.warn(response);
            });
    }
}
</script>