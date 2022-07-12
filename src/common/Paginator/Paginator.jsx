import {useState} from "react";
import s from "./Paginator.module.css";
import cn from "classnames";
import doubleRight from "../../assets/double-right.png";
import doubleLeft from "../../assets/double-left.png";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator__wrapper}>
            <div className={cn(s.paginator)}>
                <div className={s.paginator__button}>
                    {portionNumber > 1 &&
                        <button className={s.button} onClick={() => {
                            setPortionNumber(portionNumber - 1)
                        }}><img src={doubleLeft} alt="doubleLeft"/></button>}
                </div>

                <div>
                    {pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p) => {
                            return <span className={cn({
                                [s.selected__page]: props.currentPage === p
                            }, s.page__number)}
                                         key={p}
                                         onClick={(e) => {
                                             props.onPageChange(p);
                                         }}>{p}</span>
                        })}
                </div>

                <div className={s.paginator__button}>
                    {portionCount > portionNumber &&
                        <button className={s.button} onClick={() => {
                            setPortionNumber(portionNumber + 1)
                        }}><img src={doubleRight} alt="doubleRight"/></button>}
                </div>
            </div>
        </div>
    )
};

export default Paginator;