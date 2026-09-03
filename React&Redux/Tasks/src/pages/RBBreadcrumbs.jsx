import { Fragment } from "react";
import { Breadcrumb } from "react-bootstrap"
import { ChevronRight, Folder } from "react-bootstrap-icons";
import { BsCodeSquare } from "react-icons/bs";
import { Link } from "react-router-dom";


export const RBBreadcrumbs = () => {
    const CustomLink = (props) => {
        const { href, children, style } = props;
        return (
            <Fragment>
                <Link className="text-decoration-none" to={href}
                    style={style}>
                    {children}
                </Link>
                <ChevronRight className="mx-3" size={12} />
            </Fragment>
        )
    };
    return (
        <>
            <Breadcrumb className="ms-5 my-5" listProps={{ style: { marginBottom: "0" } }}>
                <Breadcrumb.Item bsPrefix=" " linkProps={{ style: { color: "black" } }} linkAs={CustomLink} href="#">Cloud</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=" " linkProps={{ style: { color: "black" } }} linkAs={CustomLink} href="#">Files</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=" " linkProps={{ style: { color: "black" } }} linkAs={CustomLink} >Projects</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=" " className="fw-medium" active>ProjectName</Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb className="custom-breadcrumb ms-5 my-5 text-black" listProps={{ style: { marginBottom: "0" } }}>
                <Breadcrumb.Item bsPrefix=" " linkAs={CustomLink} href="#"><Folder color="orange" size={20} className="me-1" /> Assignments</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=" " linkAs={CustomLink} href="#"><Folder color="orange" size={20} className="me-1" /> Project</Breadcrumb.Item>
                <Breadcrumb.Item bsPrefix=" " className="active-breadcrumb" active><BsCodeSquare color="#3737f3" size={20} className="me-1" /> TodoList</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}                               