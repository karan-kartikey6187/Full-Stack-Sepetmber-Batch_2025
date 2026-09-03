import { Badge, Table } from "react-bootstrap"
import { EmployeesData } from "../data/BadgesData"

export const RBBadges = () => {
    return (
        <div className="mx-3 mx-md-5">
            <Table className="table employees-table overflow-x-auto" responsive>
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