import useSWR from "swr";
import axios from "axios";

export function SenateTable() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://senator.research.akhilv.me/api/request",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="max-w-max text-sm max-h-96 overflow-y-auto border-2 border-[#D1C9BC] rounded-lg">
      <table className="border-collapse table-auto m-0 drop-shadow-lg">
        <thead className="top-0 sticky bg-[#D1C9BC]">
          <tr className="max-h-15">
            {Object.keys(data[0]).map((heading) => {
              return <th className="bg-[#D1C9BC] text-neutral-700 text-left tracking-wider px-3 py-1 uppercase" key={heading}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {Object.keys(data[0]).map((key, index) => {
                  return <td className="text-white-200 text-left tracking-wider px-3 py-1" key={row[key]}>{row[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>  
    </div>
  );
}
