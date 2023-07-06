<template>
    <div class="text-subtitle-1 font-weight-bold">
        {{ title }}: <span class="text-decoration-underline">{{ value }}</span>
    </div>
</template>

<script>

export default {
    name: 'HeaderLabel',
    props: {
        value: {
            type: [String, Number, Boolean],
            default: null,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
}
</script>
