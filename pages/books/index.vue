<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-end">
      <BooksSearch
        @searchTitle="onSearchTitle"
        @searchAuthor="onSearchAuthor"
        @searchIsbn="onSearchIsbn"
      />
    </div>
    <h1 class="text-2xl font-bold">書籍一覧</h1>
    <BooksTable :books="books" />
  </div>
</template>

<script setup>
import BooksSearch from "@/components/books/BooksSearch.vue";
import BooksTable from "@/components/books/BooksTable.vue";
const books = [
  { id: 1, title: "書籍1", author: "著者1" },
  { id: 2, title: "書籍2", author: "著者2" },
  { id: 3, title: "書籍3", author: "著者3" },
  { id: 4, title: "書籍4", author: "著者4" },
  { id: 5, title: "書籍5", author: "著者5" },
  { id: 6, title: "書籍6", author: "著者6" },
];

const onSearchTitle = (query) => {
  console.log(query);
};
const onSearchAuthor = (query) => {
  console.log(query);
};
const onSearchIsbn = (query) => {
  console.log(query);
};
</script>
