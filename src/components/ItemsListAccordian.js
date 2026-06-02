import { useDispatch } from "react-redux";
import { ResCardImg } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsListAccordian = ({ listItems }) => {
  const dispatch = useDispatch();

  const handleAddItem = (listItem) => {
    dispatch(addItem(listItem));
  };

  return (
    <div>
      {listItems.map((listItem,index) => (
        <div
          key={`${listItem.card.info.id}-${index}`}
          className="flex justify-between py-6 border-b border-gray-200"
        >
          {/* Left Section */}
          <div className="w-9/12 pr-6">
            <h3 className="font-semibold text-lg text-gray-800">
              {listItem.card.info.name}
            </h3>

            <p className="font-semibold text-gray-700 mt-1">
              ₹
              {(listItem.card.info.price || listItem.card.info.defaultPrice) /
                100}
            </p>

            <p className="text-sm text-gray-500 mt-3 line-clamp-3">
              {listItem.card.info.description}
            </p>
          </div>

          {/* Right Section */}
          <div className="w-3/12 flex justify-center relative">
            {listItem.card.info.imageId && (
              <>
                <img
                  className="w-36 h-28 object-cover rounded-xl"
                  src={ResCardImg + listItem.card.info.imageId}
                  alt={listItem.card.info.name}
                />

                <button
                  className="cursor-pointer absolute -bottom-3 bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border hover:bg-gray-50"
                  onClick={() => {
                    handleAddItem(listItem);
                  }}
                >
                  ADD
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsListAccordian;
