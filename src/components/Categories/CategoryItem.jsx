import "./CategoryItem.css"

const CategoryItem = ({ category }) => {
  const { label, icon: Icon } = category;
  return (
    <div className="w-28  border-b-4  hover:bg-red-600 hover:text-white rounded-md border-red-600 text-neutral-500 py-2 mx-4 mb-2 cursor-pointer">
      <div className="flex flex-col justify-center items-center hover:bounceNew">
        <div className="text-sky-900">
        <Icon size={26} />
        </div>
        <div className="mx-2 font-semibold">{label}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
