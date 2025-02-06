import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Tooltip, Card } from "antd";

function Home() {
  const [state, setState] = useState([]);
  async function handle() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setState(data);
  }
  useEffect(() => {
    handle();
  }, []);
  return (
    <div className="w-full bg-amber-50">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <ul className="lg:grid lg:grid-cols-3 justify-center items-center gap-20 p-10">
          {state.map((item) => (
            <li
              key={item.id}
              className=" p-2 flex flex-col justify-centers w-[300px] h-[400px] gap-2"
            >
              <Card>
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt="image"
                    className="w-[200px] h-[200px]"
                  />
                </div>
                <h3 className="h-[80px]">{item.title}</h3>
                <h2 className="text-xl h-[40px]">Price:Rs{item.price}</h2>
                <div className="flex gap-3">
                  <h3>count:{item.rating.count}</h3>
                  <h3>rate:{item.rating.rate}</h3>
                </div>
                <NavLink to={"/" + item.id}>
                  <Tooltip title="go to the inner page">
                    <Button type="primary" size="small" style={{}}>
                      Readmore....
                    </Button>
                  </Tooltip>
                </NavLink>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
