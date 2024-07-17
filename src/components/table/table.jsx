"use client";

import styled from "styled-components";

// Styled table component
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
  color: black;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
`;

const TableHead = styled.thead`
  background-color: white;
`;

const TableRow = styled.tr`
  border: 1px solid black;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  font-weight: bold;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-size: 14px;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
`;

const TableTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
  color: black;
  text-transform: uppercase;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const SampleTable = () => {
  return (
    <>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>Displacement</TableHeader>
            <TableCell>6498.5 cm³ (396.6 cu in)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>Max Power (Combined ICE+EE)</TableHeader>
            <TableCell>1015 CV</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>Top Speed</TableHeader>
            <TableCell>&gt;350 km/h</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>Acceleration 0-100 km/h (0-62 mph)</TableHeader>
            <TableCell>2.5 s</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>Combined Consumption*</TableHeader>
            <TableCell>11,86 l/100km (WLTP)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>CO2 Emissions Combined*</TableHeader>
            <TableCell>276 g/km (WLTP)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>Power Consumption Combined*</TableHeader>
            <TableCell>10,1 kWh/100 km (WLTP)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>CO2 Efficiency Class Combined*</TableHeader>
            <TableCell>G (WLTP)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>
              Fuel Consumption with Discharged Battery Combined*
            </TableHeader>
            <TableCell>17,8 l/100km (WLTP)</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>
              CO2 Efficiency Class with Discharged Battery*
            </TableHeader>
            <TableCell>G (WLTP)</TableCell>
          </TableRow>
        </tbody>
      </Table>
    </>
  );
};

export default SampleTable;
