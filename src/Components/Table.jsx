import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import Add_Button from './add-button';

const Table = ({ tableHeaders, data = [], onEdit, onDelete, onAdd, title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState({ role: 'Role not available', fullname: 'Fullname not available' });

  useEffect(() => {
    // Retrieve user object from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser); // Set the user object from the retrieved user object
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = Array.isArray(data)
    ? data.filter((item) =>
        tableHeaders.some((header) =>
          item[header.key]
            ? item[header.key].toString().toLowerCase().includes(searchTerm.toLowerCase())
            : false
        )
      )
    : [];

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center items-center mb-4">
        <div className="flex space-x-5">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-[300px] py-2 px-4 border border-secondary text-neutral bg-secondary-V2 rounded-md outline-none"
            />
            <FaSearch className="absolute top-3 right-3 text-gray-500" size={20} />
          </div>
          {/* Only show Add_Button if the user is an admin */}
          {user.role === 'admin' && <Add_Button action={onAdd} title={title} />}
        </div>
      </div>
      <div className='overflow-auto scrollbar-thin scrollbar-thumb-secondary-V2 scrollbar-track-secondary'>
        <table className="w-full bg-secondary border border-secondary-V2">
          <thead>
            <tr className="bg-secondary-V2 text-neutral uppercase text-sm leading-normal">
              {tableHeaders.map((header, index) => (
                <th key={index} className="py-3 px-6 text-left">
                  {header.header}
                </th>
              ))}
              {/* Only show Actions header if user is admin */}
              {user.role === 'admin' && <th className="py-3 px-6 text-left">Actions</th>}
            </tr>
          </thead>
          <tbody className="text-neutral text-sm font-light">
            {filteredData.length > 0 ? (
              filteredData.map((item, rowIndex) => (
                <tr key={rowIndex} className="border-b">
                  {tableHeaders.map((header, colIndex) => (
                    <td key={colIndex} className="py-3 px-6 text-left h-4">
                      <div className='max-w-[240px] break-words'>
                        {header.key === 'image' && item[header.key] ? (
                          <img
                            src={item[header.key]}
                            alt="Uploaded file"
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          item[header.key] || 'N/A'
                        )}
                      </div>
                    </td>
                  ))}
                  {/* Only render Action buttons if user is admin */}
                  {user.role === 'admin' && (
                    <td className="py-3 px-6 text-left flex space-x-2">
                      <button
                        onClick={() => onEdit(item)}
                        className="text-neutral active:scale-110"
                        title="Edit"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(item)}
                        className="text-neutral active:scale-110"
                        title="Delete"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={tableHeaders.length + (user.role === 'admin' ? 1 : 0)} className="py-3 px-6 text-center">
                  {data.length === 0 ? 'No data available' : 'No results found'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
