import React, { useState } from "react";
import Link from "next/link";
function Index() {
  const [user, setuser] = useState([
    { name: "zia", age: "20" },
    { name: "abdullah", age: "22" },
    { name: "haider", age: "21" },
  ]);
  return (
    <>
      <div>Users</div>
      {user.map((v, i) => {
        return (
          <div className="bg-green-500 border-4" key={i}>
            <Link className="bg-amber-500" href={`/${v.age}`}>
              {v.name}
            </Link>{" "}
            <h1>names </h1>
            <h2>agen {v.age}</h2>
          </div>
        );
      })}
    </>
  );
}

export default Index;
