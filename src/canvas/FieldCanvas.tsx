import { Stage, Layer, Rect, Line, Text } from "react-konva";
import PlayersCanvas from './PlayersCanvas'
import FootballCanvas from './FootballCanvas'

export default function FieldCanvas() {
  const FIELD_LENGTH = 120;
  const FIELD_WIDTH = 53.3;
  const SCALE = 8;

  const fieldWidth = FIELD_WIDTH * SCALE;
  const fieldHeight = FIELD_LENGTH * SCALE;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const scale = Math.min(screenWidth / fieldHeight, screenHeight / fieldWidth);

  const HASH_OFFSET = 23.4 * SCALE;
  const TICK_LENGTH = 6;
  const NUMBER_OFFSET_TOP = 6 * SCALE;
  const NUMBER_OFFSET_BOTTOM = fieldWidth - 24 * SCALE;

  // football
  const CENTER_X = 26.65 * SCALE; // middle of field
  const BALL_Y = 60 * SCALE;      // line of scrimmage

  return (
    <Stage width={screenWidth} height={screenHeight}>
      <Layer
        rotation={90}
        scaleX={scale}
        scaleY={scale}
        x={screenWidth}
        y={(screenHeight - fieldWidth * scale) / 2 / scale}
      >
        {/* Field */}
        <Rect
          x={0}
          y={0}
          width={fieldWidth}
          height={fieldHeight}
          fill="#2e7d32"
        />

        {/* Boundary */}
        <Line
          points={[
            0,
            0,
            fieldWidth,
            0,
            fieldWidth,
            fieldHeight,
            0,
            fieldHeight,
            0,
            0,
          ]}
          stroke="white"
          strokeWidth={2}
        />

        {/* Yard lines */}
        {Array.from({ length: 121 }).map((_, yard) => {
          if (yard < 10 || yard > 110) return null;
          if (yard % 5 !== 0) return null;

          const y = yard * SCALE;
          const thick = yard % 10 === 0;

          return (
            <Line
              key={`yard-${yard}`}
              points={[0, y, fieldWidth, y]}
              stroke="white"
              strokeWidth={yard === 60 ? 3 : thick ? 2 : 1}
              opacity={0.9}
            />
          );
        })}

        {/* Hash marks */}
        {Array.from({ length: 121 }).map((_, yard) => {
          if (yard < 10 || yard > 110 || yard === 60 || yard === 100) return null;

          const y = yard * SCALE;

          return (
            <>
              <Line
                points={[
                  HASH_OFFSET - TICK_LENGTH,
                  y,
                  HASH_OFFSET + TICK_LENGTH,
                  y,
                ]}
                stroke="white"
                strokeWidth={1}
              />
              <Line
                points={[
                  fieldWidth - HASH_OFFSET - TICK_LENGTH,
                  y,
                  fieldWidth - HASH_OFFSET + TICK_LENGTH,
                  y,
                ]}
                stroke="white"
                strokeWidth={1}
              />
            </>
          );
        })}

        {/* Yard numbers */}
        {Array.from({ length: 11 }).map((_, i) => {
          const yard = i * 10;
          if (yard < 10 || yard > 110 || yard === 100) return null;

          const display = yard <= 50 ? yard : 100 - yard;
          const y = yard * SCALE - 10;

          return (
            <>
              <Text
                key={`num-top-${yard}`}
                text={String(display)}
                x={NUMBER_OFFSET_TOP}
                y={y + 74}
                width={40}
                align="center"
                fontSize={18}
                fill="white"
                rotation={90}
                letterSpacing={7}
              />

              <Text
                key={`num-bottom-${yard}`}
                text={String(display)}
                x={NUMBER_OFFSET_BOTTOM + 145}
                y={y + 106}
                width={40}
                align="center"
                fontSize={18}
                fill="white"
                rotation={-90}
                letterSpacing={7}
              />
            </>
          );
        })}

        {/* End zones */}
        <Line
          points={[0, 10 * SCALE, fieldWidth, 10 * SCALE]}
          stroke="white"
          strokeWidth={2}
        />
        <Line
          points={[0, 110 * SCALE, fieldWidth, 110 * SCALE]}
          stroke="white"
          strokeWidth={2}
        />
        {/* goal post markers – top end zone */}
        {/* Goal post markers – top end zone */}
        <Line
          x={HASH_OFFSET}
          y={1 * SCALE}
          rotation={-90}
          points={[-12, 0, 12, 0]}
          stroke="white"
          strokeWidth={2}
        />

        <Line
          x={fieldWidth - HASH_OFFSET}
          y={1 * SCALE}
          rotation={-90}
          points={[-12, 0, 12, 0]}
          stroke="white"
          strokeWidth={2}
        />

        {/* goal post markers – bottom end zone */}

        <Line
          x={HASH_OFFSET}
          y={fieldHeight - 1 * SCALE}
          rotation={-90}
          points={[-12, 0, 12, 0]}
          stroke="white"
          strokeWidth={2}
        />

        <Line
          x={fieldWidth - HASH_OFFSET}
          y={fieldHeight - 1 * SCALE}
          rotation={-90}
          points={[-12, 0, 12, 0]}
          stroke="white"
          strokeWidth={2}
        />

        <Text
          text="TOUCHDOWN"
          x={fieldWidth / 2 - 80}
          y={25}
          fontSize={28}
          fill="white"
          rotation={1}
        />

        <Text
          text="TOUCHDOWN"
          x={fieldWidth / 2 - 80}
          y={fieldHeight - 53}
          fontSize={28}
          fill="white"
          rotation={1}
        />
        <FootballCanvas x={CENTER_X} y={BALL_Y +4 } />
        <PlayersCanvas />
      </Layer>
    </Stage>
  );
}
