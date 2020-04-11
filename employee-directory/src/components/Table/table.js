import React from "react";
import data from "../../data.json"

export default function Table() {
    console.log(data)
    return (
        <table border=".5">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Image</td>
                    <td>John Doe</td>
                    <td>860-5555-5555</td>
                    <td>Houston</td>
                    <td>john@john.doe</td>
                    <td>03-25-1985</td>
                </tr>
            </tbody>
        </table>
    )
}