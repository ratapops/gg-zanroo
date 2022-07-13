export default function AddUserForm({
  handleAddFormChange,
  cancleAddUserBtn,
}: any) {
  return (
    <div>
      <div className="grid grid-cols-3">
        <label className="block px-2">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            className="
        mt-1
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      "
            onChange={handleAddFormChange}
            required="required"
          />
        </label>
        <label className="block px-2">
          <span className="text-gray-700">Age</span>
          <input
            type="number"
            name="age"
            className="
        mt-1
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      "
            onChange={handleAddFormChange}
            required="required"
          />
        </label>
        <label className="block px-2">
          <span className="text-gray-700">Nickname</span>
          <input
            type="text"
            name="nickname"
            className="
        mt-1
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      "
            onChange={handleAddFormChange}
            required="required"
          />
        </label>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-green-400 rounded-full px-8 py-2 mr-2"
        >
          Save
        </button>
        <button
          onClick={cancleAddUserBtn}
          className="flex-1 bg-red-400 rounded-full px-8 py-2"
        >
          Cancle
        </button>
      </div>
    </div>
  );
}
