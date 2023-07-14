import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";


const CategoryItem = ({ category }) => {
  const [params, setParams] = useSearchParams();
  const value = params.get("category");
  const navigate = useNavigate();
  // console.log(value)
  const { label, icon: Icon } = category;

  const handleClick =() => {
    let currentQuery = {}
    if (params) {
      currentQuery = queryString.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery, category: label
    }

    const url = queryString.stringifyUrl(
      {url: '/',
      query: updatedQuery,
    }, {skipNull: true})

    navigate(url)
  }
  return (
    <div onClick={handleClick} className="w-28  border-b-4  hover:bg-red-600 hover:text-white rounded-lg border-red-600 text-neutral-500 py-2 mx-4 mb-2 cursor-pointer group">
      <div className="flex flex-col justify-center items-center group-hover:animate-bounce">
        <div className="text-sky-900">
        <Icon size={26} />
        </div>
        <div className="mx-2 font-semibold">{label}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
