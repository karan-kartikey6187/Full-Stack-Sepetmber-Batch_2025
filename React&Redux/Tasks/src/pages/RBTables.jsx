import { Badge, Table } from "react-bootstrap";
import { EmployeesData } from "../data/BadgesData"


export const RBTables = () => {
    return (
        <div className="mx-4 mx-md-5">
            <h2 className="mt-5 fw-bold mb-4">Responsive</h2>
            <Table className="employees-table overflow-x-auto mb-5" responsive>
                <thead>
                    <tr className="employees-table-row">
                        <th scope="col" className="table-header fw-medium h6">Employee</th>
                        <th scope="col" className="table-header fw-medium h6">Department</th>
                        <th scope="col" className="table-header fw-medium h6">Salary</th>
                        <th scope="col" className="table-header fw-medium h6">Payment Date</th>
                        <th scope="col" className="table-header fw-medium h6">Payment Status</th>
                        <th scope="col" className="table-header fw-medium h6">Employment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeesData.map((emp, index) => {
                        const Icon = emp.departmentIcon;

                        return (
                            <tr key={emp.id} className="employees-table-row">
                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    {emp.employee}
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    <Icon className="me-2 text-light-gray" />
                                    {emp.department}
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    ${emp.salary.toLocaleString()}
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    {emp.paymentDate}
                                </td>

                                <td style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    <Badge
                                        pill
                                        bg=""
                                        className={emp.statusClass}
                                        style={emp.badgeStyle}
                                    >
                                        {emp.paymentStatus.toUpperCase()}
                                    </Badge>
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    {emp.employmentStatus}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
             <h2 className="mt-3RBPrgressBars.jsx fw-bold mt-5 mb-4">Non Responsive</h2>
            <Table className="employees-table mb-4">
                <thead>
                    <tr className="employees-table-row">
                        <th scope="col" className="table-header fw-medium h6">Employee</th>
                        <th scope="col" className="table-header fw-medium h6">Department</th>
                        <th scope="col" className="table-header fw-medium h6">Salary</th>
                        <th scope="col" className="table-header fw-medium h6">Payment Date</th>
                        <th scope="col" className="table-header fw-medium h6">Payment Status</th>
                        <th scope="col" className="table-header fw-medium h6">Employment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeesData.map((emp, index) => {
                        const Icon = emp.departmentIcon;

                        return (
                            <tr key={emp.id} className="employees-table-row">
                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    {emp.employee}
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    <Icon className="me-2 text-light-gray" />
                                    {emp.department}
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    ${emp.salary.toLocaleString()}
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    {emp.paymentDate}
                                </td>

                                <td style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    <Badge
                                        pill
                                        bg=""
                                        className={emp.statusClass}
                                        style={emp.badgeStyle}
                                    >
                                        {emp.paymentStatus.toUpperCase()}
                                    </Badge>
                                </td>

                                <td className="fw-medium text-light-800" style={{ borderBottom: index === EmployeesData.length - 1 ? "none" : undefined }}>
                                    {emp.employmentStatus}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}
