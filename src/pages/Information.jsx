import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Information() {
  const [change, setChange] = useState();
  const params = useParams();
  const value = params.info;
  console.log(value);
  async function calling() {
    const res = await fetch("https://fakestoreapi.com/products/" + value);
    const d = await res.json();
    console.log(d);
    setChange(d);
  }

  useEffect(() => {
    calling();
  }, []);
  return (
    <div className="w-ful">
      <div className="max-w-6xl mx-auto justify-center items-center">
        <div>
          <img src={change.image} alt="" className="w-[300px] h-[300px]" />
          <h3>Name: {change.title}</h3>
          <h2 className="text-2xl"> Price:{change.price}</h2>
          <div className="flex gap-3">
            <h3>Rate:{change.rating.rate}</h3>
            <h3>Count:{change.rating.count}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
