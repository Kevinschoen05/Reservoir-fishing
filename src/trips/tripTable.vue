<template>
    <table>
        <td>
            <trips-item></trips-item>
        </td>
    </table>
</template>
<script>
import TripsItem from '../trips/TripsItem.vue'
export default {
    components: {TripsItem },
    props: ['trips']
}
</script>