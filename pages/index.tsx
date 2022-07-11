import type { NextPage } from "next";
import Head from "next/head";

const tableHead = ["#", "Name", "Age", "Nickname", "Action"];
const testData = [
  {
    name: "test1",
    age: 12,
    nickname: "test1",
  },
  {
    name: "test2",
    age: 123,
    nickname: "test2",
  },
  {
    name: "test3",
    age: 124,
    nickname: "test3",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GG - Zanroo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold">Users</h1>

      <div className="border p-10 m-2">
        <input type="text" className="border p-1" placeholder="Name"></input>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-gray-800 text-white">
                  <tr>
                    {tableHead.map((ele) => (
                      <th
                        key={ele}
                        scope="col"
                        className="text-sm font-medium px-6 py-4 text-left"
                      >
                        {ele}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {testData.map((data, i) => (
                    <tr key={i} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.age}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data.nickname}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="bg-yellow-500">Edit</button>
                        <button className="bg-red-500">Delete</button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
