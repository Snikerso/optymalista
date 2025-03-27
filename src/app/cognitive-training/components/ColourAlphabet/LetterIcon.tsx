import { shapes } from "./letters";

export const LetterIcon = ({
  shape,
  color,
  letter,
}: {
  color: string;
  shape?: shapes;
  letter: string;
}) => {
  console.log(shape);
  if (!shape) return <>{letter}</>;
  switch (shape) {
    case shapes.triangle:
      return (
        <div
          style={{
            width: "0",
            height: "0",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: `10px solid ${color}`,
          }}
        />
      );

    case shapes.circle:
      return (
        <div
          style={{
            boxSizing: "border-box",
            width: "10px",
            height: "10px",
            backgroundColor: color,
            borderRadius: "50%",
          }}
        />
      );

    case shapes.square:
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            color: "red",
            backgroundColor: color,
          }}
        />
      );

    case shapes.line:
      return (
        <div
          style={{
            width: "2.5px",
            height: "10px",
            borderRadius: "2px",
            marginLeft: "4px",
            backgroundColor: color,
          }}
        />
      );

    case shapes.lineHorizontal:
      return (
        <div
          style={{
            width: "10px",
            height: "3px",
            borderRadius: "2px",
            backgroundColor: color,
            borderTop: "3px solid white",
            borderBottom: "3px solid white",
          }}
        />
      );

    case shapes.cross:
      return (
        <div
          style={{
            position: "relative",
            height: "10px",
            width: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1px",
              left: "0px",
              width: "10px",
              height: "3px",
              borderRadius: "2px",
              backgroundColor: color,
              borderTop: "3px solid white",
              borderBottom: "3px solid white",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              marginLeft: "3.5px",
              width: "3px",
              height: "10px",
              backgroundColor: color,
            }}
          />
        </div>
      );

    default:
      return <>{letter}</>;
  }
};
