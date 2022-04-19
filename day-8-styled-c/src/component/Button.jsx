
import { Button } from "antd"

import "antd/dist/antd.css";

export const Buttons = ({ type, children }) => {
   
    return (
        <>
            <Button type={type}>{ children}</Button>
        </>
    )
}