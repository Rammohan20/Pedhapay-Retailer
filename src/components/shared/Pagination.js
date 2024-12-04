import React from 'react';
import { Pagination } from 'react-bootstrap';

const AppPagination = ({ currentPage, totalPages, paginate }) => {
    const pageRange = () => {
        const range = [];
        let start = currentPage - 2 > 0 ? currentPage - 2 : 1;
        let end = currentPage + 2 < totalPages ? currentPage + 2 : totalPages;

        if (start > 1) range.push(1);
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        if (end < totalPages) range.push(totalPages);
        return range;
    };

    return (
        <Pagination className="my-3">
            <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
            {pageRange().map((pageNumber) => (
                <Pagination.Item
                    key={pageNumber}
                    active={pageNumber === currentPage}
                    onClick={() => paginate(pageNumber)}
                >
                    {pageNumber}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
    );
};

export default AppPagination;
