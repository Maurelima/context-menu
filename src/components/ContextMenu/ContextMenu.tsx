import React, { useCallback, useEffect, useState } from 'react';

import './ContextMenu.scss'

type MenuData = {
    menuDescription: string;
    menuFunction: () => void;
    divider?: boolean;
}

interface ContextMenuProps {
    /**
     * Replaces browser default contextmenu
     * @param menuData Array containing the menu properties
     * * @param menuDescription Menu title
     * * @param menuFunction Menu action
     * * @param divider Add a separator after the menu
     */
    menuData: MenuData[];
}

const ContextMenu: React.FC<ContextMenuProps> = (props) => {
    const { menuData } = props;
    const [anchorPoints, setAnchorPoints] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);
    const [callableFunction, setCallableFunction] = useState<string>('');

    const handleContextMenu = useCallback(
        (event) => {
            event.preventDefault();
            setAnchorPoints({ x: event.pageX, y: event.pageY });
            setShow(true);
        },
        [setShow, setAnchorPoints]
    );

    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    });
    return (
        <>
            {show && (
                <ul
                    className="menu"
                    style={{
                        top: anchorPoints.y,
                        left: anchorPoints.x,
                    }}
                >
                    {menuData.map((menu) => {
                        return (
                            <>
                                <li>
                                    <button type="button" onClick={menu.menuFunction}>
                                        {menu.menuDescription}
                                    </button>
                                </li>
                                {menu.divider && (
                                    <hr className="divider" />
                                )}
                            </>
                        )
                    })}
                </ul>
            )}
        </>

    )
};

export default ContextMenu;