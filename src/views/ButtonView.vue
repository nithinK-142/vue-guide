<script setup lang="ts">
import { Button } from '@/components/ui/button'

const handleClick = () => alert('you clicked the BUTTON!')
</script>

<template>
  <div class="pt-4">
    <Button @click="handleClick" variant="destructive">Button</Button>
  </div>
</template>
