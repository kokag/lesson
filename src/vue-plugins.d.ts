import { Vue } from 'vue/types/vue'

declare module 'vue/types/vue' {


  interface Vue {
    $style: { [key: string]: string }

    mounted (): void | Promise<void>

    created (): void | Promise<void>

    beforeDestroy (): void | Promise<void>
  }
}
