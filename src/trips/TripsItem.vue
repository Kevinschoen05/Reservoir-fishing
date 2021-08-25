<template>
    <base-card>
    <h1>{{tripDate}}</h1>
    <slot></slot>
    </base-card>
</template>

<script>
export default {
    props:['tripDate' , 'tripReservoir', 'recordsList' ]
    
}
</script>