import { Header } from "../components"
import { DataGrid } from '@mui/x-data-grid';

import { customersData } from '../data/dummy';

const Customers = () => {

  const customerColumns = [
    {
      field: 'id',
      headerName: 'Customer ID',
      width: 100,
    },
    {
      field: 'CustomerImage',
      headerName: 'Customer Image',
      width: 180,
      renderCell: (params) => (
        <img
          className="rounded-full h-20 w-24 md:ml-3 object-contain"
          src={params.value}
          alt="customer-avatar"
        />
      ),
    },
    {
      field: 'CustomerName',
      headerName: 'Customer Name',
      width: 200,
    },
    {
      field: 'CustomerEmail',
      headerName: 'Customer Email',
      width: 200,
      editable: true,
    },
    {
      field: 'ProjectName',
      headerName: 'Project Name',
      width: 200,
      editable: true,
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
      editable: true,
      renderCell: (params) => {
        const statusBg = params.row.StatusBg;
        return (
          <button
            type="button"
            style={{ background: statusBg }}
            className="py-1 px-2 capitalize rounded-2xl text-md"
          >
            {params.value}
          </button>
        );
      },
    },
    {
      field: 'Weeks',
      headerName: 'Weeks',
      width: 80,
      editable: true,
    },
    {
      field: 'Budget',
      headerName: 'Budget',
      width: 120,
      editable: true,
    },
    {
      field: 'Location',
      headerName: 'Location',
      width: 150,
      editable: true,
    },
  ];
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category='Page' title='Employees' />
    
      <DataGrid
        rows={customersData}
        columns={customerColumns}
        editMode="row"
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

export default Customers