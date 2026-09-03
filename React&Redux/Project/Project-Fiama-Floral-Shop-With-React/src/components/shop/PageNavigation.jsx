import { Image } from 'react-bootstrap'
import LeftArrow from "src/assets/icons/angle-left-solid-full.svg"
import RightArrow from "src/assets/icons/angle-right-solid-full.svg"

export const PageNavigation = ({ currentPage,totalPages,onPageChange}) => {

    if (totalPages <= 1) {
        return null
    }

    const pageNumbers = []

    for (let page = 1; page <= totalPages; page++) {
        pageNumbers.push(page)
    }

    return (
        <section className="page-navigation mt-6 mb-7">
            <div className="container d-flex justify-content-center gap-2 align-items-center flex-wrap">
                <div
                    className={`icon--50px-icon rounded rounded-circle bg-light-grey d-flex justify-content-center align-items-center ${
                        currentPage === 1 ? "opacity-50" : ""
                    }`}
                    onClick={() => {
                        if (currentPage > 1) {
                            onPageChange(currentPage - 1)
                        }
                    }}
                >
                    <Image
                        src={LeftArrow}
                        alt="Previous"
                        className="icon--20px"
                    />
                </div>

                {pageNumbers.map((page) => {
                    return (
                        <div
                            key={page}
                            className={`icon--50px-icon rounded rounded-circle d-flex justify-content-center align-items-center ${
                                currentPage === page
                                    ? "bg-primary text-white"
                                    : "text-light-grey bg-light-grey"
                            }`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </div>
                    )
                })}

                <div
                    className={`icon--50px-icon rounded rounded-circle bg-light-grey d-flex justify-content-center align-items-center ${
                        currentPage === totalPages ? "opacity-50" : ""
                    }`}
                    onClick={() => {
                        if (currentPage < totalPages) {
                            onPageChange(currentPage + 1)
                        }
                    }}
                >
                    <Image
                        src={RightArrow}
                        alt="Next"
                        className="icon--20px"
                    />
                </div>
            </div>
        </section>
    )
}