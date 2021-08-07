<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
    header{
        background: url('../../assets/muscoot.jpeg'); /*Update URL to change Background Image */
        background-repeat: no-repeat;
        background-size: cover;
        height: 300px;
        opacity: 80%
    }
    h1{
        text-align: center;
        color: white;
        font-size: 3rem;
        font-family: 'Courier New', Courier, monospace;
        padding-top: 150px
    }

</style>