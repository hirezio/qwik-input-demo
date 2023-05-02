import { component$, useSignal } from '@builder.io/qwik';

export const InputDemo = component$(() => {

  const userInputSignal = useSignal('');

  return <div style="margin-top: 2rem">
    
    <input type="text" bind:value={userInputSignal} style="padding: 1rem"/>
    <p>{ userInputSignal }</p>
  </div>

});