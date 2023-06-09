import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataApiDetailsResponseHeaders } from "../../../data/mockData";
import { useTheme } from "@mui/material";

const ResponseTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "header",
      headerName: "Header",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "count",
      headerName: "Count",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "frequency",
      headerName: "Frequency",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
    {
      field: "commonValue",
      headerName: "Common value",
      flex: 0.5,
      headerAlign: "center",
      align: 'center'
    },
  ];

  return (
    <Box>
      <Box
        m="10px 0 0 0"
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
        //   "& .hostname-column--cell": {
        //     color: colors.greenAccent[300],
        //   },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataApiDetailsResponseHeaders}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ResponseTable;