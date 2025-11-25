import './Hello.css';

export default function Hello({ username }) {
  let textColor = {
    backgroundColor: username === "vijay" ? "pink" : "orange"
  };

  return (
    <div className="Hello" style={textColor}>
      <h3>hello  {username}</h3>
    </div>
  );
}