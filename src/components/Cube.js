import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './cube.scss'

// const Cube = () => {

//     const [scrollPos, setScrollPos] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollPos(window.pageYOffset);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className='Cube'>
//             <div
//                 className='navbar-cube'
//                 style={{ transform: `rotateX(${-scrollPos / 20}deg) rotateY(${scrollPos / 20}deg)` }}
//             >
//                 <div className='navbar-edge navbar-edge-front'></div>
//                 <div className='navbar-edge navbar-edge-back'></div>
//                 <div className='navbar-edge navbar-edge-left'></div>
//                 <div className='navbar-edge navbar-edge-right'></div>
//                 <div className='navbar-edge navbar-edge-top'></div>
//                 <div className='navbar-edge navbar-edge-bottom'></div>
//             </div>
//         </div>
//     );
// };

// export default Cube;

const Cube = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const cubeRef = useRef(null);

    useEffect(() => {
        if (cubeRef.current) {
            const handleWheel = (e) => {
                e.stopPropagation();
                setRotation({
                    x: rotation.x + e.deltaY / 10,
                    y: rotation.y + e.deltaX / 10,
                });
            };
            cubeRef.current.addEventListener("wheel", handleWheel, { passive: true });
            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                cubeRef.current.removeEventListener("wheel", handleWheel);
            };
        }
    }, [rotation]);

    return (
        <div className='Cube'>
            <div
                ref={cubeRef}
                className='navbar-cube'
                style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
            >
                <div className='navbar-edge navbar-edge-front'><p>Front</p></div>
                <div className='navbar-edge navbar-edge-back'><p>Back</p></div>
                <div className='navbar-edge navbar-edge-left'><p>O</p></div>
                <div className='navbar-edge navbar-edge-right'><p>O</p></div>
                <div className='navbar-edge navbar-edge-top'><p>Top</p></div>
                <div className='navbar-edge navbar-edge-bottom'><p>Bottom</p></div>
            </div>
        </div>
    );
};

export default Cube;

// const Cube = () => {
//     const [rotation, setRotation] = useState({ x: 0, y: 0 });
//     const cubeRef = useRef(null);
//     const [isMouseDown, setIsMouseDown] = useState(false);
//     const [lastMouseX, setLastMouseX] = useState(0);

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     const handleWheel = (e) => {
//         e.stopPropagation();
//         setRotation({
//             x: rotation.x + e.deltaY / 10,
//             y: rotation.y,
//         });
//     };

//     const handleMouseDown = (e) => {
//         if (e.target !== cubeRef.current) return;
//         setIsMouseDown(true);
//         setLastMouseX(e.clientX);
//     };

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     const handleMouseMove = (e) => {
//         if (!isMouseDown) return;
//         const deltaX = e.clientX - lastMouseX;
//         setRotation({
//             x: rotation.x,
//             y: rotation.y + deltaX / 10,
//         });
//         setLastMouseX(e.clientX);
//     };

//     const handleMouseUp = () => {
//         setIsMouseDown(false);
//     };


//     useEffect(() => {
//         if (cubeRef.current) {
//             cubeRef.current.addEventListener("wheel", handleWheel, { passive: true });
//             cubeRef.current.addEventListener("mousedown", handleMouseDown);
//             window.addEventListener("mousemove", handleMouseMove);
//             window.addEventListener("mouseup", handleMouseUp);
//             return () => {
//                 cubeRef.current.removeEventListener("wheel", handleWheel);
//                 // eslint-disable-next-line react-hooks/exhaustive-deps
//                 cubeRef.current.removeEventListener("mousedown", handleMouseDown);
//                 window.removeEventListener("mousemove", handleMouseMove);
//                 window.removeEventListener("mouseup", handleMouseUp);
//             };
//         }
//     }, [handleMouseMove, handleWheel, rotation]);

//     return (
//         <div className='Cube'>
//             <div
//                 ref={cubeRef}
//                 className='navbar-cube'
//                 style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
//             >
//                 <div className='navbar-edge navbar-edge-front'><p>Hero Page</p></div>
//                 <div className='navbar-edge navbar-edge-back'><p>back Page</p></div>
//                 <div className='navbar-edge navbar-edge-left'></div>
//                 <div className='navbar-edge navbar-edge-right'></div>
//                 <div className='navbar-edge navbar-edge-top'><p>TOP Page</p></div>
//                 <div className='navbar-edge navbar-edge-bottom'><p>BOTTOM Page</p></div>
//             </div>
//         </div>
//     )
// };
// export default Cube;