<template>
  <table class="table-auto w-full mt-4">
    <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2 text-left">本番号</th>
        <th class="px-4 py-2 text-left">貸出状態</th>
        <th class="px-4 py-2 text-left">貸出日</th>
        <th class="px-4 py-2 text-left">返却日</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="history in histories" :key="history.id" class="border-b">
        <td class="px-4 py-2">{{ history.bookNumber }}</td>
        <td class="px-4 py-2">{{ history.lendStatus }}</td>
        <td class="px-4 py-2">{{ history.lendDate }}</td>
        <td class="px-4 py-2">{{ history.returnDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { HistoriesTableProps } from "./HistoriesTable.type";
defineProps<HistoriesTableProps>();
</script>
