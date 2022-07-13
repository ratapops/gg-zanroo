export default function ReadOnlyRow({
  user,
  handleEditClick,
  handleDeleteClick,
}: any) {
  return (
    <tr
      key={user.id}
      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
    >
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.age}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {user.nickname}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <button
          className="bg-yellow-400 rounded-full px-8 py-2 mr-2"
          onClick={(e) => handleEditClick(e, user)}
        >
          Edit
        </button>
        <button
          className="bg-red-400 rounded-full px-8 py-2 mr-2"
          onClick={() => handleDeleteClick(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
