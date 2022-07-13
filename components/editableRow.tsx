export default function EditableRow({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}: any) {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
          onChange={handleEditFormChange}
          value={editFormData.name}
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
          onChange={handleEditFormChange}
          value={editFormData.age}
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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
          onChange={handleEditFormChange}
          value={editFormData.nickname}
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          type="submit"
          className="bg-yellow-400 rounded-full px-8 py-2 mr-2"
        >
          Save
        </button>
        <button
          className="bg-red-400 rounded-full px-8 py-2 mr-2"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}
