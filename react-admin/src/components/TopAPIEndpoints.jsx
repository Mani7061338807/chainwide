import { Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataTopApiEndpoints } from "../data/mockData";
import Header from "../components/Header";

const TopAPIEndpoints = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "apiEndPoint",
      headerName: "API Endpoints",
      flex: 1,
      cellClassName: "api-endpoints-column--cell",
      headerAlign: "center"
    },
    {
      field: "numberOfRequests",
      headerName: "Requests Count",
      type: "number",
      headerAlign: "center"
    },
    {
      field: "httpMethod",
      headerName: "HTTP Method",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { httpMethod } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              httpMethod === "GET"
                ? colors.greenAccent[600]
                : httpMethod === "POST"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {httpMethod == "GET"}
            {httpMethod == "POST"}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {httpMethod}
            </Typography>
          </Box>
        );
      },
    },
    {
        field: "trafficPercent",
        headerName: "Traffic %",
        type: "float",
        headerAlign: "center"
    }
  ];

  return (
    <Box m="20px">
      <Box
        m="0px 0 0 0"
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .api-endpoints-column--cell": {
            color: colors.greenAccent[300],
          },
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
        }}
      >
        <DataGrid rows={mockDataTopApiEndpoints} columns={columns} />
      </Box>
    </Box>
  );
};

export default TopAPIEndpoints;