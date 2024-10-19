import "./style.scss";
import Component from "./Component";

function Page() {
  return (
    <div>
      <h1>Example Page
        <button className="button">bello</button>
      </h1>
      <h2>BELLO</h2>
      <p>
        BELLO!
      </p>
      <Component label="Label 1" />
      <Component label="Label 2" />
      <Component label="Label 3" />
      <input type="date"/>
      <button className="button1">click me 
        <div>poo</div>
      </button>
      <div>
        {/* function Page(){
          const [searchText, setSearchText] = useState("default");

          const helloWorld = () => {
            setSearchText
          }
````````}
        <input>type="text" placeholder="search.."</input>
        <button onClick={helloWord}>Search</button> */}
      </div>
    </div>
  );
}

export default Page;
