import m from 'mithril'

function Counter (){
  let count = 0

  const increment = () => {
    count += 1
  }

  return {
    view: () => (
      <button type='button' onclick={increment}>
        Counter {count}
      </button>
    )
  }
}

export { Counter }
