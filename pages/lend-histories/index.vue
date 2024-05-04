<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold">貸出履歴一覧</h1>
    <HistoriesTable :histories="histories" />
  </div>
</template>

<script setup>
import HistoriesTable from "@/components/lendHistories/HistoriesTable.vue";
const histories = [
  {
    id: 1,
    title: "書籍1",
    lendStatus: "貸出中",
    lendDate: "2021-10-19",
    expectedReturnDate: "2021-11-18",
  },
  {
    id: 2,
    title: "書籍2",
    lendStatus: "貸出中",
    lendDate: "2021-10-19",
    expectedReturnDate: "2021-11-18",
  },
  {
    id: 3,
    title: "書籍3",
    lendStatus: "貸出中",
    lendDate: "2021-10-19",
    expectedReturnDate: "2021-11-18",
  },
  {
    id: 4,
    title: "書籍4",
    lendStatus: "貸出中",
    lendDate: "2021-10-19",
    expectedReturnDate: "2021-11-18",
  },
  {
    id: 5,
    title: "書籍5",
    lendStatus: "貸出中",
    lendDate: "2021-10-19",
    expectedReturnDate: "2021-11-18",
  },
  {
    id: 6,
    title: "書籍6",
    lendStatus: "貸出中",
    lendDate: "2021-10-19",
    expectedReturnDate: "2021-11-18",
  },
];
</script>
