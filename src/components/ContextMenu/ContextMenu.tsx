import React from 'react';

type MenuData = {
    menuDescription: string;
    menuFunction: any;
}

interface ContextMenuProps {
    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */
    showContextMenu: boolean;
    menuData: MenuData[];
    anchorPoint: {
        xClickPosition: number;
        yClickPosition: number;
    }
    //  includes(searchElement: T, fromIndex?: number): boolean;
}

const ContextMenu = ({ showContextMenu, menuData, anchorPoint }: ContextMenuProps) => {
    return (
        <>
            {/* {showContextMenu && ( */}
                <ul
                    className="menu"
                    style={{
                        top: anchorPoint.yClickPosition,
                        left: anchorPoint.xClickPosition,
                    }}
                >
                    <li>
                        <button
                            type="button"
                        // onClick={() => {
                        //     listOfFunctions[callableFunction]();
                        // }}
                        >
                            Atualizar este campo
                        </button>
                    </li>
                    <li>
                        <button type="button"
                        // onClick={() => listOfFunctions.attTodos()}
                        >
                            Atualizar todos os campos
                        </button>
                    </li>
                    <hr className="divider" />
                    <li>
                        <button type="button" onClick={() => alert('aaa')}>
                            Ver diferenças
                        </button>
                    </li>
                </ul>
            {/* )} */}
        </>

    )
};

export default ContextMenu;