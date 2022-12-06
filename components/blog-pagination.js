import React from "react";

const Paginations = ({ postPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className="meipaly_paginations text-center">
            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <a className="prev" onClick={() => {
                    if (currentPage != 1) {
                        return paginate(currentPage - 1)
                    }
                }}>
                    <i className="fa fa-angle-left"></i>
                </a>
                {pageNumber?.map((number) => {
                    return (
                        <div>
                            <li key={number}>
                                <span onClick={() => paginate(number)} className={currentPage == number ? "current" : ""}>{number}</span>
                            </li>
                        </div>
                    )
                })}
                {totalPosts > 6 && <span>...</span>}
                <a className="next" onClick={() => {
                    console.log(currentPage)
                    if (currentPage != pageNumber?.length) {
                        paginate(currentPage + 1)
                    }
                }}>
                    <i className="fa fa-angle-right"></i>
                </a>
            </ul>
        </div >
    );
};

export default Paginations;
