import { motion, useDeprecatedInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";
import { AnimatedProps } from "@react-spring/web";

interface ImageProps {
  id: string;
  isSelected: boolean;
  pointOfInterest?: number;
  backgroundColor: string;
};

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor
}: AnimatedProps<ImageProps>) => {
  const inverted = useDeprecatedInvertedScale();

  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
