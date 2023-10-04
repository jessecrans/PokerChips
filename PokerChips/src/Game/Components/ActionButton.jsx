export default function ActionButton({ name, handleClick, disabled }) {
  return (
    <li>
      <button onClick={handleClick} disabled={disabled}>
        {name}
      </button>
    </li>
  )
}