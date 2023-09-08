import { Header } from "../components"
import { DataGrid } from '@mui/x-data-grid';

import { employeesData } from '../data/dummy';
import { useState } from "react";


const Employees = () => { 

  const [searchText, setSearchText] = useState('');
  const [employees, setEmployees] = useState(employeesData);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.Name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleEditCellChange = (params) => {
    const { id, field, value } = params;
    // Find the edited employee by EmployeeID (id) and update its field with the new value
    const updatedEmployees = employees.map((employee) =>
      employee.EmployeeID === id ? { ...employee, [field]: value } : employee
    );
    setEmployees(updatedEmployees);
  };
  const employeeColumns = [
    {
      field: 'id',
      headerName: 'Employee ID',
      width: 120,
      editable: true,
    },
    {
      field: 'EmployeeImage',
      headerName: 'Employee Image',
      width: 180,
      renderCell: (params) => (
        <img
          className="rounded-full h-20 w-24 md:ml-3 object-contain"
          src={params.value}
          alt="employee-avatar"
        />
      ),
    },
    {
      field: 'Name',
      headerName: 'Name',
      width: 200,
      editable: true,
    },
    {
      field: 'Title',
      headerName: 'Title',
      width: 200,
      editable: true,
    },
    {
      field: 'HireDate',
      headerName: 'Hire Date',
      width: 150,
      editable: true,
    },
    {
      field: 'Country',
      headerName: 'Country',
      width: 150,
      editable: true,
    },
    {
      field: 'ReportsTo',
      headerName: 'Reports To',
      width: 200,
      editable: true,
    },
  ];
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category='Page' title='Employees' />
        <input
        type="text"
        placeholder="Search by Name"
        value={searchText}
        onChange={handleSearch}
        className="mb-2 border-b-1 p-2 w-72 rounded-md"
      />
    
      <DataGrid
        rows={filteredEmployees}
        columns={employeeColumns}
        editMode="row"
        onEditRowModelChange={handleEditCellChange}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
   
    </div>
  )
}

export default Employees