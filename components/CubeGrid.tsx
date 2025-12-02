import React, { useState, useEffect } from 'react';
import './CubeGrid.scss';

interface CubeGridProps {
    rows?: number;
    cols?: number;
}

export const CubeGrid: React.FC<CubeGridProps> = ({ rows = 5, cols = 5 }) => {
    const totalCubes = rows * cols;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Grid 스타일 변수 설정
    const gridStyle = {
        '--rows': rows,
        '--cols': cols,
    } as React.CSSProperties;

    // 마우스가 떠나도 잠시동안 상태 유지 (Ripple effect simulation or just simple hover)
    // 여기서는 간단하게 hover 상태만 처리하지만, 원하면 주변 큐브까지 영향을 줄 수 있습니다.
    
    return (
        <div className="cube-grid-container">
            <div className="cube-grid" style={gridStyle}>
                {Array.from({ length: totalCubes }).map((_, i) => (
                    <Cube key={i} index={i} />
                ))}
            </div>
        </div>
    );
};

const Cube = ({ index }: { index: number }) => {
    const [active, setActive] = useState(false);

    const handleEnter = () => {
        setActive(true);
        // 일정 시간 후 자동으로 복귀 (선택 사항)
        setTimeout(() => setActive(false), 1000);
    };

    return (
        <div 
            className={`cube ${active ? 'is-hovered' : ''}`} 
            onMouseEnter={handleEnter}
        >
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
        </div>
    );
};
