import React from "react";
import { useNavigate } from "react-router-dom";
import "./entries.scss";

const Entries = ({ list }) => {
    const navigate = useNavigate("");

    const onItemClickHandler = (item) => {
        navigate(`/campaign/${item.id}`, { state: { id: item.id } });
    };
    return (
        <div className="entries-container">
            {list?.map((item) => {
                return (
                    <div
                        className="entries-container__item"
                        key={item.id}
                        onClick={() => onItemClickHandler(item)}
                    >
                        <div className="entries-container__item__name">
                            <div>Name</div> <div>{item.name}</div>
                        </div>

                        <div className="entries-container__item__date">
                            <div>Date</div> <div>{item.date}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Entries;
