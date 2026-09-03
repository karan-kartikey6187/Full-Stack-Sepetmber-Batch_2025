import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

export const RBPagination = () => {
    const [activePage, setActivePage] = useState(3);
    const pages = [1, 2, 3, 4, 5];

    return (
        <div className="py-4 mx-4 mx-md-5 fs-5">
            <h2 className="text-black">Pagination</h2>

            <h3 className="mt-3 fs-4">
                Active Page : {activePage}
            </h3>

            <Pagination size="lg" className="mt-3">

                <Pagination.First
                    disabled={activePage === 1}
                    onClick={() => setActivePage(1)}
                >
                    <MdKeyboardDoubleArrowLeft />
                </Pagination.First>

                <Pagination.Prev
                    disabled={activePage === 1}
                    onClick={() => {
                        if (activePage > 1) {
                            setActivePage(activePage - 1);
                        }
                    }}
                >
                    <MdKeyboardArrowLeft />
                </Pagination.Prev>

                {pages.map((page) => (
                    <Pagination.Item
                        key={page}
                        active={activePage === page}
                        onClick={() => setActivePage(page)}
                    >
                        {page}
                    </Pagination.Item>
                ))}

                <Pagination.Next
                    disabled={activePage === pages.length}
                    onClick={() => {
                        if (activePage < pages.length) {
                            setActivePage(activePage + 1);
                        }
                    }}
                >
                    <MdKeyboardArrowRight />
                </Pagination.Next>

                <Pagination.Last
                    disabled={activePage === pages.length}
                    onClick={() => setActivePage(pages.length)}
                >
                    <MdKeyboardDoubleArrowRight />
                </Pagination.Last>

            </Pagination>
        </div>
    );
};