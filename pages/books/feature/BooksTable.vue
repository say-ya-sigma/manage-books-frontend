<template>
  <table class="table-auto w-full mt-4">
    <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2 text-left">タイトル</th>
        <th class="px-4 py-2 text-left">著者</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.id" class="border-b">
        <td class="px-4 py-2">{{ book.title }}</td>
        <td class="px-4 py-2">{{ book.author }}</td>
        <td class="px-4 py-2 text-right">
          <nuxt-link
            :to="`/books/${book.id}`"
            class="text-blue-600 hover:text-blue-800"
            >詳細を見る</nuxt-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { BooksTableProps } from "./BooksTable.type";
defineProps<BooksTableProps>();
</script>
