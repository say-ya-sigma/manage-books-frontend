<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="bg-gray-200 drop-shadow">
      <div class="px-4 py-2 md:px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-green-900">書籍管理システム</h1>
        <div class="relative">
          <img
            class="h-10 w-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
      </div>
    </header>

    <div class="flex flex-1">
      <!-- Left Sidebar -->
      <div class="w-48 md:w-64 bg-gray-800 text-gray-100">
        <!-- Global Navigation -->
        <nav class="mt-8 ml-4">
          <ul>
            <li class="py-2 px-4 hover:bg-green-400 hover:text-gray-900">
              <nuxt-link to="/" class="block">ホーム</nuxt-link>
            </li>
            <li class="py-2 px-4 hover:bg-green-400 hover:text-gray-900">
              <nuxt-link to="/books" class="block">書籍一覧</nuxt-link>
            </li>
            <li class="py-2 px-4 hover:bg-green-400 hover:text-gray-900">
              <nuxt-link to="/authors" class="block">著者一覧</nuxt-link>
            </li>
            <li class="py-2 px-4 hover:bg-green-400 hover:text-gray-900">
              <nuxt-link to="/categories" class="block">カテゴリ一覧</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto bg-gray-100">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
