<script>
  // // @ts-nocheck
    import { firebaseConfig } from '../lib/firebase.js';
    import { initializeApp } from 'firebase/app';
    // import {
    //   getFirestore, collection, onSnapshot,
    //   doc, query, orderBy, getDoc, updateDoc
    // } from 'firebase/firestore'

    // //variables
    // let todos = [];
    // let prevIsComplete;
  
    // // init firebase app
    // initializeApp(firebaseConfig);
    // const db = getFirestore();
    // const colRef = collection(db, 'todos');
    // const q = query(colRef, orderBy('createdAt')); 
  
    // // store realtime data into todos
    // onSnapshot(q, (snapshot) => { 
    //   let todoList = [];
    //   snapshot.docs.forEach((doc) => {
    //     todoList.push({ ...doc.data(), id: doc.id })
    //   })
    //   todos = todoList;

    //   console.log(todos);
    // })
  
    // const markComplete = (id) => {
    //   const docRef = doc(db, 'todos', id);
    //   getDoc(docRef)
    //     .then((doc) => {
    //       updateDoc(docRef, {
    //       isComplete: !doc.data().isComplete,
    //       })
    //       console.log(prevIsComplete);
    //     })
  
    // }
  
  </script>
  
  <main class="text-white my-[49px] mx-[35px]">
  
    <!-- <section class="flex justify-between items-center font-bold mb-10">
      <div>
        <h1 class="text-[50px]">To-do</h1>
        <h2 class="text-[30px]">Due @ 9:00 PM</h2>
      </div>
      <div class="text-[50px]">$5</div>
    </section>
  
    <ol>
      {#each todos as { task, desc, isComplete, id }, index}
        <li>
          <div class="flex items-center mt-5 mb-2" on:click={() => markComplete(id)}>
            <div class="circle" class:filled-circle={isComplete} />
  
            <h2 class="text-[30px] font-bold mt-2" class:strikethrough={isComplete}>
              {task}
            </h2>
          </div>
          <p class="mb-16" class:strikethrough={isComplete}>
            {desc}
          </p>
          {#if index != 2}
            <hr/>
          {/if}
        </li>
      {:else}
        <p>No todos found</p>
      {/each}
    </ol> -->
  
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
  
    .filled-circle {
      border: none;    
      background-color: white;
  
    }
  
    .strikethrough {
      text-decoration: line-through;
    }
  
    hr {
      border: 2px solid white;
      border-radius: 50px;
    }
  </style>