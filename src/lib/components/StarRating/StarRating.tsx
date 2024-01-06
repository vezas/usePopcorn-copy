import { FC, useState } from 'react';
import FilledStarIcon from 'assets/star-filled.svg?react';
import OutlinedStarIcon from 'assets/star-outline.svg?react';
import styles from './StarRating.module.scss';

interface StarRatingProps {
  stars: number;
  rate: number;
  color?: string;
  setRate: (stars: number) => void;
}

export const StarRating: FC<StarRatingProps> = ({ stars, rate, color, setRate }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className={styles.starRating}>
      {Array.from({ length: stars }, (_, i) => i + 1).map((i) => {
        const isFilled = rate >= i || hoveredIndex >= i;

        return (
          <Star
            color={color}
            isFilled={isFilled}
            key={i}
            onHoverIn={() => setHoveredIndex(i)}
            onHoverOut={() => setHoveredIndex(0)}
            setRate={() => setRate(i)}
          />
        );
      })}
      <p style={{ color: color || 'gold' }}>{hoveredIndex || rate}</p>
    </div>
  );
};

interface StarProps {
  isFilled: boolean;
  color?: string;
  setRate: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
}

const Star: FC<StarProps> = ({ isFilled, color, setRate, onHoverIn, onHoverOut }) => {
  const starStyle = {
    fill: color || 'gold'
  };

  return (
    <span
      className={styles.star}
      onClick={setRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {isFilled ? <FilledStarIcon style={starStyle} /> : <OutlinedStarIcon style={starStyle} />}
    </span>
  );
};
