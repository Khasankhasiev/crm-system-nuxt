<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
   <slot> </slot>
  </Primitive>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { AsTag } from 'radix-vue';
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  asChild?: boolean;
  as?: AsTag | Component;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>