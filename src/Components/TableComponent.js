import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import movies from "../movies";
import "../styles.css";

const columns = [
    {
        name: "#",
        selector: "id",
        sortable: true,
        style: {
            fontSize: '20px',
            fontWeight: "350"
        },
    },
    {
        name: "Title",
        selector: "title",
        sortable: true,
        style: {
            fontSize: '20px',
            fontWeight: "350"
        },
    },
    {
        name: "Directior",
        selector: "director",
        sortable: true,
        style: {
            fontSize: '20px',
            fontWeight: "350"
        },
    },
    {
        name: "Runtime (m)",
        selector: "runtime",
        sortable: true,
        right: true,
        style: {
            fontSize: '20px',
            fontWeight: "350"
        },
    },
    {
        name: "year",
        selector: "year",
        // sortable: false,
        right: true,
        style: {
            fontSize: '20px',
            fontWeight: "350"
        },
    },
    {
        name: "actors",
        selector: "actors",
        // sortable: false,
        right: false,
        style: {
            fontSize: '20px',
            fontWeight: "350"
        },
    }
];

// const getData = () => {
//     const requestOption = {
//         method: "GET"
//     }
//     return fetch("", requestOption).then(res => console.log(res))
// }


const TableComponent = (props) => {
    return (
        <Card>
            <DataTable
                title="Movies"
                columns={columns}
                data={movies}
                defaultSortFieldId={1}
                //   sortIcon={<SortIcon />}
                pagination
            // options={sampleOptions}
            // selectableRows
            />
        </Card>
    )
}

export default TableComponent;