export default function Letter({ value, isShown }) {
  let output = undefined;
  if(isShown) {
    output = value;
  }
  return <span className="letter">{ output }</span>
}