import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../assets/Image/sort.png";
const SearchCounterResult = ({ title, onclick, theme }) => {
  const handler = () => {};
  const clickMe = (Key) => {
    localStorage.setItem("sortType", Key);
    ////console.log(Key)
    onclick();
  };

  return (
    <div className="d-flex justify-content-between pt-3 px-5">
      <div style={{ color: theme.palette.text.primary }} className="sub-tile">
        {title}
      </div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1" style={{ color: theme.palette.text.primary }}>
              Sort by
              <img width="20px" height="20px" className="ms-1" src={sort} />
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div
            style={{ backgroundColor: theme.palette.myColor.main }}
            className="card-filter"
          >
            <div
              style={{ color: theme.palette.text.primary }}
              onClick={() => clickMe("")}
              className="border-bottom card-filter-item"
            >
              No order
            </div>
            <div
              style={{ color: theme.palette.text.primary }}
              onClick={() => clickMe("الاكتر مبيعا")}
              className="border-bottom card-filter-item"
            >
              Top selling
            </div>
            <div
              style={{ color: theme.palette.text.primary }}
              onClick={() => clickMe("الاعلى تقييما")}
              className="border-bottom card-filter-item"
            >
              Top rated
            </div>
            <div
              style={{ color: theme.palette.text.primary }}
              onClick={() => clickMe("السعر من الاقل للاعلي")}
              className="border-bottom card-filter-item"
            >
              Price Low to High
            </div>
            <div
              style={{ color: theme.palette.text.primary }}
              onClick={() => clickMe("السعر من الاعلي للاقل")}
              className=" card-filter-item"
            >
              Price High to Low
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCounterResult;
