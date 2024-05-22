function FilterButton(props){
    return (
      <button type="button" className="btn toggle-btn w-1/3 m-2" aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    )
}

export default FilterButton