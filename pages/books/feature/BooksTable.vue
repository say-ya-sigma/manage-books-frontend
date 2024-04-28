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

<script setup>
const books = [
  { id: 1, title: "書籍1", author: "著者1" },
  { id: 2, title: "書籍2", author: "著者2" },
  { id: 3, title: "書籍3", author: "著者3" },
  { id: 4, title: "書籍4", author: "著者4" },
  { id: 5, title: "書籍5", author: "著者5" },
  { id: 6, title: "書籍6", author: "著者6" },
];
</script>
