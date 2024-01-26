<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { ref } from 'vue'

const accord = ref([
  {
    trigger: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    trigger: 'Is it unstyled?',
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel."
  },
  {
    trigger: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.'
  }
])
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem v-for="(item, index) in accord" :key="index" :value="'item-' + index">
      <AccordionTrigger>{{ item.trigger }}</AccordionTrigger>
      <AccordionContent>{{ item.content }}</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

<style scoped>
div {
  width: 24rem;
}
</style>
