const Dot = ({ num, scrollIndex }) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        border: "1px solid black",
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "black" : "transparent",
        transitionDuration: 1000,
        transition: "background-color 0.5s",
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }) => {
  console.log(scrollIndex);
  return (
    <div style={{ position: "fixed", top: "50%", right: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 100,
        }}
      >
        <div to="1" spy={true} smooth={true}>
          <Dot num={1} scrollIndex={scrollIndex} />
        </div>
        <div to="2" spy={true} smooth={true}>
          <Dot num={2} scrollIndex={scrollIndex} />
        </div>
        <div to="3" spy={true} smooth={true}>
          <Dot num={3} scrollIndex={scrollIndex} />
        </div>
        <div to="4" spy={true} smooth={true}>
          <Dot num={4} scrollIndex={scrollIndex} />
        </div>
        <div to="5" spy={true} smooth={true}>
          <Dot num={5} scrollIndex={scrollIndex} />
        </div>
        <div to="6" spy={true} smooth={true}>
          <Dot num={6} scrollIndex={scrollIndex} />
        </div>
      </div>
    </div>
  );
};

export default Dots;
