import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCars, deleteCar } from "../api/carapi";
import { DataGrid, GridColDef, GridCellParams } from "@mui/x-data-grid";
import { Snackbar, IconButton } from "@mui/material";
import { useState } from "react";
import AddCar from "./AddCar";
import EditCar from "./EditCar";
import DeleteIcon from '@mui/icons-material/Delete';  // 복붙

export default function Carlist() {
  const queryClient = useQueryClient();

  const [ open, setOpen ] = useState(false);

  const { data, error, isSuccess } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars
  });

  const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
      // 자동차 삭제 이후 실행되는 로직
      setOpen(true);
      queryClient.invalidateQueries({queryKey: ['cars']});
    },
    onError: (err) => {
      console.log(err);
    },
  })

  const columns: GridColDef[] = [
    {field: 'brand', headerName: 'Brand', width: 200},
    {field: 'model', headerName: '모델명', width: 200},
    {field: 'color', headerName: 'color', width: 200},
    {field: 'registrationNumber', headerName: '등록번호', width: 150},
    {field: 'modelYear', headerName: 'Model Year', width: 150},
    {field: 'price', headerName: '가격', width: 150},
    {
      field: 'edit',
      headerName: '수정',
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => <EditCar cardata={params.row}></EditCar>
    },
    {
      field: 'delete',
      headerName: '삭제',
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <IconButton aria-label="delete" size="small" onClick={() => {
          if (window.confirm(`${params.row.brand}의 ${params.row.model} 자동차를 삭제하시겠습니까?`)) {
            mutate(params.row._links.self.href);
          }
        }}>
          <DeleteIcon fontSize="small"></DeleteIcon>
        </IconButton>
      )
    }
  ]

  if (!isSuccess) {
    return <span>Loading...</span>
  } else if (error) {
    return <span>데이터를 가져오는 중 오류 발생</span>
  } else {
    return(
      <>
        <AddCar></AddCar>
        <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick = {true}
        getRowId={row => row._links.self.href}
        >
        </DataGrid>
        <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message='자동차가 삭제되었습니다.'>

        </Snackbar>
      </>
    )
  }
}