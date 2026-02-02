import { Ellipse } from "react-konva";

type FootballCanvasProps = {
    x: number;
    y: number;
};

export default function FootballCanvas({ x, y }: FootballCanvasProps) {
    return (
        <Ellipse
            x={x}
            y={y}
            radiusX={6}
            radiusY={3}
            rotation={-25}
            fill="brown"
            stroke="white"
            strokeWidth={0.8}
        />
    )

}