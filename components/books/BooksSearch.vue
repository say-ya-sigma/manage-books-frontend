<template>
  <div class="mb-4">
    <div class="flex">
      <BooksSearchInput
        id="title"
        v-model="titleQuery"
        label="タイトル"
        placeholder="タイトルで検索"
      />
      <button
        @click="searchTitle"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 ml-6 py-2 px-4 rounded"
      >
        検索
      </button>
    </div>

    <div class="flex">
      <BooksSearchInput
        id="author"
        v-model="authorQuery"
        label="著者"
        placeholder="著者で検索"
      />
      <button
        @click="searchAuthor"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 ml-6 py-2 px-4 rounded"
      >
        検索
      </button>
    </div>

    <div class="flex">
      <BooksSearchInput
        id="isbn"
        v-model="isbnQuery"
        label="ISBN"
        placeholder="ISBNで検索"
      />
      <button
        @click="searchIsbn"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 ml-6 py-2 px-4 rounded"
      >
        検索
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BooksSearchInput from "./BooksSearchInput.vue";

const titleQuery = ref("");
const authorQuery = ref("");
const isbnQuery = ref("");

const emit = defineEmits(["searchTitle", "searchAuthor", "searchIsbn"]);

const searchTitle = () => {
  emit("searchTitle", {
    title: titleQuery.value,
  });
};

const searchAuthor = () => {
  emit("searchAuthor", {
    author: authorQuery.value,
  });
};

const searchIsbn = () => {
  emit("searchIsbn", {
    isbn: isbnQuery.value,
  });
};
</script>
