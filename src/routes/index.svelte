<script>
  let todos = [];
</script>

<svelte:head>
  <title>
    Fervo
  </title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap');
  </style>
</svelte:head>

<main class="text-white my-[49px] mx-[35px]">

  <section class="flex justify-between items-center font-bold">
    <div class="">
      <h1 class="text-[50px]">To-do</h1>
      <h2 class="text-[30px]">Due @ 9:00 PM</h2>
    </div>
    <div class="text-[50px]">$5</div>
  </section>

  <ol>
    {#each todos as todo}
      <li>
        <span class:complete={todo.isComplete}>
          {todo.task}
        </span>
        <span>
          <button on:click={() => markComplete(todo)}>✓</button>
          <button on:click={() => deleteTodo(todo.id)}>✗</button>
        </span>
      </li>
    {:else}
      <p>No todos found</p>
    {/each}
  </ol>

  <footer>

  </footer>

</main>
