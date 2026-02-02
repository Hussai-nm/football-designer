import { Group, Circle, Arrow } from "react-konva";

const SCALE = 8;
const PLAYER_RADIUS = 6;
// reference points
const CENTER_X = 26.65 * SCALE; // middle of field
const BALL_Y = 60 * SCALE;      // line of scrimmage

const players = [
  { id: 1, x: CENTER_X - 8 * SCALE, y: BALL_Y, role: "LT" },
  { id: 2, x: CENTER_X - 4 * SCALE, y: BALL_Y, role: "LG" },
  { id: 3, x: CENTER_X, y: BALL_Y, role: "C" },
  { id: 4, x: CENTER_X + 4 * SCALE, y: BALL_Y, role: "RG" },
  { id: 5, x: CENTER_X + 8 * SCALE, y: BALL_Y, role: "RT" },
  { id: 6, x: CENTER_X, y: BALL_Y + 5 * SCALE, role: "QB" },
  { id: 7, x: CENTER_X - 4 * SCALE, y: BALL_Y + 8 * SCALE, role: "RB" },
  { id: 8, x: CENTER_X + 14 * SCALE, y: BALL_Y + 2 * SCALE, role: "WR" },
  { id: 9, x: CENTER_X + 18 * SCALE, y: BALL_Y + 5 * SCALE, role: "WR" },
  { id: 10, x: CENTER_X + 22 * SCALE, y: BALL_Y + 8 * SCALE, role: "WR" },
  { id: 11, x: CENTER_X - 12 * SCALE, y: BALL_Y + 2 * SCALE, role: "TE" },
];

export default function PlayersCanvas() {
  return (
    <Group>
      {players.map((p) => (
        <Group key={p.id}>
          {/* player body */}
          <Circle
            x={p.x}
            y={p.y}
            radius={PLAYER_RADIUS}
            fill="#1565c0"
            stroke="white"
            strokeWidth={1}
          />

          {/* facing direction*/}
          <Arrow
            x={p.x}
            y={p.y}
            rotation={-90} 
            points={[
              PLAYER_RADIUS,
              0,
              PLAYER_RADIUS + 10,
              0,
            ]}
            pointerLength={4}
            pointerWidth={4}
            fill="white"
            stroke="white"
            strokeWidth={1}
          />
        </Group>
      ))}
    </Group>
  );
}
