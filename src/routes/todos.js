import {writable} from 'svelte/store';

export const todos = writable([
  {
    id: 1,
    task: 'Finish Article',
    desc: 'Become the Snowden of USC',
    isComplete: true,
  },
  {
    id: 2,
    task: 'Complete Job Application',
    desc: 'Cage match with Tim Cook',
    isComplete: false,
  },
  {
    id: 3,
    task: 'Release the uPhone',
    desc: 'Like the iPhone but less self indulgent',
    isComplete: false,
  },
]);
