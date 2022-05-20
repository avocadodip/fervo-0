<script>
  import { todos } from './todos';
  import Footer from '../components/Footer.svelte'

  const markComplete = () => {

  }
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

  <section class="flex justify-between items-center font-bold mb-10">
    <div class="">
      <h1 class="text-[50px]">To-do</h1>
      <h2 class="text-[30px]">Due @ 9:00 PM</h2>
    </div>
    <div class="text-[50px]">$5</div>
  </section>

  <ol>
    {#each $todos as todo (todo.id)}
      <li>
        <div class="flex items-center mt-5 mb-2">
          <div class="circle"/>
          <h2 class="text-[30px] font-bold mt-2" class:complete={todo.isComplete}>
            {todo.task}
          </h2>
        </div>
        <p class="mb-16">
          {todo.desc}
        </p>
        {#if todo.id != 3}
          <hr/>
        {/if}
      </li>
    {:else}
      <p>No todos found</p>
    {/each}
  </ol>

  <Footer />

</main>

<style>
  .circle {
    border: 3px solid white;    
    background-color: rgba(255, 255, 255, 0);
    height: 30px;
    width: 30px;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 15px;
  }

  hr {
    border-top: 5px solid white;
    border-radius: 20px;
  }
</style>