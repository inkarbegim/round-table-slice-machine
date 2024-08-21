import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

export default function FollowingObject(props) {
 
    const { x, y } = useMousePosition();
    const radius = 0;

    const angles = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 
                    100, 110, 120, 130, 140, 150, 160, 170, 180, 
                    190, 200, 210, 220, 230, 240, 250, 260, 270, 
                    280, 290, 300, 310, 320, 330, 340,, 350, 360];
    

    return (
        <motion.div
            animate={{ x: x-radius, y: y-radius, }}
            transition={{ duration: props.movingSpeed }} >
            <motion.div
                className="h-20px w-20px absolute" 
                animate={{ rotate: angles }}
                transition={{ repeat: Infinity, duration: props.rotationSpeed }} >
                <motion.svg 
                    width={props.width} height={props.height} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg"
                    className="absolute" >
                    <path d={props.paths[0]} fill="#FFFFFF"/>
                </motion.svg>
            </motion.div>
        </motion.div>  
    );
  }
  