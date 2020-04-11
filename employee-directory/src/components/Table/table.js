import React from "react";
import data from "../../data.json"
import { TableRow } from "./subComponent/Row/tableRow";
import TableHeader from "./subComponent/tableHeader/tableHeader";

export default function Table() {
    console.log(data)

    return (
        <table border=".5">
            <thead>
                <tr>
                    <TableHeader 
                        text="Name"
                    />
                    <TableHeader 
                        text="Email"
                    />
                    <TableHeader 
                        text="Phone"
                    />
                    <TableHeader 
                        text="Nationality"
                    />
                </tr>
            </thead>
            <tbody>
                {
                    data.map((person) => (
                          <TableRow
                                key={person.phone}
                                person={person}
                          />
                    ))
                }
            </tbody>
        </table>
    )
}