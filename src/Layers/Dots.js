// import React from "react";

// const Dot = ({pageNum,})=>{
//   return()
// }
// const Dots = ({ onPageChange, pageNum }) => {
//   // console.log(onPageChange);
//   const handlePageChange = (num) => {
//     onPageChange(num);
//   };
//   var currentDot = "color:red";
//   return (
//     <nav>
//       {[...Array(5)].map((e, i) => (
//         <>
//           {i === pageNum ? (
//             <button
//               className="dot red"
//               onClick={() => handlePageChange(i)}
//               value={i}
//             />
//           ) : (
//             <button
//               className="dot
//         "
//               onClick={() => handlePageChange(i)}
//               value={i}
//             />
//           )}
//         </>
//       ))}
//     </nav>
//   );
// };

// export default Dots;

import React from "react";

const Dot = ({ pageNum, index, onPageNum }) => {
  return (
    <div
      className={index === pageNum ? "dot active" : "dot"}
      onClick={() => onPageNum(index)}
      // style={{
      //   backgroundColor: index === pageNum ? "red" : "black",
      // }}
    ></div>
  );
};
const Dots = ({ onPageChange, pageNum }) => {
  // console.log(onPageChange);
  const handlePageChange = (num) => {
    onPageChange(num);
  };

  return (
    <>
      <nav>
        {[...Array(5)].map((e, i) => (
          <div>
            <Dot pageNum={pageNum} index={i} onPageNum={handlePageChange} />
          </div>
        ))}
      </nav>
      <div className="pageNum">{pageNum + 1}/5</div>
    </>
  );
};

export default Dots;
