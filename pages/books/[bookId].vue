<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/3">
        <img
          :src="book.image"
          :alt="book.title"
          class="w-full rounded-lg shadow-md"
        />
      </div>
      <div class="md:w-2/3 md:pl-8 mt-4 md:mt-0">
        <h1 class="text-3xl font-bold mb-2">{{ book.title }}</h1>
        <p class="text-gray-600 mb-4">著者: {{ book.author }}</p>
        <div class="mb-4">
          <p class="text-gray-600">ISBNコード: {{ book.isbn }}</p>
          <p class="text-gray-600">出版社: {{ book.publisher }}</p>
        </div>
        <p class="text-gray-800 leading-relaxed">{{ book.description }}</p>
      </div>
    </div>
    <HistoriesTable :histories="histories" />
  </div>
</template>

<script setup lang="ts">
import HistoriesTable from "@/components/books/detail/HistoriesTable.vue";
import type { HistoriesTableItem } from "~/components/books/detail/HistoriesTable.type";
const book = {
  id: 1,
  title: "サンプル書籍",
  author: "サンプル著者",
  isbn: "978-1-234-56789-0",
  publisher: "サンプル出版社",
  image: "https://via.placeholder.com/300x400",
  description:
    "これはサンプルの書籍詳細です。この書籍は、Tailwind CSSを使ってデザインされたページで表示されています。書籍の詳細情報には、タイトル、著者、ISBNコード、出版社、表紙画像、および説明文が含まれます。",
};

const histories: HistoriesTableItem[] = [
  {
    id: 1,
    bookNumber: 1,
    lendStatus: "貸出中",
    lendDate: "2021-10-01",
    returnDate: undefined,
  },
  {
    id: 2,
    bookNumber: 2,
    lendStatus: "返却済",
    lendDate: "2021-10-01",
    returnDate: "2021-10-15",
  },
  {
    id: 3,
    bookNumber: 3,
    lendStatus: "貸出中",
    lendDate: "2021-10-01",
    returnDate: undefined,
  },
  {
    id: 4,
    bookNumber: 1,
    lendStatus: "返却済",
    lendDate: "2021-09-05",
    returnDate: "2021-09-22",
  },
  {
    id: 5,
    bookNumber: 2,
    lendStatus: "返却済",
    lendDate: "2021-09-05",
    returnDate: "2021-09-22",
  },
];
</script>
